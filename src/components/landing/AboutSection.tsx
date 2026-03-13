import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="sobre" className="relative bg-[--bg] px-6 py-28 md:px-14">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute left-[20%] top-[30%] h-[250px] w-[250px] rounded-full bg-[--accent]/[0.05] blur-[100px] orbit-slow" />
      <div className="pointer-events-none absolute right-[15%] bottom-[20%] h-[200px] w-[200px] rounded-full bg-white/[0.03] blur-[80px] orbit-reverse" />

      <div className="mx-auto max-w-[720px] text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">Sobre</motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-6 font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]"
        >
          Uma agência criada de dentro do mercado médico.
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto mb-8 h-[2px] w-12 bg-[--accent]"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-6 max-w-[540px] text-[17px] leading-[1.75] text-white/55"
        >
          A Lets!DOC nasceu de dentro do mercado médico. Não somos uma agência genérica que resolveu atender médicos — somos especialistas que entendem a rotina, as restrições éticas e as oportunidades únicas da comunicação em saúde.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-[540px] text-[17px] leading-[1.75] text-white/55"
        >
          Combinamos estratégia de marketing digital com profundo conhecimento do setor médico para entregar resultados consistentes, sem complicar a vida de quem já tem uma rotina intensa demais.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
