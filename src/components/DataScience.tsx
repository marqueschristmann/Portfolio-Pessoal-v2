import React from "react";
import { Section } from "./Section";
import { AlignStartVertical, BrainCircuit, MapPin, Scale } from "lucide-react";
import { DataScienceCard } from "./DataScienceCard";
import type { DataScienceProject } from "./DataScienceCard";

const dataScienceProjects: DataScienceProject[] = [
  {
    id: 1,
    name: "Harvey-Specter-IA",
    description:
      "Um assistente jurídico baseado em IA, desenvolvido com Streamlit, LangChain, Groq e Hugging Face. O sistema utiliza o modelo LLaMA 3.1 e uma base vetorial ChromaDB para responder perguntas jurídicas com fundamentação técnica em Direito Corporativo, M&A, Compliance e Litígios Empresariais.",
    url: "https://github.com/marqueschristmann/Harvey-Specter-IA",
    topics: [
      "Python",
      "Streamlit",
      "LangChain",
      "Groq",
      "Hugging Face",
      "ChromaDB",
      "RAG",
      "IA Jurídica",
    ],
    icon: (
      <span className="text-indigo-600">
        <Scale />
      </span>
    ),
  },

  {
    id: 2,
    name: "Painel de Controle do Boot de Negociação",
    description:
      "Um dashboard interativo para monitoramento e controle de robôs de negociação em tempo real. Desenvolvido com React, TypeScript e Tailwind CSS, o sistema exibe gráficos de mercado, sinais de compra e venda e métricas de desempenho, permitindo acompanhamento dinâmico das operações automatizadas.",
    url: "https://github.com/marqueschristmann/Boot-Negocicao",
    topics: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn-ui",
      "Trading Bot",
      "Análise de Mercado",
      "Dashboard",
    ],
    icon: (
      <span className="text-neon-blue">
        <AlignStartVertical />
      </span>
    ),
  },
  {
    id: 4,
    name: "Painel Interativo COVID-19 Brasil",
    description:
      "Dashboard desenvolvido em Python com Dash e Plotly para visualização interativa da evolução da COVID-19 no Brasil em 2025. Exibe mapas, gráficos e indicadores em tempo real por estado e para o país inteiro, com interface moderna e responsiva baseada em Bootstrap.",
    url: "https://github.com/marqueschristmann/Painel-Interativo-COVID-19-Brasil",
    topics: [
      "Python",
      "Dash",
      "Plotly",
      "Pandas",
      "Data Visualization",
      "GeoJSON",
      "Analytics",
    ],
    icon: (
      <span className="text-rose-500">
        <BrainCircuit />
      </span>
    ),
  },
  {
    id: 4,
    name: "Dashboard-Licenciamentos",
    description:
      "Um dashboard interativo desenvolvido em Dash para análise espacial de licenciamentos e requerimentos minerários por estado. O sistema processa o dataset original da ANM, gera agregações por UF e visualiza dados em gráficos de barras, pizza e mapa interativo de pontos. Inclui filtragem por substância e controle de Top N estados.",
    url: "https://github.com/marqueschristmann/Dashboard-de-Licenciamentos-mineradoras",
    topics: [
      "Python",
      "Dash",
      "Plotly",
      "GeoJSON",
      "Pandas",
      "Análise Espacial",
      "Visualização de Dados",
      "ANM",
    ],
    icon: (
      <span className="text-emerald-600">
        <MapPin />
      </span>
    ),
  },
];

export const DataScience: React.FC = () => {
  return (
    <Section id="datascience" title="Ciência de Dados & IA">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataScienceProjects.map((project, index) => (
          <DataScienceCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};
