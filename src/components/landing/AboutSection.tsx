import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import medicalWorkspace from "@/assets/medical-workspace.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-28 md:py-36 relative section-dark section-border-dark overflow-hidden" ref={ref}>
      <div className="absolute bottom-[20%] left-[-5%] w-[16rem] h-[16rem] blob-blue opacity-20 animate-orbit-slow pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="section-label-dark">Sobre</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight text-lets-white">
            Uma agência criada <span className="text-gradient-blue">de dentro do mercado médico.</span>
          </h2>
        </motion.div>

        {/* Layered composition: image + glassmorphic text overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Background image */}
          <div className="image-frame-dark w-full h-[300px] md:h-[360px]">
            <img src={medicalWorkspace} alt="Ambiente médico moderno" className="w-full h-full object-cover" />
          </div>

          {/* Glassmorphic card overlapping the image — layered depth effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-dark-strong rounded-2xl p-8 md:p-10 glow-border inner-shadow-dark relative md:absolute md:bottom-[-40px] md:left-8 md:right-8 lg:left-12 lg:right-[40%] mt-[-40px] md:mt-0"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl glass-blue-dark flex items-center justify-center">
                <span className="font-display font-bold" style={{ color: "#36A9E1" }}>LD</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-lets-white">Lets Doc</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Marketing Médico Especializado</div>
              </div>
            </div>
            <div className="space-y-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              <p>A Lets Doc nasceu de dentro do mercado médico. Não somos uma agência genérica que resolveu atender médicos — somos especialistas que entendem a rotina, as restrições éticas e as oportunidades únicas da comunicação em saúde.</p>
              <p>Combinamos estratégia de marketing digital com profundo conhecimento do setor médico para entregar resultados consistentes.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
