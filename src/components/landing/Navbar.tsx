import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Processo", href: "#processo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-400 ${
        scrolled ? "border-foreground/10 bg-background/85 backdrop-blur-xl py-3" : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[98rem] items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-foreground">LETS<span className="text-primary">!</span>DOC</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-foreground/70 transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
          <a href="#agendar" className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:opacity-90">
            Agendar diagnóstico
          </a>
        </div>

        <button className="text-foreground md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-2 overflow-hidden rounded-xl border border-foreground/12 bg-background/95 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-3 p-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm font-semibold text-foreground/80">
                  {item.label}
                </a>
              ))}
              <a
                href="#agendar"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-bold text-primary-foreground"
              >
                Agendar diagnóstico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
