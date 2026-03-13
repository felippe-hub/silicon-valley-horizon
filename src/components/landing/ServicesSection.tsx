import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Target, Globe, Video, Palette } from "lucide-react";

const services = [
  { icon: Instagram, title: "Social Media", desc: "Gestão completa de Instagram, TikTok e LinkedIn. Conteúdo estratégico, calendário editorial e engajamento orgânico.", span: "md:col-span-2", dir: { x: -30, y: 0 } },
  { icon: Target, title: "Tráfego Pago", desc: "Google Ads e Meta Ads otimizados para o mercado médico. Captação de pacientes com investimento inteligente.", span: "", dir: { x: 30, y: 0 } },
  { icon: Globe, title: "Sites e Landing Pages", desc: "Sites médicos profissionais, otimizados para SEO e conversão.", span: "", dir: { x: -30, y: 0 } },
  { icon: Video, title: "Produção Audiovisual", desc: "Vídeos institucionais, reels e conteúdo para redes sociais com qualidade profissional.", span: "", dir: { x: 0, y: 30 } },
  { icon: Palette, title: "Identidade Visual", desc: "Criação e gestão da identidade visual da sua marca médica. Logotipo, paleta de cores e materiais gráficos.", span: "", dir: { x: 30, y: 0 } },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-28 md:py-36 relative section-dark section-border-dark overflow-hidden" ref={ref}>
      <div className="absolute bottom-[-5%] right-[-8%] w-[22rem] h-[22rem] blob-white animate-orbit-reverse pointer-events-none" />
      <div className="absolute top-[10%] left-[-5%] w-[16rem] h-[16rem] blob-blue opacity-30 animate-orbit-slow pointer-events-none" />

      <div className="mx-auto max-w-[98rem] px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-14"
        >
          <span className="section-label-dark">Serviços</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-bold leading-tight text-lets-white">
            Tudo o que precisa acontecer,{" "}
            <span className="text-gradient-blue">sem operação picada.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>
            Serviços desenhados para funcionar como sistema, não como entregas isoladas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: service.dir.x, y: service.dir.y }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`layer-card-dark p-6 group cursor-default ${service.span}`}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 glass-blue-dark group-hover:glow-border transition-shadow duration-500">
                <service.icon size={18} style={{ color: "#36A9E1" }} />
              </div>
              <h3 className="font-display text-lg font-semibold text-lets-white mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
