import { motion } from "framer-motion";
import carroSujo from "../assets/carroSujo.jpeg";
import carroLimpo from "../assets/carroLimpo.jpeg";
import branco1 from "../assets/branco1.png";
import branco2 from "../assets/branco2.png";
import moto1Suja from "../assets/moto-1-Suja.jpeg";
import moto1Limpa from "../assets/moto-1-Limpa.jpeg";
import moto2Suja from "../assets/moto-2-Suja.jpeg";
import moto2Limpa from "../assets/moto-2-Limpa.jpeg";
import banco1 from "../assets/banco1.jpeg";
import banco2 from "../assets/banco2.jpeg";

const galleryItems = [
  {
    id: 1,
    category: "Carro",
    before: carroSujo,
    after: carroLimpo,
  },
  {
    id: 2,
    category: "Moto",
    before: moto1Suja,
    after: moto1Limpa,
  },
  {
    id: 3,
    category: "Carro",
    before: branco1,
    after: branco2,
  },
  {
    id: 4,
    category: "Moto",
    before: moto2Suja,
    after: moto2Limpa,
  },
  {
    id: 5,
    category: "Lavagem de Bancos",
    before: banco1,
    after: banco2,
  },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            ANTES & <span className="text-primary">DEPOIS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira a transformação que fazemos em cada veículo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden border border-border bg-card"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {item.category}
                </span>
              </div>
              <div className="grid grid-cols-2">
                <div className="relative overflow-hidden">
                  <div className="absolute top-2 left-2 z-10 bg-destructive/80 text-destructive-foreground text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                    Antes
                  </div>
                  <img
                    src={item.before}
                    alt={`${item.category} antes`}
                    className="w-full h-48 md:h-56 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <div className="absolute top-2 right-2 z-10 bg-primary/80 text-primary-foreground text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                    Depois
                  </div>
                  <img
                    src={item.after}
                    alt={`${item.category} depois`}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;