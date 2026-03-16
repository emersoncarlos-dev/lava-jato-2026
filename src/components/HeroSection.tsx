import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-carwash.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Carro sendo lavado no Preto Jato"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary font-semibold mb-4"
        >
          Estética Automotiva
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-6xl sm:text-7xl md:text-9xl leading-none tracking-wider mb-6"
        >
          <span className="text-foreground">PRETO</span>
          <br />
          <span className="text-gradient text-neon-red">JATO</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          Seu carro merece o melhor tratamento. Lavagem profissional com qualidade que brilha.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#servicos"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-sm font-body font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity shadow-red-glow"
          >
            Ver Serviços
          </a>
          <a
            href="#agendar"
            className="border border-foreground/30 text-foreground px-10 py-4 rounded-sm font-body font-bold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-colors"
          >
            Agendar Agora
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-muted-foreground" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;