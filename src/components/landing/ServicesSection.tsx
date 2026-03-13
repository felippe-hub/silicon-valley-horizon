import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Target, Globe, Video, Palette } from "lucide-react";

const services = [
  {
    icon: Instagram,
    title: "Social Media",
    desc: "Gestão completa de Instagram, TikTok e LinkedIn. Conteúdo estratégico, calendário editorial e engajamento orgânico.",
    span: "md:col-span-2",
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    desc: "Google Ads e Meta Ads otimizados para o mercado médico. Captação de pacientes com investimento inteligente.",
    span: "",
  },
  {
    icon: Globe,
    title: "Sites e Landing Pages",
    desc: "Sites médicos profissionais, otimizados para SEO e conversão.",
    span: "",
  },
  {
    icon: Video,
    title: "Produção Audiovisual",
    desc: "Vídeos institucionais, reels e conteúdo para redes sociais com qualidade profissional.",
    span: "",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    desc: "Criação e gestão da identidade visual da sua marca médica. Logotipo, paleta de cores e materiais gráficos.",
    span: "",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <span className="section-label">Serviços</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Tudo o que precisa acontecer,{" "}
            <span className="text-gradient-primary">sem operação picada.</span>
          </h2>
          <p className="text-muted-foreground">
            Serviços desenhados para funcionar como sistema, não como entregas isoladas.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className={`bento-card p-6 group cursor-default ${service.span}`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
