import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { n: "01", t: "Briefing", d: "Entendemos sua especialidade, público e objetivos para montar uma estratégia sob medida." },
  { n: "02", t: "Planejamento", d: "Definimos estratégia, canais e calendário editorial alinhado com a sua rotina." },
  { n: "03", t: "Produção", d: "Criamos conteúdo autoral, visual e textual com identidade própria da sua marca médica." },
  { n: "04", t: "Captação", d: "Gravamos e fotografamos material profissional com qualidade de alto nível." },
  { n: "05", t: "Edição", d: "Finalizamos peças com qualidade premium — cor, luz e ritmo de edição profissional." },
  { n: "06", t: "Publicação", d: "Gerenciamos e publicamos em todos os canais: Instagram, TikTok e LinkedIn." },
  { n: "07", t: "Acompanhamento", d: "Analisamos métricas e otimizamos continuamente para maximizar seus resultados." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="processo" className="relative rounded-t-3xl bg-[--bg2] px-6 py-28 md:px-14" style={{ zIndex: 3 }}>
      {/* Ambient blob */}
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[--accent]/[0.04] blur-[120px]" />

      <div className="mx-auto mb-[72px] max-w-[1100px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]"
        >
          Processo
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]"
        >
          Um fluxo pensado para não travar sua rotina.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto max-w-[540px] text-[17px] leading-[1.75] text-white/55"
        >
          Cada etapa foi desenhada para manter ritmo, consistência e autonomia.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, borderColor: "rgba(54,169,225,0.3)" }}
            className="glass glow-hover group rounded-2xl p-9"
          >
            <div className="mb-5 font-display text-[64px] leading-none tracking-[2px] text-white/[0.07] transition-colors group-hover:text-[--accent]/20">{s.n}</div>
            <div className="mb-[10px] font-ui text-lg font-bold text-[--w]">{s.t}</div>
            <div className="text-sm leading-[1.65] text-[--muted]">{s.d}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
