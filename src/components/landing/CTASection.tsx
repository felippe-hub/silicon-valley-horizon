import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="agendar" className="relative overflow-hidden bg-lets-black px-6 py-28 text-center md:px-14">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(54,169,225,0.08)_0%,transparent_60%)] pulse-glow" />
      <div className="pointer-events-none absolute left-[20%] top-[20%] h-[200px] w-[200px] rounded-full bg-lets-blue/[0.06] blur-[80px] orbit-slow" />
      <div className="pointer-events-none absolute right-[20%] bottom-[20%] h-[200px] w-[200px] rounded-full bg-white/[0.03] blur-[80px] orbit-reverse" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="relative mx-auto max-w-[600px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-lets-blue">Comece agora</motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-6 font-display text-[clamp(44px,7vw,88px)] uppercase leading-[0.95] tracking-[2px] text-lets-white"
        >
          Seu marketing não precisa ser mais uma preocupação.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-12 max-w-[540px] text-[17px] leading-[1.75] text-white/55"
        >
          Agende um diagnóstico gratuito e descubra como a Lets!DOC pode transformar sua presença digital sem adicionar complexidade à sua rotina.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-[14px]"
        >
          <motion.a
            href="https://wa.me/5500000000000"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="cta-glow rounded-lg bg-lets-blue px-[38px] py-4 font-ui text-sm font-bold tracking-[0.5px] text-lets-black transition"
          >
            Agendar diagnóstico
          </motion.a>
          <motion.a
            href="https://wa.me/5500000000000"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.97 }}
            className="glass rounded-lg px-[38px] py-4 font-ui text-sm font-semibold text-lets-white transition"
          >
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;