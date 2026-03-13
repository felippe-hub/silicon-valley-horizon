import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agendar" className="py-28 md:py-36 relative section-border" style={{ background: "#0A0A0A" }} ref={ref}>
      {/* CTA glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blob-blue opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <span className="section-label">Comece agora</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight text-lets-white">
            Seu marketing não precisa ser mais uma{" "}
            <span className="text-gradient-blue">preocupação.</span>
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Agende um diagnóstico gratuito e descubra como a Lets Doc pode transformar
            sua presença digital sem adicionar complexidade à sua rotina.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all group text-lg glow-border hover:opacity-90"
              style={{ background: "#36A9E1", color: "#0A0A0A" }}
            >
              Agendar diagnóstico gratuito
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
