import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 relative section-light section-border-light overflow-hidden" ref={ref}>
      {/* Subtle blob on light bg */}
      <div className="absolute top-1/3 right-[-8%] w-[20rem] h-[20rem] blob-blue-light animate-orbit-reverse pointer-events-none" />
      <div className="absolute inset-0 bg-grid-light opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-5"
        >
          <span className="section-label-light">O Problema</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight" style={{ color: "#0A0A0A" }}>
            Sua rotina já é cheia demais para o marketing virar{" "}
            <span className="text-gradient-blue">mais uma função.</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(10,10,10,0.55)" }}>
            Consultas, cirurgias, plantões, estudos. Seu dia já tem responsabilidades demais.
            Marketing não deveria ser mais uma.
          </p>
        </motion.div>

        {/* Cards animate from different directions */}
        <div className="grid md:grid-cols-3 gap-5 mt-14 max-w-4xl mx-auto">
          {[
            { emoji: "⏰", title: "Sem tempo", desc: "Sua agenda é uma corrida contra o relógio. Cada minuto fora do consultório é um custo.", dir: "left" },
            { emoji: "🤯", title: "Sem equipe", desc: "Gerenciar designer, copywriter e gestor de tráfego é quase uma segunda empresa.", dir: "up" },
            { emoji: "📉", title: "Sem resultados", desc: "Posts aleatórios sem estratégia. Investimento em tráfego sem retorno mensurável.", dir: "right" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: item.dir === "left" ? -40 : item.dir === "right" ? 40 : 0,
                y: item.dir === "up" ? 40 : 0,
              }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="layer-card-light p-7 group"
            >
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="font-display font-semibold mb-2" style={{ color: "#0A0A0A" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.5)" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
