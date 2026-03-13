import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <span className="section-label">O Problema</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Sua rotina já é cheia demais para o marketing virar{" "}
            <span className="text-gradient-primary">mais uma função.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Consultas, cirurgias, plantões, estudos. Seu dia já tem responsabilidades demais.
            Marketing não deveria ser mais uma.
          </p>
        </motion.div>

        {/* Bento grid of pain points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mt-16 max-w-4xl mx-auto"
        >
          {[
            {
              emoji: "⏰",
              title: "Sem tempo",
              desc: "Sua agenda é uma corrida contra o relógio. Cada minuto fora do consultório é um custo.",
            },
            {
              emoji: "🤯",
              title: "Sem equipe",
              desc: "Gerenciar designer, copywriter e gestor de tráfego é quase uma segunda empresa.",
            },
            {
              emoji: "📉",
              title: "Sem resultados",
              desc: "Posts aleatórios sem estratégia. Investimento em tráfego sem retorno mensurável.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bento-card group"
            >
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
