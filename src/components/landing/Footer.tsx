const Footer = () => (
  <footer className="section-dark py-10" style={{ borderTop: "1px solid hsl(var(--foreground) / 0.08)" }}>
    <div className="mx-auto flex max-w-[98rem] flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-8">
      <div className="flex items-center gap-2">
        <div className="font-display text-lg font-extrabold uppercase tracking-tight text-foreground">LETS<span className="text-primary">!</span>DOC</div>
      </div>
      <p className="text-xs font-medium text-foreground/45">© {new Date().getFullYear()} Lets Doc. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
