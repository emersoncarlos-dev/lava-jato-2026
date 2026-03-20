import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoPreto from '../assets/logoPreto.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-16 md:h-20 px-2 sm:px-4 md:px-6">
        {/* Link da logo com padding esquerdo reduzido */}
        <a href="#inicio" className="flex items-center gap-2 md:gap-3 ml-0 pl-0">
          <img
            src={logoPreto}
            alt="Preto Jato Logo"
            className="h-8 md:h-10 lg:h-12 w-auto object-contain"
          />
          <span className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wider text-foreground whitespace-nowrap">
            PRETO<span className="text-primary"> JATO</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#agendar"
            className="bg-primary text-primary-foreground px-5 py-2 lg:px-6 lg:py-2.5 rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2 focus:outline-none"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-lg text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#agendar"
                onClick={() => setMenuOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-body text-center font-semibold uppercase tracking-wider"
              >
                Agendar
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;