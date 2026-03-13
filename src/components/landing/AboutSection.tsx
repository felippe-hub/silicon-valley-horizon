import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-28 md:py-36 relative section-border" style={{ background: "#0A0A0A" }} ref={ref}>
      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14"
        >
          <span className="section-label">Sobre</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight text-lets-white">
            Uma agência criada{" "}
            <span className="text-gradient-blue">de dentro do mercado médico.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="layer-card p-10 max-w-3xl mx-auto glow-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl glass-blue flex items-center justify-center">
              <span className="font-display font-bold" style={{ color: "#36A9E1" }}>LD</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-lets-white">Lets Doc</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Marketing Médico Especializado</div>
            </div>
          </div>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            <p>
              A Lets Doc nasceu de dentro do mercado médico. Não somos uma agência genérica que
              resolveu atender médicos — somos especialistas que entendem a rotina, as restrições
              éticas e as oportunidades únicas da comunicação em saúde.
            </p>
            <p>
              Combinamos estratégia de marketing digital com profundo conhecimento do setor médico
              para entregar resultados consistentes, sem complicar a vida de quem já tem uma
              rotina intensa demais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
