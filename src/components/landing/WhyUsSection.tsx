import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  { n: "01", t: "Operação low touch", d: "Você não precisa participar de reuniões semanais ou aprovar cada post. Operamos de forma autônoma, com check-ins mensais." },
  { n: "02", t: "Comunicação direta", d: "Sem camadas de atendimento. Fale direto com quem faz acontecer, via WhatsApp, quando precisar." },
  { n: "03", t: "Centralização total", d: "Estratégia, conteúdo, tráfego e análise em um só lugar. Zero fragmentação, zero retrabalho." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="porque" className="relative bg-lets-black px-6 py-28 md:px-14">
      <div className="pointer-events-none absolute left-[5%] bottom-[10%] h-[250px] w-[250px] rounded-full bg-lets-blue/[0.04] blur-[100px]" />

      <div className="mx-auto max-w-[1100px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-lets-blue">Por que a Lets!DOC</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="mb-6 max-w-[600px] font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-lets-white">
          Menos reunião, mais tração.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          Uma operação feita para simplificar o seu lado sem reduzir a qualidade da entrega.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 30, x: i === 0 ? -20 : i === 2 ? 20 : 0 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, borderColor: "rgba(54,169,225,0.3)" }}
              className="glass glow-hover group rounded-2xl p-10"
            >
              <div className="mb-4 font-display text-[52px] tracking-[2px] text-lets-blue transition-all group-hover:drop-shadow-[0_0_10px_rgba(54,169,225,0.3)]">{c.n}</div>
              <div className="mb-3 font-ui text-[17px] font-bold text-lets-white">{c.t}</div>
              <div className="text-sm leading-[1.65] text-white/50">{c.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;