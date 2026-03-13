import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resultados" className="py-28 md:py-36 relative section-border" style={{ background: "#0A0A0A" }} ref={ref}>
      <div className="absolute top-1/4 left-[-8%] w-[18rem] h-[18rem] blob-blue opacity-35 animate-orbit-slow pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14"
        >
          <span className="section-label">Resultado</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight text-lets-white">
            Seu Instagram é sua{" "}
            <span className="text-gradient-blue">vitrine.</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            A primeira impressão do seu paciente começa no feed. Transformamos perfis
            genéricos em autoridade médica real.
          </p>
        </motion.div>

        {/* Stats bento — glass cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {[
            { label: "Alcance", value: "+142%" },
            { label: "Engajamento", value: "+87%" },
            { label: "Seguidores", value: "+2.4k" },
            { label: "Conversões", value: "+34%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="layer-card p-6 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-blue">
                {stat.value}
              </div>
              <div className="text-[11px] mt-1.5 tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case study — layered glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="layer-card p-8 max-w-2xl mx-auto text-center glow-border"
        >
          <div className="w-14 h-14 rounded-full glass-blue flex items-center justify-center mx-auto mb-4">
            <span className="font-display font-bold text-lg" style={{ color: "#36A9E1" }}>L</span>
          </div>
          <h3 className="font-display text-lg font-semibold text-lets-white mb-1">
            Dra. Luanne Gerbassi
          </h3>
          <p className="text-[11px] tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
            Endocrinologia e Dermatologia
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Perfil transformado de genérico para autoridade médica reconhecida.
            Crescimento orgânico consistente com operação low touch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
