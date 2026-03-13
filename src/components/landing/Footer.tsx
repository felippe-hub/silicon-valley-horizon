const Footer = () => (
  <footer className="py-10 section-dark" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="mx-auto max-w-[98rem] px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-display text-lg font-bold tracking-tight text-lets-white">
        LETS<span style={{ color: "#36A9E1" }}>!</span>DOC
      </div>
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
        © {new Date().getFullYear()} Lets Doc. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
