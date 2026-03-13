import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resultados" className="py-28 md:py-36 relative section-light section-border-light overflow-hidden" ref={ref}>
      <div className="absolute top-1/4 right-[-6%] w-[18rem] h-[18rem] blob-blue-light animate-orbit-slow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-light opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="section-label-light">Resultado</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight" style={{ color: "#0A0A0A" }}>
            Seu Instagram é sua <span className="text-gradient-blue">vitrine.</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "rgba(10,10,10,0.5)" }}>
            A primeira impressão do seu paciente começa no feed. Transformamos perfis genéricos em autoridade médica real.
          </p>
        </motion.div>

        {/* Stats — animate from different directions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {[
            { label: "Alcance", value: "+142%", dir: { x: -20, y: 0 } },
            { label: "Engajamento", value: "+87%", dir: { x: 0, y: -20 } },
            { label: "Seguidores", value: "+2.4k", dir: { x: 0, y: 20 } },
            { label: "Conversões", value: "+34%", dir: { x: 20, y: 0 } },
          ].map((stat, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: stat.dir.x, y: stat.dir.y }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="layer-card-light p-6 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-blue">{stat.value}</div>
              <div className="text-[11px] mt-1.5 tracking-[0.15em] uppercase" style={{ color: "rgba(10,10,10,0.35)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Case study card — glass on light */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="layer-card-light p-8 max-w-2xl mx-auto text-center"
          style={{ boxShadow: "0 0 0 1px rgba(54,169,225,0.12), 0 8px 30px rgba(54,169,225,0.08)" }}
        >
          <div className="w-14 h-14 rounded-full glass-blue-light flex items-center justify-center mx-auto mb-4">
            <span className="font-display font-bold text-lg" style={{ color: "#36A9E1" }}>L</span>
          </div>
          <h3 className="font-display text-lg font-semibold mb-1" style={{ color: "#0A0A0A" }}>Dra. Luanne Gerbassi</h3>
          <p className="text-[11px] tracking-[0.15em] uppercase mb-4" style={{ color: "rgba(10,10,10,0.35)" }}>Endocrinologia e Dermatologia</p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.55)" }}>
            Perfil transformado de genérico para autoridade médica reconhecida. Crescimento orgânico consistente com operação low touch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
