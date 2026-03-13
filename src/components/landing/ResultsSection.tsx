import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { v: "+142%", l: "Alcance" },
  { v: "+87%", l: "Engajamento" },
  { v: "+2.4k", l: "Seguidores" },
  { v: "+34%", l: "Conversões" },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="resultado" className="relative bg-[--bg2] px-6 py-28 text-center md:px-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[--accent]/[0.04] blur-[120px]" />

      <div className="mx-auto mb-[60px] max-w-[620px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">Resultado</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="mb-6 font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]">
          Seu Instagram é sua vitrine.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="mx-auto max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          A primeira impressão do seu paciente começa no feed. Transformamos perfis genéricos em autoridade médica real.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-[700px] grid-cols-1 gap-6 md:grid-cols-2">
        {[
          { src: "/cases/dra-luanne-antes.png", alt: "Antes", badge: "Antes", isAfter: false },
          { src: "/cases/dra-luanne-depois.png", alt: "Depois", badge: "Depois", isAfter: true },
        ].map((item, i) => (
          <motion.div
            key={item.badge}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl border border-[--border-color] transition-all duration-300 hover:border-[--border-accent]"
          >
            <div className="overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="block min-h-[300px] w-full bg-[--bg3] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[20px] border bg-black/85 px-[18px] py-[7px] font-ui text-[11px] font-bold uppercase tracking-[2.5px] backdrop-blur-[10px] ${
              item.isAfter ? "border-[--border-accent] text-[--accent] shadow-[0_0_15px_rgba(54,169,225,0.2)]" : "border-[--border-color]"
            }`}>
              {item.badge}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-5 font-ui text-xs tracking-[1.5px] text-[--muted]"
      >
        Dra. Luanne Gerbassi · Endocrinologia e Dermatologia
      </motion.p>

      <div className="mx-auto mt-[60px] grid max-w-[800px] grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 + i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-[52px] tracking-[2px] text-[--accent]">{s.v}</div>
            <div className="font-ui text-[10px] font-bold uppercase tracking-[3px] text-[--muted]">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
