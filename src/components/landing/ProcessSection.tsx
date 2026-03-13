import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Briefing",
    desc: "Entendemos sua especialidade, público e objetivos.",
    detail: "Especialidade • Público-alvo • Objetivos • Posicionamento",
  },
  {
    num: "02",
    title: "Planejamento",
    desc: "Definimos estratégia, canais e calendário editorial.",
    detail: "Instagram • TikTok • LinkedIn • Calendário editorial",
  },
  {
    num: "03",
    title: "Produção",
    desc: "Criamos conteúdo autoral, visual e textual.",
    detail: "Carousels • Reels • Stories • Copies",
  },
  {
    num: "04",
    title: "Captação",
    desc: "Gravamos e fotografamos material profissional.",
    detail: "Vídeo 4K • Fotografia • Direção criativa",
  },
  {
    num: "05",
    title: "Edição",
    desc: "Finalizamos peças com qualidade premium.",
    detail: "Color grading • Motion • Design • Finalização",
  },
  {
    num: "06",
    title: "Publicação",
    desc: "Gerenciamos e publicamos em todos os canais.",
    detail: "Agendamento • Cross-posting • Hashtags • SEO",
  },
  {
    num: "07",
    title: "Acompanhamento",
    desc: "Analisamos métricas e otimizamos resultados.",
    detail: "Analytics • Relatórios • Otimização • Growth",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="processo" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <span className="section-label">Processo</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Um fluxo pensado para{" "}
            <span className="text-gradient-primary">não travar sua rotina.</span>
          </h2>
          <p className="text-muted-foreground">
            Cada etapa foi desenhada para manter ritmo, consistência e autonomia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 max-w-5xl mx-auto">
          {/* Step list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-1"
          >
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                  activeStep === i
                    ? "bg-secondary glow-border"
                    : "hover:bg-secondary/50"
                }`}
              >
                <span
                  className={`text-xs font-mono font-bold ${
                    activeStep === i ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.num}
                </span>
                <span
                  className={`text-sm font-medium ${
                    activeStep === i ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Active step detail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bento-card p-8 lg:p-10 min-h-[300px] flex flex-col justify-center"
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-5xl font-bold text-primary/20">
                  {steps[activeStep].num}
                </span>
                <div>
                  <span className="section-label">Etapa {steps[activeStep].num}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {steps[activeStep].desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {steps[activeStep].detail.split(" • ").map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary px-3 py-1.5 rounded-lg text-muted-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
