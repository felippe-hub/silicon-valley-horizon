import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MessageCircle, Layers } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Operação low touch",
    desc: "Você não precisa participar de reuniões semanais ou aprovar cada post. Operamos de forma autônoma, com check-ins mensais.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação direta",
    desc: "Sem camadas de atendimento. Fale direto com quem faz acontecer, via WhatsApp, quando precisar.",
  },
  {
    icon: Layers,
    title: "Centralização total",
    desc: "Estratégia, conteúdo, tráfego e análise em um só lugar. Zero fragmentação, zero retrabalho.",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <span className="section-label">Por que a Lets Doc</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Menos reunião,{" "}
            <span className="text-gradient-primary">mais tração.</span>
          </h2>
          <p className="text-muted-foreground">
            Uma operação feita para simplificar o seu lado sem reduzir a qualidade da entrega.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bento-card p-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <reason.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
