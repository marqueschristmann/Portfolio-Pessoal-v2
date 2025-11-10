import type { FC } from "react";
import { Section } from "./Section";
import type { GitHubRepo } from "../types";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Star,
  GitFork,
  Loader,
  AlertTriangle,
} from "lucide-react";

const languageColors: { [key: string]: string } = {
  JavaScript: "border-yellow-400 text-yellow-400",
  TypeScript: "border-blue-400 text-blue-400",
  Python: "border-green-400 text-green-400",
  HTML: "border-orange-500 text-orange-500",
  CSS: "border-blue-500 text-blue-500",
  "Node.js": "border-green-500 text-green-500",
  React: "border-sky-400 text-sky-400",
};

const highlightedLanguages = [
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "JavaScript",
];

const getLanguageClass = (lang?: string | null) => {
  if (!lang) return "border-gray-500 text-gray-500";
  if (lang === "JavaScript" || lang === "TypeScript")
    return languageColors["React"];
  return languageColors[lang] || "border-gray-500 text-gray-500";
};

const ProjectCard: FC<{ repo: GitHubRepo; index: number }> = ({
  repo,
  index,
}) => {
  const isHighlighted =
    !!repo.language && highlightedLanguages.includes(repo.language as string);

  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div
          className={`h-full bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border transition-all duration-300 flex flex-col ${
            isHighlighted
              ? "border-neon-lime/30 hover:border-neon-lime hover:shadow-neon-lime-subtle"
              : "border-neon-blue/20 hover:border-neon-blue hover:shadow-neon-blue-subtle"
          } hover:-translate-y-2`}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold font-orbitron text-gray-100 group-hover:text-neon-lime transition-colors duration-300">
              {repo.name}
            </h3>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-neon-blue transition-colors duration-300" />
          </div>
          <p className="text-gray-400 text-sm grow mb-4">
            {repo.description ?? "Sem descrição."}
          </p>
          <div className="flex justify-between items-center text-sm mt-auto">
            <span
              className={`border-b-2 pb-1 ${getLanguageClass(
                repo.language
              )} font-semibold`}
            >
              {repo.language ?? "N/A"}
            </span>
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center">
                <GitFork className="w-4 h-4 mr-1" />
                <span>{repo.forks_count}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export const Projects: FC = () => {
  const { repos, loading, error } = useGitHubRepos("marqueschristmann");

  return (
    <Section id="projects" title="Projetos Recentes">
      {loading && (
        <div className="flex flex-col items-center justify-center text-center text-neon-lime">
          <Loader className="animate-spin h-12 w-12 mb-4" />
          <p className="text-xl">Carregando projetos do GitHub...</p>
        </div>
      )}
      {error && (
        <div className="flex flex-col items-center justify-center text-center text-red-500 bg-red-500/10 p-6 rounded-lg border border-red-500/50">
          <AlertTriangle className="h-12 w-12 mb-4" />
          <p className="text-xl font-semibold">Erro ao carregar projetos</p>
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <ProjectCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      )}
    </Section>
  );
};
