import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";
import loja from "../assets/loja.jpeg"; // ajuste o caminho

const stats = [
  { icon: Shield, value: "5+", label: "Anos de experiência" },
  { icon: Clock, value: "2000+", label: "Carros lavados" },
  { icon: Award, value: "100%", label: "Satisfação garantida" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Lado esquerdo: texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              Quem somos
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-6">
              SOBRE O<br />PRETO JATO
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Somos referência em estética automotiva de alta qualidade. Com equipamentos de última geração e 
              produtos premium, garantimos um resultado impecável para o seu veículo.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Nossa equipe é treinada para cuidar de cada detalhe, desde a lavagem simples até tratamentos 
              especializados de pintura e interior. Seu carro merece o tratamento Preto Jato.
            </p>
          </motion.div>

          {/* Lado direito: imagem + estatísticas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Imagem */}
            <div className="relative rounded-sm overflow-hidden border border-border shadow-card">
              <img
                src={loja}
                alt="Estética Automotiva Preto Jato"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Cards de estatísticas - grid responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-card-gradient border border-border rounded-sm p-5 shadow-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center sm:text-left"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <stat.icon className="text-primary" size={26} />
                    </div>
                    <div>
                      <p className="font-display text-3xl tracking-wider text-primary">
                        {stat.value}
                      </p>
                      <p className="font-body text-muted-foreground text-xs uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;