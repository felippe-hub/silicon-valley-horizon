import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MonitorSmartphone, TrendingUp, Globe, Video, Layers } from "lucide-react";

const services = [
  { Icon: MonitorSmartphone, t: "Social Media", d: "Gestão completa de Instagram, TikTok e LinkedIn. Conteúdo estratégico, calendário editorial e engajamento orgânico." },
  { Icon: TrendingUp, t: "Tráfego Pago", d: "Google Ads e Meta Ads otimizados para o mercado médico. Captação de pacientes com investimento inteligente." },
  { Icon: Globe, t: "Sites e Landing Pages", d: "Sites médicos profissionais, otimizados para SEO e conversão. Landing pages para campanhas específicas." },
  { Icon: Video, t: "Produção Audiovisual", d: "Vídeos institucionais, reels e conteúdo para redes. Captação, edição e finalização com qualidade profissional." },
  { Icon: Layers, t: "Identidade Visual", d: "Criação e gestão da identidade da sua marca médica. Logotipo, paleta, tipografia e materiais gráficos." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="servicos" className="relative bg-lets-black px-6 py-28 md:px-14">
      <div className="pointer-events-none absolute right-[5%] top-[20%] h-[250px] w-[250px] rounded-full bg-lets-blue/[0.04] blur-[100px]" />

      <div className="mx-auto mb-14 max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-lets-blue"
        >
          Serviços
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-6 max-w-[600px] font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-lets-white"
        >
          Tudo o que precisa acontecer, sem operação picada.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-[540px] text-[17px] leading-[1.75] text-white/55"
        >
          Serviços desenhados para funcionar como sistema, não como entregas isoladas.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 overflow-hidden rounded-[20px] border border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ Icon, t, d }, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="group border-b border-r border-white/[0.08] bg-white/[0.015] p-10 transition-all duration-300 hover:bg-lets-blue/[0.03]"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-lets-blue/30 text-lets-blue transition-shadow group-hover:shadow-[0_0_20px_rgba(54,169,225,0.2)]"
            >
              <Icon size={22} />
            </motion.div>
            <div className="mb-3 font-ui text-[19px] font-bold text-lets-white">{t}</div>
            <div className="text-sm leading-[1.65] text-white/50">{d}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;