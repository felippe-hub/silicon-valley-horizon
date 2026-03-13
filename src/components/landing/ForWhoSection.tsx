import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const forYou = [
  "Sua agenda está cheia e você não tem tempo para marketing",
  "Quer uma equipe que opere sem depender de você",
  "Prioriza qualidade e consistência na comunicação",
  "Busca resultados mensuráveis e previsíveis",
  "Valoriza um parceiro que entende o mercado médico",
];

const notForYou = [
  "Quer aprender a fazer marketing sozinho",
  "Prefere controlar cada detalhe da comunicação",
  "Busca o menor preço do mercado",
  "Precisa de resultados em menos de 30 dias",
  "Não está disposto a investir em presença digital",
];

const ForWhoSection = () => {
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
          <span className="section-label">Para quem</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Somos seletivos, e você também{" "}
            <span className="text-gradient-primary">deveria ser.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-card p-8"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">
              É para você se...
            </h3>
            <div className="space-y-4">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bento-card p-8"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">
              Não é para você se...
            </h3>
            <div className="space-y-4">
              {notForYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={12} className="text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
