import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MessageCircle, Layers } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Operação low touch", desc: "Você não precisa participar de reuniões semanais ou aprovar cada post. Operamos de forma autônoma, com check-ins mensais.", dir: { x: -30, y: 0 } },
  { icon: MessageCircle, title: "Comunicação direta", desc: "Sem camadas de atendimento. Fale direto com quem faz acontecer, via WhatsApp, quando precisar.", dir: { x: 0, y: 30 } },
  { icon: Layers, title: "Centralização total", desc: "Estratégia, conteúdo, tráfego e análise em um só lugar. Zero fragmentação, zero retrabalho.", dir: { x: 30, y: 0 } },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 relative section-dark section-border-dark overflow-hidden" ref={ref}>
      <div className="absolute top-[20%] right-[-8%] w-[20rem] h-[20rem] blob-blue opacity-25 animate-orbit-slow pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="section-label-dark">Por que a Lets Doc</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight text-lets-white">
            Menos reunião, <span className="text-gradient-blue">mais tração.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>Uma operação feita para simplificar o seu lado sem reduzir a qualidade da entrega.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: reason.dir.x, y: reason.dir.y }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="layer-card-dark p-8"
            >
              <div className="w-12 h-12 rounded-2xl glass-blue-dark flex items-center justify-center mb-5 glow-border">
                <reason.icon size={20} style={{ color: "#36A9E1" }} />
              </div>
              <h3 className="font-display text-lg font-semibold text-lets-white mb-3">{reason.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
