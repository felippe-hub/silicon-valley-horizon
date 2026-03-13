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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark-strong py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[98rem] items-center justify-between px-4 md:px-8">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-lets-white">
          LETS<span className="text-lets-blue">!</span>DOC
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F3F3F3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#agendar"
            className="text-sm font-medium px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90"
            style={{ background: "#36A9E1", color: "#0A0A0A" }}
          >
            Agendar diagnóstico
          </a>
        </div>

        <button className="md:hidden text-lets-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark-strong mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  className="text-sm py-2" style={{ color: "rgba(255,255,255,0.5)" }}>{item.label}</a>
              ))}
              <a href="#agendar" onClick={() => setMobileOpen(false)}
                className="text-sm font-medium px-5 py-2.5 rounded-lg text-center mt-2"
                style={{ background: "#36A9E1", color: "#0A0A0A" }}>Agendar diagnóstico</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
