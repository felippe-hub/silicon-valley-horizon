import { useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const stats = [
  { v: "+142%", l: "Alcance" },
  { v: "+87%", l: "Engajamento" },
  { v: "+2.4k", l: "Seguidores" },
  { v: "+34%", l: "Conversões" },
];

const ResultsSection = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <section ref={ref} id="resultado" className="fade-in bg-[--bg2] px-6 py-28 text-center md:px-14">
      <div className="mx-auto mb-[60px] max-w-[620px]">
        <div className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">Resultado</div>
        <h2 className="mb-6 font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]">
          Seu Instagram é sua vitrine.
        </h2>
        <p className="mx-auto max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          A primeira impressão do seu paciente começa no feed. Transformamos perfis genéricos em autoridade médica real.
        </p>
      </div>

      <div className="mx-auto grid max-w-[700px] grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-[--border-color]">
          <img src="/cases/dra-luanne-antes.png" alt="Instagram Dra. Luanne — Antes" className="block min-h-[300px] w-full bg-[--bg3] object-cover" loading="lazy" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[20px] border border-[--border-color] bg-black/85 px-[18px] py-[7px] font-ui text-[11px] font-bold uppercase tracking-[2.5px] backdrop-blur-[10px]">
            Antes
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-[--border-color]">
          <img src="/cases/dra-luanne-depois.png" alt="Instagram Dra. Luanne — Depois" className="block min-h-[300px] w-full bg-[--bg3] object-cover" loading="lazy" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[20px] border border-[--border-accent] bg-black/85 px-[18px] py-[7px] font-ui text-[11px] font-bold uppercase tracking-[2.5px] text-[--accent] backdrop-blur-[10px]">
            Depois
          </div>
        </div>
      </div>

      <p className="mt-5 font-ui text-xs tracking-[1.5px] text-[--muted]">
        Dra. Luanne Gerbassi · Endocrinologia e Dermatologia
      </p>

      <div className="mx-auto mt-[60px] grid max-w-[800px] grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-[52px] tracking-[2px] text-[--accent]">{s.v}</div>
            <div className="font-ui text-[10px] font-bold uppercase tracking-[3px] text-[--muted]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
