// React import not required with the automatic JSX runtime
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "react-hot-toast";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { DataScience } from "./components/DataScience";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative antialiased">
      <AnimatedBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-lime origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <main className="relative z-10 px-4 md:px-8 lg:px-16 overflow-x-hidden">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <DataScience />
        <Certifications />
        <Contact />
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "bg-dark-card text-gray-200 border border-neon-blue/50",
          style: {
            background: "#1a1a1a",
            color: "#e5e7eb",
            border: "1px solid rgba(0, 245, 255, 0.5)",
          },
        }}
      />
    </div>
  );
}

export default App;
