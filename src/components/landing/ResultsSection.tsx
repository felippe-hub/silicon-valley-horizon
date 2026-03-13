import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resultados" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/3 -left-32 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <span className="section-label">Resultado</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Seu Instagram é sua{" "}
            <span className="text-gradient-primary">vitrine.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A primeira impressão do seu paciente começa no feed. Transformamos perfis
            genéricos em autoridade médica real.
          </p>
        </motion.div>

        {/* Stats bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          {[
            { label: "Alcance", value: "+142%", color: "text-primary" },
            { label: "Engajamento", value: "+87%", color: "text-primary" },
            { label: "Seguidores", value: "+2.4k", color: "text-primary" },
            { label: "Conversões", value: "+34%", color: "text-primary" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="bento-card p-6 text-center"
            >
              <div className={`font-display text-3xl md:text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case study card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bento-card p-8 max-w-2xl mx-auto text-center"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span className="font-display text-primary font-bold text-lg">L</span>
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
            Dra. Luanne Gerbassi
          </h3>
          <p className="text-xs text-muted-foreground tracking-wider uppercase mb-4">
            Endocrinologia e Dermatologia
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Perfil transformado de genérico para autoridade médica reconhecida.
            Crescimento orgânico consistente com operação low touch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
