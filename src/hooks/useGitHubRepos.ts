import { useState, useEffect, useCallback } from "react";
import type { GitHubRepo } from "../types";
import toast from "react-hot-toast";

// Palavras-chave relacionadas a desenvolvimento web/front-end/back-end
const WEB_DEV_KEYWORDS = [
  "react",
  "reactjs",
  "next",
  "vite",
  "webpack",
  "tailwind",
  "tailwindcss",
  "css",
  "html",
  "javascript",
  "typescript",
  "node",
  "nodejs",
  "express",
  "api",
  "rest",
  "graphql",
  "frontend",
  "backend",
  "web",
  "scss",
];

// Palavras-chave de data science para exclusão (caso queira evitar misturar)
const DATA_SCIENCE_KEYWORDS = [
  "ia",
  "ai",
  "ml",
  "machine-learning",
  "data-science",
  "ciencia-de-dados",
  "data-analysis",
  "analise-de-dados",
  "analytics",
  "pandas",
  "numpy",
  "tensorflow",
  "pytorch",
  "scikit-learn",
  "chatbot",
  "nlp",
  "dados",
  "análise",
  "vision",
  "gemini",
  "deep-learning",
];

export const useGitHubRepos = (username: string) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`
      );
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      const data: GitHubRepo[] = await response.json();

      // Filtra apenas repositórios que pareçam ser de desenvolvimento web
      const webDevRepos = data.filter((repo) => {
        const topics = Array.isArray(repo.topics) ? repo.topics : [];

        const repoContent = [repo.name, repo.description ?? "", ...topics]
          .join(" ")
          .toLowerCase();

        // Deve conter ao menos UMA palavra-chave web e NÃO conter keywords de data-science
        const hasWebKeyword = WEB_DEV_KEYWORDS.some((keyword) =>
          repoContent.includes(keyword)
        );
        const hasDataScience = DATA_SCIENCE_KEYWORDS.some((keyword) =>
          repoContent.includes(keyword)
        );
        return hasWebKeyword && !hasDataScience;
      });

      // Se o filtro ficar muito restrito (poucos repos), relaxamos os critérios
      const desired = 9;
      let finalRepos = webDevRepos;
      if (finalRepos.length < desired) {
        // pega repositórios que NÃO são de data science (mas podem não ter keywords web)
        const nonDataScience = data.filter((repo) => {
          const topics = Array.isArray(repo.topics) ? repo.topics : [];
          const repoContent = [repo.name, repo.description ?? "", ...topics]
            .join(" ")
            .toLowerCase();
          const hasDataScience = DATA_SCIENCE_KEYWORDS.some((keyword) =>
            repoContent.includes(keyword)
          );
          return !hasDataScience;
        });

        // concatena, removendo duplicados, e ordena por data de push recente (se disponível)
        const combined = [...finalRepos];
        for (const r of nonDataScience) {
          if (combined.findIndex((x) => x.id === r.id) === -1) combined.push(r);
          if (combined.length >= desired) break;
        }

        // se ainda não temos o suficiente, apenas use os primeiros (já ordenados pela API)
        finalRepos = combined.slice(0, desired);
      } else {
        finalRepos = finalRepos.slice(0, desired);
      }

      // Se alguma descrição estiver vazia, tentamos extrair uma primeira parte
      // do README (raw.githubusercontent.com) como fallback.
      const fetchReadmeSnippet = async (owner: string, repoName: string) => {
        const branches = ["main", "master"];
        for (const b of branches) {
          try {
            const rawUrl = `https://raw.githubusercontent.com/${owner}/${repoName}/${b}/README.md`;
            const resp = await fetch(rawUrl);
            if (!resp.ok) continue;
            const text = await resp.text();
            if (!text) continue;

            // extrai o primeiro parágrafo (primeira sequência de linhas não vazias)
            const paragraphs = text
              .split(/\r?\n\r?\n/)
              .map((p) => p.trim())
              .filter(Boolean);
            if (paragraphs.length === 0) continue;
            const first = paragraphs[0]
              .split(/\r?\n/)
              .map((l) => l.trim())
              .filter(Boolean)
              .join(" ");

            // limpa Markdown básico (badges, imagens) para ficar legível
            const cleaned = first
              .replace(/!\[.*?\]\(.*?\)/g, "")
              .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
              .replace(/#+\s*/g, "")
              .trim();

            if (cleaned) return cleaned;
          } catch {
            // ignore and try next branch
            continue;
          }
        }
        return null;
      };

      const owner = username;
      const reposWithReadme = await Promise.all(
        finalRepos.map(async (r) => {
          if (r.description && r.description.trim().length > 0) return r;
          try {
            const snippet = await fetchReadmeSnippet(owner, r.name);
            if (snippet) return { ...r, description: snippet };
          } catch {
            // noop
          }
          return r;
        })
      );

      setRepos(reposWithReadme);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      toast.error("Falha ao buscar projetos do GitHub.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return { repos, loading, error };
};
