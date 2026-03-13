import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  { num: "01", title: "Briefing", desc: "Entendemos sua especialidade, público e objetivos.", detail: "Especialidade • Público-alvo • Objetivos • Posicionamento" },
  { num: "02", title: "Planejamento", desc: "Definimos estratégia, canais e calendário editorial.", detail: "Instagram • TikTok • LinkedIn • Calendário editorial" },
  { num: "03", title: "Produção", desc: "Criamos conteúdo autoral, visual e textual.", detail: "Carousels • Reels • Stories • Copies" },
  { num: "04", title: "Captação", desc: "Gravamos e fotografamos material profissional.", detail: "Vídeo 4K • Fotografia • Direção criativa" },
  { num: "05", title: "Edição", desc: "Finalizamos peças com qualidade premium.", detail: "Color grading • Motion • Design • Finalização" },
  { num: "06", title: "Publicação", desc: "Gerenciamos e publicamos em todos os canais.", detail: "Agendamento • Cross-posting • Hashtags • SEO" },
  { num: "07", title: "Acompanhamento", desc: "Analisamos métricas e otimizamos resultados.", detail: "Analytics • Relatórios • Otimização • Growth" },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="processo" className="py-28 md:py-36 relative section-border" style={{ background: "#0A0A0A" }} ref={ref}>
      <div className="absolute top-0 left-[-5%] w-[18rem] h-[18rem] blob-blue opacity-30 animate-orbit-slow pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14"
        >
          <span className="section-label">Processo</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight text-lets-white">
            Um fluxo pensado para{" "}
            <span className="text-gradient-blue">não travar sua rotina.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>
            Cada etapa foi desenhada para manter ritmo, consistência e autonomia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 max-w-5xl mx-auto">
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
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  activeStep === i ? "glass-md glow-border" : "hover:bg-[rgba(255,255,255,0.03)]"
                }`}
              >
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: activeStep === i ? "#36A9E1" : "rgba(255,255,255,0.3)" }}
                >
                  {step.num}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: activeStep === i ? "#F3F3F3" : "rgba(255,255,255,0.4)" }}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Active step detail — layered glass */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="layer-card p-8 lg:p-10 min-h-[320px] flex flex-col justify-center"
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-5xl font-bold" style={{ color: "rgba(54,169,225,0.15)" }}>
                  {steps[activeStep].num}
                </span>
                <div>
                  <span className="section-label">Etapa {steps[activeStep].num}</span>
                  <h3 className="font-display text-2xl font-bold text-lets-white">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {steps[activeStep].desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {steps[activeStep].detail.split(" • ").map((tag) => (
                  <span
                    key={tag}
                    className="text-xs glass px-3 py-1.5 rounded-lg font-medium"
                    style={{ color: "rgba(255,255,255,0.45)" }}
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
