import type { FC } from "react";
import { Section } from "./Section";
import {
  Briefcase,
  CheckCircle2,
  Layers,
  Network,
  Code2,
  BarChart3,
  Server,
  Users,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  meta: string;
  summary: string;
  description: string;
  activities: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    role: "Assessor de TI",
    company: "Câmara Municipal de Lagoa Nova/RN",
    meta: "Tecnologia da Informação | Sistemas Institucionais | Infraestrutura e Transformação Digital",
    summary: "Atual",
    description:
      "Atuação no suporte e na evolução tecnológica da Câmara Municipal, contribuindo para a modernização dos processos institucionais, a disponibilidade dos serviços digitais e a organização da infraestrutura de TI. Responsável pelo acompanhamento de sistemas, implantação de soluções tecnológicas e suporte às atividades administrativas e legislativas.",
    activities: [
      "Implantação, configuração, manutenção e acompanhamento de sistemas utilizados nas rotinas administrativas e legislativas.",
      "Administração e suporte à infraestrutura tecnológica, incluindo computadores, periféricos, conectividade e recursos de rede.",
      "Participação no desenvolvimento, na organização e na manutenção do portal institucional, com foco em acessibilidade, transparência pública e disponibilização de informações ao cidadão.",
      "Apoio à organização e publicação de conteúdos institucionais, incluindo notícias, informações administrativas, estrutura organizacional, perguntas frequentes e dados de interesse público.",
      "Acompanhamento de soluções de processo eletrônico, transparência pública e gestão documental, considerando a preservação dos registros e a continuidade dos serviços.",
      "Articulação técnica com fornecedores e equipes responsáveis pelos sistemas institucionais para resolução de problemas, solicitações de melhorias e acompanhamento de demandas.",
      "Apoio à integração e à utilização de soluções de governo digital, visando aprimorar o acesso à informação e a eficiência dos processos internos.",
      "Identificação de falhas, análise de problemas técnicos e implementação de melhorias nos serviços de tecnologia.",
      "Contribuição para a padronização de informações, organização de conteúdos digitais e melhoria da experiência dos usuários dos sistemas institucionais.",
    ],
  },
  {
    role: "Gerente de TI",
    company: "Prefeitura Municipal de Cerro Corá/RN",
    meta: "PM-Cerro Corá | 2022 – 2024 | Gestão de TI e Infraestrutura Tecnológica",
    summary: "2022 – 2024",
    description:
      "Responsável pela gestão e pelo acompanhamento dos recursos de tecnologia da informação da administração municipal, assegurando o funcionamento da infraestrutura tecnológica e oferecendo suporte às atividades dos setores administrativos. Atuação na manutenção dos recursos computacionais, conectividade, sistemas e serviços digitais utilizados pela Prefeitura.",
    activities: [
      "Gerenciamento e acompanhamento da infraestrutura de TI, incluindo computadores, equipamentos, periféricos e recursos tecnológicos.",
      "Administração e suporte às redes locais e à conectividade, com identificação de falhas e resolução de problemas de comunicação.",
      "Atendimento técnico aos usuários, realizando diagnóstico de incidentes, manutenção preventiva e corretiva e suporte aos equipamentos.",
      "Instalação, configuração e manutenção de sistemas operacionais, softwares e ferramentas utilizadas nas atividades administrativas.",
      "Acompanhamento da disponibilidade e do funcionamento dos sistemas utilizados pelos setores municipais.",
      "Manutenção e atualização de sites institucionais, contribuindo para a continuidade dos serviços digitais e a disponibilização de informações públicas.",
      "Identificação de necessidades tecnológicas e encaminhamento de demandas para correção, atualização ou melhoria dos recursos existentes.",
      "Apoio aos servidores municipais na utilização de sistemas e equipamentos, promovendo maior eficiência nas rotinas de trabalho.",
      "Organização e acompanhamento das demandas de suporte, priorizando a continuidade dos serviços e a redução de interrupções.",
      "Contribuição para a estabilidade operacional do ambiente tecnológico e para a utilização adequada dos recursos de informática da administração pública.",
    ],
  },
  {
    role: "Pesquisador e Desenvolvedor Full Stack",
    company: "Sistema de Gestão para Clínicas",
    meta: "Instituto Federal | 2023 | Pesquisa e Desenvolvimento de Software",
    summary: "2023",
    description:
      "Participação em projeto de desenvolvimento de sistema web para gestão de clínicas, contemplando funcionalidades destinadas à organização de informações, ao gerenciamento de cadastros e ao acompanhamento de agendamentos e relatórios. Atuação no desenvolvimento de funcionalidades de ponta a ponta, considerando as necessidades dos usuários e a estruturação dos componentes do sistema.",
    activities: [
      "Levantamento e organização dos requisitos funcionais relacionados à gestão de clínicas.",
      "Desenvolvimento de funcionalidades para cadastro e gerenciamento de informações.",
      "Implementação de módulos de agendamento, com foco na organização dos atendimentos e na consulta de informações.",
      "Desenvolvimento de recursos para geração e consulta de relatórios gerenciais.",
      "Participação na construção das interfaces e na implementação das regras de negócio da aplicação.",
      "Integração entre os componentes da aplicação, considerando o fluxo de informações entre interface, lógica de negócio e persistência de dados.",
      "Organização e estruturação do código-fonte, buscando facilitar a manutenção e a evolução das funcionalidades.",
      "Aplicação de boas práticas de desenvolvimento de software e utilização de tecnologias modernas para construção de aplicações web.",
      "Validação das funcionalidades implementadas e identificação de inconsistências durante o desenvolvimento.",
      "Contribuição para a concepção de uma solução digital capaz de centralizar informações e apoiar as rotinas operacionais de uma clínica.",
    ],
  },
  {
    role: "Desenvolvedor de Business Intelligence",
    company: "Sistema de Análise de Dados do TCE",
    meta: "Projeto independente | Setembro de 2025 | React e Visualização de Dados",
    summary: "Set/2025",
    description:
      "Desenvolvimento autônomo de uma aplicação de Business Intelligence (BI) voltada à análise e à visualização de dados institucionais relacionados ao Tribunal de Contas do Estado (TCE). O projeto teve como objetivo transformar informações em visualizações estruturadas e facilitar a interpretação de indicadores para apoiar análises e processos de tomada de decisão.",
    activities: [
      "Análise e organização de dados institucionais para apresentação em uma interface de consulta e visualização.",
      "Desenvolvimento da aplicação web utilizando React.",
      "Estruturação de componentes para apresentação de informações, indicadores e resultados analíticos.",
      "Construção de interfaces orientadas à consulta e à interpretação de dados.",
      "Organização visual de informações para facilitar a identificação de padrões, comparações e aspectos relevantes dos dados.",
      "Desenvolvimento de recursos de visualização interativa, conforme as funcionalidades previstas no projeto.",
      "Organização dos componentes da aplicação com foco em reutilização, manutenção e evolução.",
      "Aplicação de conceitos de Business Intelligence para transformar conjuntos de informações em recursos úteis à análise institucional.",
      "Priorização da clareza das informações e da usabilidade, buscando facilitar a navegação e a compreensão dos resultados apresentados.",
      "Estruturação da solução para permitir a evolução de funcionalidades e a incorporação de novas necessidades analíticas.",
    ],
  },
  {
    role: "Desenvolvedor de Sistemas",
    company: "Projetos Avlis / SGOPE",
    meta: "Desenvolvimento de Aplicações Web | Gestão Operacional | Integração e Implantação",
    summary: "Em produção",
    description:
      "Atuação no desenvolvimento e na implantação de soluções web, com destaque para o SGOPE, sistema voltado à gestão de operações em parques eólicos. O projeto envolve a estruturação de aplicações, a integração entre interface e serviços de backend, a organização de dados e a preparação de ambientes para disponibilização dos sistemas.",
    activities: [
      "Desenvolvimento e evolução de aplicações web voltadas à gestão e ao acompanhamento de processos operacionais.",
      "Participação na concepção e na organização arquitetural dos sistemas, considerando a separação de responsabilidades entre frontend, backend e banco de dados.",
      "Desenvolvimento de interfaces utilizando React e tecnologias do ecossistema JavaScript/TypeScript.",
      "Implementação e integração de serviços de backend com Node.js e Express, conforme a arquitetura do projeto.",
      "Estruturação e integração com banco de dados PostgreSQL para persistência e consulta de informações.",
      "Implementação e integração de endpoints de API para comunicação entre as interfaces e os serviços da aplicação.",
      "Desenvolvimento e acompanhamento de funcionalidades relacionadas à gestão operacional, aos registros de atividades e à organização de informações.",
      "Organização do código-fonte e dos componentes do sistema, buscando facilitar a manutenção e a expansão das funcionalidades.",
      "Configuração e acompanhamento de variáveis de ambiente, serviços, conexões com banco de dados e parâmetros necessários à execução das aplicações.",
      "Participação na implantação e na configuração de ambientes de produção, incluindo hospedagem, domínios, comunicação entre serviços e resolução de problemas de disponibilização.",
      "Diagnóstico e correção de falhas relacionadas à integração, à configuração dos ambientes, às requisições de API e à comunicação entre frontend e backend.",
      "Acompanhamento de problemas de implantação, conectividade e compatibilidade entre dependências e ambientes de execução.",
      "Contribuição para a evolução das soluções tecnológicas, buscando melhorar a organização, a confiabilidade e a eficiência dos sistemas.",
    ],
  },
];

const competencies = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Análise e arquitetura de sistemas",
    text: "Organização de projetos, levantamento de necessidades, estruturação de componentes e integração de soluções.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Engenharia de Software",
    text: "Desenvolvimento de aplicações web, organização de código, manutenção de sistemas e aplicação de boas práticas.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Desenvolvimento Full Stack",
    text: "React, JavaScript/TypeScript, Node.js, Express, APIs e PostgreSQL.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Business Intelligence e Dados",
    text: "Organização, análise e visualização de dados para apoiar decisões.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Infraestrutura e implantação",
    text: "Suporte técnico, redes, configuração de ambientes e acompanhamento de aplicações em produção.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Gestão de TI",
    text: "Atendimento a usuários, acompanhamento de demandas, suporte a sistemas e continuidade dos serviços tecnológicos.",
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "Governo Digital",
    text: "Sistemas institucionais, portais públicos, transparência e modernização de processos administrativos.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Experience: FC = () => {
  return (
    <Section id="experience" title="Experiência Profissional e Projetos">
      <div className="relative">
        {/* Linha da timeline */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neon-lime/30" />

        <motion.div
          className="space-y-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {experienceItems.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              className="relative pl-12 sm:pl-14"
              variants={item}
            >
              <div className="absolute left-4 -translate-x-1/2 top-2 w-8 h-8 bg-dark-bg border-2 border-neon-lime rounded-full flex items-center justify-center z-10">
                <Briefcase size={16} className="text-neon-lime" />
              </div>

              <div className="bg-dark-card/50 backdrop-blur-sm p-5 sm:p-6 rounded-lg border border-neon-blue/20 shadow-lg shadow-neon-blue/10 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg sm:text-xl font-bold font-orbitron text-neon-lime break-words">
                    {index + 1}. {exp.role}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-neon-blue/50 text-neon-blue whitespace-nowrap">
                    {exp.summary}
                  </span>
                </div>
                <p className="font-semibold text-gray-100 text-base sm:text-lg">
                  {exp.company}
                </p>
                <p className="text-xs sm:text-sm text-neon-blue/80 mb-4 break-words">
                  {exp.meta}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                  {exp.description}
                </p>

                <h4 className="font-orbitron text-sm text-gray-100 mb-3">
                  Principais atividades e responsabilidades
                </h4>
                <ul className="space-y-2">
                  {exp.activities.map((act) => (
                    <li
                      key={act}
                      className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-neon-lime shrink-0" />
                      <span className="min-w-0 break-words">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-orbitron font-bold text-center mb-8">
          <span className="text-neon-lime">Competências</span>{" "}
          <span className="text-neon-blue">profissionais consolidadas</span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competencies.map((c) => (
            <div
              key={c.title}
              className="bg-dark-card/50 p-5 rounded-lg border border-neon-blue/20 hover:border-neon-lime transition-colors duration-300"
            >
              <div className="text-neon-lime mb-2">{c.icon}</div>
              <h4 className="font-bold text-gray-100 mb-1">{c.title}</h4>
              <p className="text-gray-400 text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
