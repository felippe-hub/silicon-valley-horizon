import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const pills = ["Estratégia", "Conteúdo", "Site", "Tráfego"];

const SolutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activePill, setActivePill] = useState(0);

  return (
    <div className="scroll-layer-wrap relative" style={{ minHeight: "100vh" }}>
      <section
        ref={ref}
        id="solucao"
        className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden rounded-t-3xl bg-lets-black"
        style={{ zIndex: 2, background: "#111111" }}
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(54,169,225,0.06)_0%,transparent_70%)]" />

        <div className="mx-auto w-full max-w-[900px] px-6 py-24 text-center md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-lets-blue"
          >
            A Solução
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-3 text-xl text-white/50"
          >
            E aqui que entra a
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5"
          >
            <img src="/letsdoc-white.svg" alt="Lets!DOC" className="mx-auto h-20 w-auto drop-shadow-[0_0_30px_rgba(54,169,225,0.3)]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mx-auto mb-0 max-w-[540px] text-[17px] leading-[1.75] text-white/55"
          >
            Você cuida da medicina.<br />A gente cuida do marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="my-8 flex flex-wrap justify-center gap-[10px] md:my-12"
          >
            {pills.map((p, i) => (
              <motion.button
                key={p}
                onClick={() => setActivePill(i)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-[20px] border px-[26px] py-[10px] font-ui text-[13px] font-bold transition-all duration-300 ${
                  activePill === i
                    ? "border-lets-blue/30 bg-lets-blue/10 text-lets-blue shadow-[0_0_15px_rgba(54,169,225,0.15)]"
                    : "border-white/[0.08] text-white/50 hover:border-white/[0.15]"
                }`}
              >
                {p}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="glass glow-border mx-auto grid max-w-[640px] grid-cols-1 overflow-hidden rounded-[20px] md:grid-cols-2"
          >
            <div className="border-b border-white/[0.08] p-12 text-center md:border-b-0 md:border-r">
              <div className="mb-2 font-display text-[44px] tracking-[2px] text-lets-white">VOCÊ</div>
              <div className="text-xs tracking-[1px] text-white/50">Consultas · Cirurgias · Pacientes</div>
            </div>
            <div className="p-12 text-center">
              <div className="mb-2 font-display text-[44px] tracking-[2px] text-lets-blue">
                LETS<span className="text-lets-white">!</span>DOC
              </div>
              <div className="text-xs tracking-[1px] text-white/50">Estratégia · Conteúdo · Tráfego</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionSection;