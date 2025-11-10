import type { FC, ReactElement } from "react";
import { Section } from "./Section";
import { motion } from "framer-motion";
import {
  SiPostman,
  SiTailwindcss,
  SiAndroid,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiLinux,
} from "react-icons/si";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaPython,
  FaDocker,
  FaPlus,
} from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";

const iconMap: Record<string, ReactElement> = {
  Postman: <SiPostman size={32} />,
  Tailwindcss: <SiTailwindcss size={32} />,
  ReactNative: <SiAndroid size={32} />,
  Typescript: <SiTypescript size={32} />,
  React: <FaReact size={32} />,
  Javascript: <DiJavascript1 size={32} />,
  Node: <DiNodejs size={32} />,
  Express: <SiExpress size={32} />,
  MongoDb: <SiMongodb size={32} />,
  Git: <FaGitAlt size={32} />,
  Github: <FaGithub size={32} />,
  Npm: <FaNpm size={32} />,
  Figma: <FaFigma size={32} />,
  Bootstrap: <FaBootstrap size={32} />,
  Vercel: <SiVercel size={32} />,
  Python: <FaPython size={32} />,
  Django: <SiDjango size={32} />,
  Mysql: <SiMysql size={32} />,
  Postgresql: <SiPostgresql size={32} />,
  Docker: <FaDocker size={32} />,
  Linux: <SiLinux size={32} />,
  Mais: <FaPlus size={32} />,
};

const skills = [
  { name: "React", key: "React" },
  { name: "Tailwind CSS", key: "Tailwindcss" },
  { name: "Node.js", key: "Node" },
  { name: "Jest.js", key: "Jest" },
  { name: "Python", key: "Python" },
  { name: "Business Intelligence", key: "BI" },
  { name: "Git", key: "Git" },
  { name: "SQL", key: "Postgresql" },
  { name: "Postman", key: "Postman" },
  { name: "React Native", key: "ReactNative" },
  { name: "Typescript", key: "Typescript" },
  { name: "Javascript", key: "Javascript" },
  { name: "Express", key: "Express" },
  { name: "MongoDB", key: "MongoDb" },
  { name: "Github", key: "Github" },
  { name: "Npm", key: "Npm" },
  { name: "Figma", key: "Figma" },
  { name: "Bootstrap", key: "Bootstrap" },
  { name: "Vercel", key: "Vercel" },
  { name: "Django", key: "Django" },
  { name: "MySQL", key: "Mysql" },
  { name: "PostgreSQL", key: "Postgresql" },
  { name: "Docker", key: "Docker" },
  { name: "Linux", key: "Linux" },
  { name: "Mais", key: "Mais" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

export const Skills: FC = () => {
  return (
    <Section id="skills" title="Habilidades Tech">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group bg-dark-card/50 backdrop-blur-sm p-6 rounded-lg border border-neon-lime/20 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-neon-lime hover:shadow-neon-lime-subtle hover:-translate-y-2"
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="text-neon-lime mb-3 group-hover:text-white transition-colors duration-300">
              {iconMap[skill.key] ?? <FaPlus size={32} />}
            </div>
            <h3 className="text-lg font-rajdhani font-semibold text-gray-200 group-hover:text-neon-lime transition-colors duration-300">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
