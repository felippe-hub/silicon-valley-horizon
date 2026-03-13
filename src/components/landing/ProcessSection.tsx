import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import medicalTech from "@/assets/medical-tech.jpg";

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
    <section id="processo" className="py-28 md:py-36 relative section-light section-border-light overflow-hidden" ref={ref}>
      <div className="absolute top-[-5%] left-[-5%] w-[18rem] h-[18rem] blob-blue-light animate-orbit-slow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-light opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14"
        >
          <span className="section-label-light">Processo</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight" style={{ color: "#0A0A0A" }}>
            Um fluxo pensado para{" "}
            <span className="text-gradient-blue">não travar sua rotina.</span>
          </h2>
          <p style={{ color: "rgba(10,10,10,0.5)" }}>
            Cada etapa foi desenhada para manter ritmo, consistência e autonomia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 max-w-5xl mx-auto">
          {/* Step list — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-1"
          >
            {steps.map((step, i) => (
              <button key={i} onClick={() => setActiveStep(i)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  activeStep === i ? "glass-light-md" : "hover:bg-[rgba(10,10,10,0.03)]"
                }`}
                style={activeStep === i ? { boxShadow: "0 0 0 1px rgba(54,169,225,0.2), 0 4px 15px rgba(54,169,225,0.1)" } : {}}
              >
                <span className="text-xs font-mono font-bold" style={{ color: activeStep === i ? "#36A9E1" : "rgba(10,10,10,0.3)" }}>{step.num}</span>
                <span className="text-sm font-medium" style={{ color: activeStep === i ? "#0A0A0A" : "rgba(10,10,10,0.45)" }}>{step.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Active step — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="layer-card-light p-8 lg:p-10 min-h-[340px] flex flex-col justify-center relative overflow-hidden"
          >
            {/* Decorative medical image faded in background */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.08] pointer-events-none">
              <img src={medicalTech} alt="" className="w-full h-full object-cover rounded-bl-3xl" />
            </div>

            <motion.div key={activeStep} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-5xl font-bold" style={{ color: "rgba(54,169,225,0.15)" }}>{steps[activeStep].num}</span>
                <div>
                  <span className="section-label-light">Etapa {steps[activeStep].num}</span>
                  <h3 className="font-display text-2xl font-bold" style={{ color: "#0A0A0A" }}>{steps[activeStep].title}</h3>
                </div>
              </div>
              <p className="mb-6 leading-relaxed" style={{ color: "rgba(10,10,10,0.55)" }}>{steps[activeStep].desc}</p>
              <div className="flex flex-wrap gap-2">
                {steps[activeStep].detail.split(" • ").map((tag) => (
                  <span key={tag} className="text-xs glass-blue-light px-3 py-1.5 rounded-lg font-medium" style={{ color: "rgba(10,10,10,0.55)" }}>{tag}</span>
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
