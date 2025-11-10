import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ id, title, children }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id={id}
      className="py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center mb-12">
        <span className="text-neon-lime">{title.split(" ")[0]}</span>
        <span className="text-neon-blue ml-2">
          {title.substring(title.indexOf(" ") + 1)}
        </span>
      </h2>
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
};
