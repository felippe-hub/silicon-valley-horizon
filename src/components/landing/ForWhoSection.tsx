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
    <section className="py-28 md:py-36 relative section-light section-border-light overflow-hidden" ref={ref}>
      <div className="absolute bottom-[10%] left-[-5%] w-[16rem] h-[16rem] blob-blue-light animate-orbit-reverse pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="section-label-light">Para quem</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight" style={{ color: "#0A0A0A" }}>
            Somos seletivos, e você também <span className="text-gradient-blue">deveria ser.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Enters from left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="layer-card-light p-8">
            <h3 className="font-display text-lg font-semibold mb-6" style={{ color: "#0A0A0A" }}>É para você se...</h3>
            <div className="space-y-4">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full glass-blue-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} style={{ color: "#36A9E1" }} />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(10,10,10,0.55)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enters from right */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
            className="layer-card-light p-8">
            <h3 className="font-display text-lg font-semibold mb-6" style={{ color: "#0A0A0A" }}>Não é para você se...</h3>
            <div className="space-y-4">
              {notForYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(220,50,50,0.06)", border: "1px solid rgba(220,50,50,0.12)" }}>
                    <X size={11} style={{ color: "rgba(220,50,50,0.6)" }} />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(10,10,10,0.55)" }}>{item}</span>
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
