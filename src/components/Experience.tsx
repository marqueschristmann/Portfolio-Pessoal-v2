import type { FC } from "react";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experienceItems = [
  {
    role: "Desenvolvedor BI",
    company: "Tribunal de Contas do Estado",
    period: "2025",
    description:
      "Sistema de Business Intelligence desenvolvido em React, voltado à análise de dados municipais. O projeto transforma informações institucionais em insights estratégicos por meio de visualizações interativas e painéis dinâmicos, facilitando a tomada de decisão baseada em dados.",
  },
  {
    role: "Gerente de TI",
    company: "Prefeitura de Cerro Corá/RN",
    period: "2022 – 2024",
    description:
      "Responsável por toda a infraestrutura técnica incluindo suporte a hardware, redes, periféricos e manutenção de sites — assegurando a conectividade e o funcionamento pleno dos sistemas.",
  },
  {
    role: "Back-End Developer",
    company: "Instituto Federal do Rio Grande do Norte (IFRN)",
    period: "2023",
    description:
      "Desenvolvimento do sistema IsLocked — uma API REST para controle de acesso físico baseada em autenticação via RFID. O projeto integra dispositivos IoT (NodeMCU) com comunicação MQTT e banco de dados PostgreSQL, possibilitando autenticação, registro e monitoramento de usuários em tempo real. Utilizadas tecnologias como Node.js, Express, MQTT.js e dotenv.",
  },
  {
    role: "Freelancer Front-End",
    company: "Software Conteoodo",
    period: "2023 – 2024",
    description:
      "Desenvolvi a interface e as funcionalidades de uma plataforma baseada em Inteligência Artificial, voltada à geração automatizada de posts e conteúdos para redes sociais. Atuei no Front-End utilizando React, Tailwind CSS, Jest.js e boas práticas de usabilidade e performance.",
  },
  {
    role: "Full-Stack Developer (Projeto de Pesquisa)",
    company: "Projeto Independente - Período da Pandemia",
    period: "2021",
    description:
      "Desenvolvimento do QuickClínica — um sistema de agendamento clínico criado durante a pandemia para estudos em desenvolvimento web full-stack. O projeto foi construído com React no front-end e Node.js (Express) no back-end, demonstrando a criação de uma aplicação completa, da interface à lógica do servidor. O sistema permite o gerenciamento de consultas e pacientes, integrando boas práticas de usabilidade e arquitetura REST.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Experience: FC = () => {
  return (
    <Section id="experience" title="Experiências">
      <div className="relative min-h-screen py-16">
        {/* Linha da timeline */}
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-neon-lime/30 transform md:-translate-x-1/2"></div>

        <motion.div
          className="space-y-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceItems.map((exp, index) => (
            <motion.div key={index} className="relative" variants={item}>
              <div className="flex flex-col md:flex-row items-center md:justify-center gap-6">
                <div
                  className={`md:w-1/2 ${
                    index % 2 !== 0 ? "md:order-2 md:pl-10" : "md:pr-10"
                  }`}
                >
                  <h3 className="text-xl font-bold font-orbitron text-neon-lime">
                    {exp.role}
                  </h3>
                  <p className="font-semibold text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-dark-bg border-2 border-neon-lime rounded-full flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-neon-lime" />
                </div>

                <div className="hidden md:block w-1/2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
