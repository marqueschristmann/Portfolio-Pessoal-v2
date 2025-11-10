import React from 'react';
import { Section } from './Section';
import { BrainCircuit, Bot, Database } from 'lucide-react';
import { DataScienceCard } from './DataScienceCard';
import type { DataScienceProject } from './DataScienceCard';


const dataScienceProjects: DataScienceProject[] = [
  {
    id: 1,
    name: 'Chatbot com Gemini API',
    description: 'Um chatbot inteligente desenvolvido para o Telegram, utilizando a API do Google Gemini para processamento de linguagem natural. O projeto foca em respostas contextuais e interações fluidas, demonstrando a aplicação prática de modelos de IA em plataformas de mensageria.',
    url: 'https://github.com/marqueschristmann/chatbot-gemini-telegram',
    topics: ['Python', 'Google Gemini', 'Telegram API', 'NLP', 'IA'],
    icon: <Bot size={24} className="text-neon-blue" />
  },
  {
    id: 2,
    name: 'Análise de Dados com Python',
    description: 'Repositório contendo diversos notebooks de análise de dados exploratória (EDA) utilizando Python e bibliotecas como Pandas, NumPy, Matplotlib e Seaborn. Aborda diferentes datasets para extrair insights e visualizar informações.',
    url: 'https://github.com/marqueschristmann/analise-de-dados-python',
    topics: ['Python', 'Pandas', 'NumPy', 'Data Visualization', 'Jupyter'],
    icon: <Database size={24} className="text-neon-blue" />
  },
  {
    id: 3,
    name: 'IA Para Todos',
    description: 'Um projeto dedicado a desmistificar a Inteligência Artificial. Contém exemplos de código, tutoriais e explicações sobre conceitos fundamentais de Machine Learning e Deep Learning, tornando o conhecimento acessível a todos.',
    url: 'https://github.com/marqueschristmann/ia-para-todos',
    topics: ['Machine Learning', 'Deep Learning', 'Scikit-learn', 'TensorFlow', 'Educação'],
    icon: <BrainCircuit size={24} className="text-neon-blue" />
  }
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