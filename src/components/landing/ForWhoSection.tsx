import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="para-quem" className="bg-lets-white px-6 py-28 md:px-14">
      <div className="mx-auto max-w-[1100px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-lets-blue">Para quem</motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="mb-6 max-w-[600px] font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-lets-black">
          Somos seletivos, e você também deveria ser.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="max-w-[540px] text-[17px] leading-[1.75] text-lets-black/55">
          A parceria funciona melhor quando existe alinhamento de ritmo, investimento e expectativa.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="rounded-2xl border border-lets-blue/20 bg-lets-blue/5 p-10"
          >
            <div className="mb-7 font-ui text-[11px] font-bold uppercase tracking-[4px] text-lets-blue">É para você se...</div>
            <ul className="flex flex-col gap-4">
              {forYou.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-[14px] text-[15px] leading-[1.5] text-lets-black/75"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-lets-blue/30 bg-lets-blue/10">
                    <div className="h-1.5 w-1.5 rounded-full bg-lets-blue" />
                  </div>
                  {t}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="rounded-2xl border border-lets-black/8 bg-lets-black/[0.03] p-10"
          >
            <div className="mb-7 font-ui text-[11px] font-bold uppercase tracking-[4px] text-lets-black/40">Não é para você se...</div>
            <ul className="flex flex-col gap-4">
              {notForYou.map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: 15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-[14px] text-[15px] leading-[1.5] text-lets-black/50"
                >
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full border border-lets-black/15" />
                  {t}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;