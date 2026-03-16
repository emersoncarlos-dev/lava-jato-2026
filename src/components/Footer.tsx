import logoPreto from '../assets/logoPreto.png'; // import da logo (mesma do header)

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo e nome do cliente */}
        <div className="flex items-center gap-3">
          <img
            src={logoPreto}
            alt="Preto Jato Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="font-display text-2xl tracking-wider">
            PRETO<span className="text-primary"> JATO</span>
          </span>
        </div>

        {/* Direitos autorais e créditos do desenvolvedor */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="font-body text-muted-foreground text-sm">
            © 2026 Preto Jato. Todos os direitos reservados.
          </p>
          <p className="font-body text-muted-foreground text-xs">
            Desenvolvido por{' '}
            <a
              href="https://github.com/emersoncarlos-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Emerson Carlos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;