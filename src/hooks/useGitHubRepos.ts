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

      setRepos(finalRepos);
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
