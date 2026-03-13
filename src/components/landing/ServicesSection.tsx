import { useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { MonitorSmartphone, TrendingUp, Globe, Video, Layers } from "lucide-react";

const services = [
  { Icon: MonitorSmartphone, t: "Social Media", d: "Gestão completa de Instagram, TikTok e LinkedIn. Conteúdo estratégico, calendário editorial e engajamento orgânico." },
  { Icon: TrendingUp, t: "Tráfego Pago", d: "Google Ads e Meta Ads otimizados para o mercado médico. Captação de pacientes com investimento inteligente." },
  { Icon: Globe, t: "Sites e Landing Pages", d: "Sites médicos profissionais, otimizados para SEO e conversão. Landing pages para campanhas específicas." },
  { Icon: Video, t: "Produção Audiovisual", d: "Vídeos institucionais, reels e conteúdo para redes. Captação, edição e finalização com qualidade profissional." },
  { Icon: Layers, t: "Identidade Visual", d: "Criação e gestão da identidade da sua marca médica. Logotipo, paleta, tipografia e materiais gráficos." },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <section ref={ref} id="servicos" className="fade-in bg-[--bg] px-6 py-28 md:px-14">
      <div className="mx-auto mb-14 max-w-[1100px]">
        <div className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">Serviços</div>
        <h2 className="mb-6 max-w-[600px] font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]">
          Tudo o que precisa acontecer, sem operação picada.
        </h2>
        <p className="max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          Serviços desenhados para funcionar como sistema, não como entregas isoladas.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 overflow-hidden rounded-[20px] border border-[--border-color] sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ Icon, t, d }) => (
          <div key={t} className="border-b border-r border-[--border-color] bg-white/[0.015] p-10 transition hover:bg-[rgba(54,169,225,0.03)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[--border-accent] text-[--accent]">
              <Icon size={22} />
            </div>
            <div className="mb-3 font-ui text-[19px] font-bold text-[--w]">{t}</div>
            <div className="text-sm leading-[1.65] text-[--muted]">{d}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
