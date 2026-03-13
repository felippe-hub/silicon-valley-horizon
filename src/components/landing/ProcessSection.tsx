import { useRef, useEffect, useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const steps = [
  { n: "01", t: "Briefing", d: "Entendemos sua especialidade, público e objetivos para montar uma estratégia sob medida." },
  { n: "02", t: "Planejamento", d: "Definimos estratégia, canais e calendário editorial alinhado com a sua rotina." },
  { n: "03", t: "Produção", d: "Criamos conteúdo autoral, visual e textual com identidade própria da sua marca médica." },
  { n: "04", t: "Captação", d: "Gravamos e fotografamos material profissional com qualidade de alto nível." },
  { n: "05", t: "Edição", d: "Finalizamos peças com qualidade premium — cor, luz e ritmo de edição profissional." },
  { n: "06", t: "Publicação", d: "Gerenciamos e publicamos em todos os canais: Instagram, TikTok e LinkedIn." },
  { n: "07", t: "Acompanhamento", d: "Analisamos métricas e otimizamos continuamente para maximizar seus resultados." },
];

const ProcessSection = () => {
  const ref = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [showSteps, setShowSteps] = useState(false);
  useFadeIn(ref);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShowSteps(true); io.disconnect(); } },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="processo" className="fade-in relative rounded-t-3xl bg-[--bg2] px-6 py-28 md:px-14" style={{ zIndex: 3 }}>
      <div className="mx-auto mb-[72px] max-w-[1100px] text-center">
        <div className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">Processo</div>
        <h2 className="mb-6 font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]">
          Um fluxo pensado para não travar sua rotina.
        </h2>
        <p className="mx-auto max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          Cada etapa foi desenhada para manter ritmo, consistência e autonomia.
        </p>
      </div>
      <div ref={gridRef} className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className={`rounded-2xl border border-[--border-color] bg-white/[0.025] p-9 transition-all duration-500 hover:border-[--border-accent] hover:bg-[rgba(54,169,225,0.025)] ${
              showSteps ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: showSteps ? `${i * 70}ms` : "0ms" }}
          >
            <div className="mb-5 font-display text-[64px] leading-none tracking-[2px] text-white/[0.07]">{s.n}</div>
            <div className="mb-[10px] font-ui text-lg font-bold text-[--w]">{s.t}</div>
            <div className="text-sm leading-[1.65] text-[--muted]">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
