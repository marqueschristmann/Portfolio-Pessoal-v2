import type { FC } from "react";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationItems = [
  {
    degree: "Pós-Graduação em Engenharia de Software",
    institution: "Centro Universitário América",
    period: "2024 – 2025",
  },
  {
    degree: "Graduação em Análise e Desenvolvimento de Sistemas Web",
    institution: "IFRN",
    period: "2020 – 2024",
  },
];

export const Education: FC = () => {
  return (
    <Section id="education" title="Formação Acadêmica">
      <div className="space-y-8">
        {educationItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-6 p-6 bg-dark-card/50 backdrop-blur-sm rounded-lg border border-neon-blue/20 shadow-lg shadow-neon-blue/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-neon-blue mt-1">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-orbitron text-gray-100">
                {item.degree}
              </h3>
              <p className="text-neon-blue font-semibold">{item.institution}</p>
              <p className="text-gray-400 text-sm mt-1">{item.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
