import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Processo", href: "#processo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultado" },
  { label: "Sobre", href: "#sobre" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[200] flex items-center justify-between px-6 transition-all duration-300 md:px-14 ${
        scrolled
          ? "border-b border-[--border-color] bg-[rgba(10,10,10,0.96)] py-4 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <a href="#" className="flex items-center gap-2.5">
        <img src="/letsdoc-white.svg" alt="Lets!DOC" className="h-8 w-auto" />
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-ui text-[13px] font-semibold uppercase tracking-[1.5px] text-[--muted] transition-colors hover:text-[--w]"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#agendar"
          className="rounded-md bg-[--accent] px-6 py-[11px] font-ui text-[13px] font-bold tracking-[0.5px] text-black transition hover:-translate-y-px hover:opacity-90"
        >
          Agendar diagnóstico
        </a>
      </div>

      <button className="text-[--w] md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-xl border border-[--border-m] bg-[--bg] p-4 shadow-2xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-ui text-sm font-semibold text-[--muted]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-md bg-[--accent] px-5 py-3 text-center font-ui text-sm font-bold text-black"
          >
            Agendar diagnóstico
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
