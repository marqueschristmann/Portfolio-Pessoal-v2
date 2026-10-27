import React from "react";
import { Section } from "./Section";

export const About: React.FC = () => {
  return (
    <Section id="about" title="Sobre Mim">
      <div className="bg-dark-card/50 backdrop-blur-sm p-8 rounded-lg border border-neon-blue/20 shadow-lg shadow-neon-blue/10">
        <p className="text-center text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Olá! Eu sou o Marques, Desenvolvedor Full-Stack e Cientista de Dados.
          Transformo a sua ideia em um sistema, site ou loja virtual que
          realmente funciona, usando React, Node.js, Python, SQL e Power BI.
          Formado pelo IFRN, com pós em Engenharia de Software, Ciência de Dados
          e Cibersegurança, cuido de tudo: da arquitetura à análise de dados,
          sempre com foco em resultado para o seu negócio.
        </p>
        <p className="text-center text-lg text-neon-lime mt-6">
          Tem um projeto em mente?{" "}
          <a
            href="https://wa.me/5584981493410?text=Ol%C3%A1%20Marques!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neon-blue transition-colors"
          >
            Me chame no WhatsApp, o orçamento é sem compromisso!
          </a>
        </p>
      </div>
    </Section>
  );
};
