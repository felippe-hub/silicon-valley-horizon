import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Sparkles } from "lucide-react";

const SolutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 relative section-border" style={{ background: "#0A0A0A" }} ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blob-blue opacity-25 pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-5"
        >
          <span className="section-label">A Solução</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight text-lets-white">
            É aqui que entra a{" "}
            <span className="text-gradient-blue">Lets Doc</span>
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            Você cuida da medicina. A gente cuida do marketing.
          </p>
        </motion.div>

        {/* Two stacked/layered glass cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-14 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="layer-card p-8 flex flex-col justify-between min-h-[260px]"
          >
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 glass-blue">
                <Shield size={18} style={{ color: "#36A9E1" }} />
              </div>
              <h3 className="font-display text-xl font-semibold text-lets-white mb-2">
                Operação low touch
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Sua rotina segue leve enquanto a operação acontece. Sem reuniões semanais,
                sem aprovações intermináveis.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Estratégia", "Conteúdo", "Site", "Tráfego"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-[0.1em] uppercase glass px-3 py-1.5 rounded-full"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="layer-card p-8 flex flex-col justify-between min-h-[260px]"
          >
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 glass-blue">
                <Sparkles size={18} style={{ color: "#36A9E1" }} />
              </div>
              <h3 className="font-display text-xl font-semibold text-lets-white mb-2">
                Operação unificada
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Estratégia, conteúdo e tráfego andando juntos para fortalecer
                sua autoridade médica de forma integrada.
              </p>
            </div>
            <div className="mt-6 glass rounded-xl p-3 flex items-center justify-between inner-shadow-depth">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "#50C878" }} />
                <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>Sistema ativo</span>
              </div>
              <span className="text-xs font-mono font-bold" style={{ color: "#36A9E1" }}>24/7</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
