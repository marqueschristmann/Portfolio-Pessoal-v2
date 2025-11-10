import React from "react";
import { motion } from "framer-motion";
import { Download, Rocket } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center">
        <motion.div
          className="w-60 h-60 md:w-48 md:h-48 rounded-full mb-8 bg-dark-card border-2 border-neon-blue flex items-center justify-center"
          style={{ boxShadow: "0 0 15px rgba(0, 245, 255, 0.6)" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="../../src/assets/profile.jpg"
            alt="José Marques da Silva"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-neon-blue">Marqueschristmann</span>{" "}
        </motion.h1>

        <motion.h3
          className="text-lg md:text-2xl text-gray-300 font-rajdhani mb-6 tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-neon-lime">José</span>{" "}
          <span className="text-neon-blue">Marques</span>{" "}
          <span className="text-white">da Silva</span>
        </motion.h3>

        <motion.h2
          className="text-lg md:text-2xl text-gray-300 font-rajdhani mb-6 tracking-widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Desenvolvedor de Software | Full-Stack | Cientista de Dados
        </motion.h2>

        <motion.p
          className="text-md md:text-xl text-gray-400 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          “Transformando ideias em soluções inteligentes.”
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="/Curriculo_Jose_Marques.pdf"
            download
            className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-dark-card border-2 border-neon-lime rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-neon-lime hover:shadow-neon-lime-subtle"
          >
            <Download className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-1" />
            Baixar Currículo
          </a>
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-dark-card border-2 border-neon-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-neon-blue hover:shadow-neon-blue-subtle"
          >
            <Rocket className="w-5 h-5 mr-2 transition-transform group-hover:rotate-45" />
            Meus Projetos
          </a>
        </motion.div>
      </div>
    </section>
  );
};
