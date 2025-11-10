import React from "react";
import { Section } from "./Section";

export const About: React.FC = () => {
  return (
    <Section id="about" title="Sobre Mim">
      <div className="bg-dark-card/50 backdrop-blur-sm p-8 rounded-lg border border-neon-blue/20 shadow-lg shadow-neon-blue/10">
        <p className="text-center text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Desenvolvedor Full-Stack e Cientista de dados com experiência em React,
          Tailwind, Jest.js, Node.js e ferramentas analíticas como Python, SQL,
          Power BI e R. Formado pelo IFRN e pós-graduado em Engenharia de
          Software, participo de todo o ciclo de desenvolvimento da arquitetura
          de sistemas à análise e visualização de dados. Tenho perfil analítico,
          foco em inovação e mentalidade orientada a resultados.
        </p>
      </div>
    </Section>
  );
};
