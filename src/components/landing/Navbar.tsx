import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-[200] flex items-center justify-between px-6 transition-all duration-500 md:px-14 ${
        scrolled
          ? "glass-md py-3.5"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <a href="#" className="flex items-center gap-2.5">
        <motion.img
          src="/letsdoc-white.svg"
          alt="Lets!DOC"
          className="h-8 w-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        />
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {navItems.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="relative font-ui text-[13px] font-semibold uppercase tracking-[1.5px] text-white/40 transition-colors hover:text-lets-white"
          >
            {item.label}
          </motion.a>
        ))}
        <motion.a
          href="#agendar"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-md bg-lets-blue px-6 py-[11px] font-ui text-[13px] font-bold tracking-[0.5px] text-lets-black shadow-[0_0_20px_rgba(54,169,225,0.3)] transition"
        >
          Agendar diagnóstico
        </motion.a>
      </div>

      <button className="text-lets-white md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-strong absolute left-4 right-4 top-full mt-2 rounded-xl p-4 shadow-2xl md:hidden"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 font-ui text-sm font-semibold text-white/50">
                {item.label}
              </a>
            ))}
            <a href="#agendar" onClick={() => setMobileOpen(false)} className="mt-2 block rounded-md bg-lets-blue px-5 py-3 text-center font-ui text-sm font-bold text-lets-black">
              Agendar diagnóstico
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;