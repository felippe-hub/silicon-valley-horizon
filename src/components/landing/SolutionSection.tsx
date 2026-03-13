import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Sparkles } from "lucide-react";

const SolutionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <span className="section-label">A Solução</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            É aqui que entra a{" "}
            <span className="text-gradient-primary">Lets Doc</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Você cuida da medicina. A gente cuida do marketing.
          </p>
        </motion.div>

        {/* Two column bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-4 mt-16 max-w-4xl mx-auto"
        >
          <div className="bento-card p-8 flex flex-col justify-between min-h-[240px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Operação low touch
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sua rotina segue leve enquanto a operação acontece. Sem reuniões semanais,
                sem aprovações intermináveis.
              </p>
            </div>
            <div className="mt-6 flex gap-2">
              {["Estratégia", "Conteúdo", "Site", "Tráfego"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium tracking-wider uppercase bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bento-card p-8 flex flex-col justify-between min-h-[240px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Operação unificada
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Estratégia, conteúdo e tráfego andando juntos para fortalecer
                sua autoridade médica de forma integrada.
              </p>
            </div>
            <div className="mt-6 glass rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs text-muted-foreground font-mono">Sistema ativo</span>
              </div>
              <span className="text-xs text-primary font-mono">24/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
