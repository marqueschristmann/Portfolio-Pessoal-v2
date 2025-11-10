import React from "react";
import { Section } from "./Section";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <Github />,
    href: "https://github.com/marqueschristmann",
    name: "GitHub",
  },
  {
    icon: <Linkedin />,
    href: "https://br.linkedin.com/in/marques-christmann-363a3a224/",
    name: "LinkedIn",
  },
  {
    icon: <Instagram />,
    href: "https://www.instagram.com/marqueschristmann/",
    name: "Instagram",
  },
  {
    icon: <MessageCircle />,
    href: "https://wa.me/5584981493410?text=Olá%20Marques!%20Gostaria%20de%20falar%20sobre%20um%20projeto%20freelancer.",
    name: "WhatsApp",
  },
  {
    icon: <Mail />,
    href: "mailto:marqueschristmann8@gmail.com",
    name: "Email",
  },
];

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Entre em Contato">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-300 mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
          vontade para entrar em contato ou enviar sua demanda freelancer.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-3 text-lg">
            <Mail className="w-6 h-6 text-neon-lime" />
            <a
              href="mailto:marqueschristmann8@gmail.com"
              className="hover:text-neon-lime transition-colors"
            >
              marqueschristmann8@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Phone className="w-6 h-6 text-neon-blue" />
            <a
              href="tel:+5584981493410"
              className="hover:text-neon-blue transition-colors"
            >
              (84) 98149-3410
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="p-4 bg-dark-card rounded-full border-2 border-transparent transition-all duration-300 hover:border-neon-lime hover:shadow-neon-lime-subtle hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              {React.cloneElement(link.icon, {
                className: "w-8 h-8 text-gray-300",
              })}
            </motion.a>
          ))}
        </div>

        {/* Botão para envio de demanda freelancer */}
        <motion.a
          href="https://wa.me/5584981493410?text=Olá%20Marques!%20Tenho%20uma%20demanda%20freelancer%20para%20você."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 rounded-xl text-dark font-semibold text-lg transition-all duration-300 hover:bg-neon-blue hover:text-white shadow-neon-lime"
        >
          Enviar Demanda Freelancer 🚀
        </motion.a>
      </div>
    </Section>
  );
};
