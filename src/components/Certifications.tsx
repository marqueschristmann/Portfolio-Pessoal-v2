import React from "react";
import { Section } from "./Section";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  "Ciência de Dados e Aprendizagem de Máquina (FIAP)",
  "Python para Geoprocessamento (Udemy)",
  "BIM – Escola Virtual (ENAP)",
  "Blockchain no Setor Público (ENAP)",
  "Gestão de Infraestrutura de TI (FIAP)",
  "Governança de Dados (ENAP)",
  "Basico ao Avançado Power BI (Microsoft)",
  "Análise de Dados com Python (Data Science Academy)",
  "Fundamentos de Redes de Computadores (Coursera)",
  "Desenvolvimento Web Full-Stack (Alura)",
  "Node.js: API REST com Express (Udemy)",
  "React: Fundamentos e Práticas (Udemy)",
  "SQL para Análise de Dados (DataCamp)",
  "React Native: Desenvolvimento Mobile (Rocketseat)",
];

export const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Cursos e Certificações">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-3 bg-dark-card/30 rounded-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BadgeCheck className="w-6 h-6 text-neon-lime shrink-0" />
            <span className="text-gray-300 text-lg">{cert}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
