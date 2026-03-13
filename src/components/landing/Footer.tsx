const Footer = () => (
  <footer className="py-12 border-t border-border/50">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-display text-lg font-bold tracking-tight text-foreground">
        LETS<span className="text-primary">!</span>DOC
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lets Doc. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
