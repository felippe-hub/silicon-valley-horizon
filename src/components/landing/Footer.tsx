const Footer = () => (
  <footer className="flex flex-col items-center justify-between gap-4 border-t border-[--border-color] px-6 py-11 md:flex-row md:px-14">
    <img src="/letsdoc-white.svg" alt="Lets!DOC" className="h-7 w-auto" />
    <p className="text-[13px] text-[--muted]">© {new Date().getFullYear()} Lets!DOC. Todos os direitos reservados.</p>
    <p className="text-[13px] text-[--muted]">Marketing médico especializado</p>
  </footer>
);

export default Footer;
