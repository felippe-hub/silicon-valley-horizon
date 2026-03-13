import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <span className="section-label">Sobre</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Uma agência criada{" "}
            <span className="text-gradient-primary">de dentro do mercado médico.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bento-card p-10 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="font-display text-primary font-bold">LD</span>
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">Lets Doc</div>
              <div className="text-xs text-muted-foreground">Marketing Médico Especializado</div>
            </div>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
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
