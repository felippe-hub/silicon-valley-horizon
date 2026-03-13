import { useRef, useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const pills = ["Estratégia", "Conteúdo", "Site", "Tráfego"];

const SolutionSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [activePill, setActivePill] = useState(0);
  useFadeIn(ref);

  return (
    <div className="scroll-layer-wrap relative" style={{ minHeight: "100vh" }}>
      <section
        ref={ref}
        id="solucao"
        className="fade-in sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden rounded-t-3xl bg-[--bg2]"
        style={{ zIndex: 2 }}
      >
        <div className="mx-auto w-full max-w-[900px] px-6 py-24 text-center md:px-20">
          <div className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">A Solução</div>
          <p className="mb-3 text-xl text-[--muted]">E aqui que entra a</p>

          <div className="mb-5">
            <img
              src="/letsdoc-white.svg"
              alt="Lets!DOC"
              className="mx-auto h-20 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          <p className="mx-auto mb-0 max-w-[540px] text-[17px] leading-[1.75] text-white/55">
            Você cuida da medicina.<br />A gente cuida do marketing.
          </p>

          <div className="my-8 flex flex-wrap justify-center gap-[10px] md:my-12">
            {pills.map((p, i) => (
              <button
                key={p}
                onClick={() => setActivePill(i)}
                className={`rounded-[20px] border px-[26px] py-[10px] font-ui text-[13px] font-bold transition-all ${
                  activePill === i
                    ? "border-[--border-accent] bg-[--accent-dim] text-[--accent]"
                    : "border-[--border-color] text-[--muted]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="mx-auto grid max-w-[640px] grid-cols-1 overflow-hidden rounded-[20px] border border-[--border-color] md:grid-cols-2">
            <div className="border-b border-[--border-color] p-12 text-center md:border-b-0 md:border-r">
              <div className="mb-2 font-display text-[44px] tracking-[2px] text-[--w]">VOCÊ</div>
              <div className="text-xs tracking-[1px] text-[--muted]">Consultas · Cirurgias · Pacientes</div>
            </div>
            <div className="p-12 text-center">
              <div className="mb-2 font-display text-[44px] tracking-[2px] text-[--accent]">
                LETS<span className="text-[--w]">!</span>DOC
              </div>
              <div className="text-xs tracking-[1px] text-[--muted]">Estratégia · Conteúdo · Tráfego</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionSection;
