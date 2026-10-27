import { useEffect, useState } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Loader, Clock } from "lucide-react";
import { Section } from "./Section";

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image?: string | null;
  social_image?: string | null;
  readable_publish_date: string;
  reading_time_minutes: number;
  user: { name: string };
}

const topics = [
  { label: "⚛️ Web & React", tag: "react" },
  { label: "📊 Ciência de Dados", tag: "datascience" },
  { label: "🤖 IA", tag: "ai" },
  { label: "🕵️ Cibersegurança", tag: "cybersecurity" },
  { label: "🖥️ Eng. de Software", tag: "softwareengineering" },
];

const cache: Record<string, DevToArticle[]> = {};

export const Newsletter: FC = () => {
  const [active, setActive] = useState(topics[0].tag);
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (cache[active]) {
        setArticles(cache[active]);
        setLoading(false);
        setError(false);
        return;
      }
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `https://dev.to/api/articles?tag=${active}&top=7&per_page=6`
        );
        if (!res.ok) throw new Error(String(res.status));
        const data: DevToArticle[] = await res.json();
        cache[active] = data;
        if (!cancelled) setArticles(data);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [active]);

  return (
    <Section id="newsletter" title="Newsletter Tech">
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        Artigos em destaque da semana nas áreas em que atuo, selecionados
        automaticamente da comunidade DEV.to. Todos os créditos e links levam
        aos autores originais.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {topics.map((t) => (
          <button
            key={t.tag}
            onClick={() => setActive(t.tag)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
              active === t.tag
                ? "border-neon-lime text-neon-lime bg-neon-lime/10"
                : "border-neon-blue/30 text-gray-300 hover:border-neon-blue"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center text-neon-lime">
          <Loader className="animate-spin h-10 w-10" />
        </div>
      )}
      {error && (
        <p className="text-center text-red-400">
          Não foi possível carregar os artigos agora. Tente novamente mais
          tarde.
        </p>
      )}

      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, index) => {
            const img = a.cover_image || a.social_image;
            return (
              <motion.a
                key={a.id}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-dark-card/50 backdrop-blur-sm rounded-lg border border-neon-blue/20 overflow-hidden transition-all duration-300 hover:border-neon-blue hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {img && (
                  <img
                    src={img}
                    alt={a.title}
                    loading="lazy"
                    className="h-40 w-full object-cover"
                  />
                )}
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-lg font-bold text-gray-100 group-hover:text-neon-lime transition-colors mb-2">
                    {a.title}
                  </h3>
                  <p className="text-gray-400 text-sm grow mb-4 line-clamp-3">
                    {a.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>
                      {a.user.name} · {a.readable_publish_date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {a.reading_time_minutes} min
                    </span>
                  </div>
                  <span className="inline-flex items-center mt-3 text-neon-blue font-semibold text-sm">
                    Ler artigo completo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      )}
    </Section>
  );
};
