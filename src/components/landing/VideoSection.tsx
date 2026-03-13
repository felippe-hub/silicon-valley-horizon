import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VideoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 relative section-dark section-border-dark overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blob-blue opacity-25 pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-5 mb-14"
        >
          <span className="section-label-dark">A Solução</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight text-lets-white">
            É aqui que entra a{" "}
            <span className="text-gradient-blue">Lets Doc</span>
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            Você cuida da medicina. A gente cuida do marketing.
          </p>
        </motion.div>

        {/* Video embed with glassmorphic frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-dark-md rounded-2xl p-3 md:p-4 glow-border">
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ShezVgfQgMI?rel=0&modestbranding=1"
                title="Let's Doc — Estratégia de posicionamento e crescimento para médicos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Two value props below the video — animate from sides */}
        <div className="grid md:grid-cols-2 gap-5 mt-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="layer-card-dark p-7"
          >
            <div className="w-10 h-10 rounded-xl glass-blue-dark flex items-center justify-center mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#36A9E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-lets-white mb-2">Operação low touch</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Sua rotina segue leve enquanto a operação acontece. Sem reuniões semanais, sem aprovações intermináveis.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Estratégia", "Conteúdo", "Site", "Tráfego"].map((tag) => (
                <span key={tag} className="text-[10px] font-semibold tracking-[0.1em] uppercase glass-dark px-3 py-1.5 rounded-full" style={{ color: "rgba(255,255,255,0.4)" }}>{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="layer-card-dark p-7"
          >
            <div className="w-10 h-10 rounded-xl glass-blue-dark flex items-center justify-center mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#36A9E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-lets-white mb-2">Operação unificada</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Estratégia, conteúdo e tráfego andando juntos para fortalecer sua autoridade médica de forma integrada.
            </p>
            <div className="mt-5 glass-dark rounded-xl p-3 flex items-center justify-between inner-shadow-dark">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "#50C878" }} />
                <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>Sistema ativo</span>
              </div>
              <span className="text-xs font-mono font-bold" style={{ color: "#36A9E1" }}>24/7</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
