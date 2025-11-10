import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export interface DataScienceProject {
  id: number;
  name: string;
  description: string;
  url: string;
  topics: string[];
  icon: React.ReactElement;
}

interface DataScienceCardProps {
  project: DataScienceProject;
  index: number;
}

export const DataScienceCard: React.FC<DataScienceCardProps> = ({
  project,
  index,
}) => {
  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="h-full bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/20 transition-all duration-300 flex flex-col hover:border-neon-blue hover:shadow-neon-blue-subtle hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-4">
            {project.icon}
            <h3 className="text-xl font-bold font-orbitron text-gray-100 group-hover:text-neon-blue transition-colors duration-300">
              {project.name}
            </h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed grow mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.topics.map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 bg-neon-lime/10 border border-neon-lime/50 text-neon-lime text-xs font-semibold rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-2">
            <span className="inline-flex items-center text-neon-blue font-semibold group-hover:text-neon-lime transition-colors duration-300">
              Ver no GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};
