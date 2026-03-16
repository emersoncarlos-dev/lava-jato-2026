import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

// Número do WhatsApp no formato internacional
const WHATSAPP_NUMBER = "5581993784501";

const contactInfo = [
  { 
    icon: MapPin, 
    label: "Endereço", 
    value: "Rua Grota, 620 - Planalto-Abreu e Lima",
    link: true 
  },
  { 
    icon: Phone, 
    label: "Telefone", 
    value: "(81) 99378-4501",
    link: true,
    // Agora o telefone também abrirá o WhatsApp
    useWhatsApp: true 
  },
  { 
    icon: Clock, 
    label: "Horário", 
    value: "Seg-Sáb: 8h às 18h",
    link: false 
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    value: "@pretojato2025",
    link: true 
  },
];

const ContactSection = () => {
  const getLinkUrl = (item: typeof contactInfo[0]) => {
    if (item.label === "Endereço") {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.value)}`;
    }
    if (item.label === "Telefone") {
      
      if (item.useWhatsApp) {
        return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;
      }
      // Caso contrário, link para ligação
      const phone = item.value.replace(/\D/g, '');
      return `tel:+55${phone}`;
    }
    if (item.label === "Instagram") {
      return "https://www.instagram.com/pretojato2025?igsh=MTFmeXp5Y2ljcTNscg==";
    }
    return '#';
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Fale conosco
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">
            CONTATO
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card-gradient border border-border rounded-sm p-8 text-center shadow-card hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={26} />
              </div>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {item.label}
              </p>
              {item.link ? (
                <a
                  href={getLinkUrl(item)}
                  target={item.label === "Horário" ? undefined : "_blank"}
                  rel={item.label === "Horário" ? undefined : "noopener noreferrer"}
                  className="font-body text-foreground font-medium text-sm hover:text-primary hover:underline transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-body text-foreground font-medium text-sm">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-sm font-body font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity shadow-red-glow"
          >
            Chamar no WhatsApp
          </a>
          <p className="font-body text-xs text-muted-foreground mt-2">
            Clique para iniciar uma conversa no WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;