import { motion } from "framer-motion";
import { Droplets, Sparkles, Car, Bike } from "lucide-react";

const categories = [
  {
    title: "MOTOS",
    icon: Bike,
    services: [
      {
        title: "Lavagem Simples",
        description: "Lavagem externa completa com produtos de qualidade. Sua moto brilhando como nova.",
        price: "A partir de R$ 20",
      },
      {
        title: "Lavagem Completa",
        description: "Lavagem externa e detalhamento completo, incluindo motor, rodas e acabamentos.",
        price: "A partir de R$ 35",
      },
    ],
  },
  {
    title: "CARROS",
    icon: Car,
    services: [
      {
        title: "Lavagem Simples",
        description: "Lavagem externa com shampoo automotivo premium. Seu carro limpo e brilhante.",
        price: "A partir de R$ 40",
      },
      {
        title: "Lavagem Completa",
        description: "Lavagem externa e interna completa com produtos premium. Impecável por dentro e por fora.",
        price: "A partir de R$ 60",
      },
      {
        title: "Higienização Interna",
        description: "Limpeza profunda com lavagem de bancos e teto. Eliminação de odores e bactérias.",
        price: "Consulte",
      },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            O que oferecemos
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">
            NOSSOS SERVIÇOS
          </h2>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-3xl md:text-4xl tracking-wider">{category.title}</h3>
              </div>
              <div className={`grid grid-cols-1 gap-6 ${
                    category.services.length === 2 
                      ? 'md:grid-cols-2' 
                      : 'md:grid-cols-3'
                  }`}>
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card-gradient border border-border-red-glow rounded-sm p-8 hover:border-primary/50 transition-colors group shadow-card"
                  >
                    <h4 className="font-display text-2xl tracking-wider mb-3">
                      {service.title}
                    </h4>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <p className="font-body text-primary font-bold text-sm uppercase tracking-wider">
                      {service.price}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
