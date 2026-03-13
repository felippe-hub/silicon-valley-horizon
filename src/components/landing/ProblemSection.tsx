import { useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const pains = [
  "Sem precisar aprender marketing",
  "Sem precisar gerenciar equipe",
  "Sem precisar perder tempo",
];

const tags = ["Conteúdo", "Site", "Tráfego", "Estratégia"];

const ProblemSection = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <div className="scroll-layer-wrap relative" style={{ minHeight: "100vh" }}>
      <section
        ref={ref}
        id="problema"
        className="fade-in sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden bg-[--bg]"
        style={{ zIndex: 1 }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 py-24 md:px-20">
          <div className="grid items-center gap-20 md:grid-cols-2">
            <div>
              <div className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">O Problema</div>
              <h2 className="mb-6 max-w-[480px] font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]">
                Sua rotina já é cheia demais para o marketing virar mais uma função.
              </h2>
              <div className="mb-7 h-[2px] w-12 bg-[--accent]" />
              <p className="max-w-[540px] text-[17px] leading-[1.75] text-white/55">
                Consultas, cirurgias, plantões, estudos. Seu dia já tem responsabilidades demais. Marketing não deveria ser mais uma.
              </p>
            </div>
            <div>
              {pains.map((p) => (
                <div key={p} className="mb-3 flex items-center gap-4 rounded-xl border border-[--border-color] bg-white/[0.02] px-6 py-5 transition hover:border-[rgba(255,80,80,0.3)]">
                  <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[rgba(255,80,80,0.6)]" />
                  <span className="text-[15px] text-white/65">{p}</span>
                </div>
              ))}

              <div className="mt-10 rounded-2xl border border-[--border-color] bg-white/[0.025] p-7">
                <div className="mb-4 font-ui text-[10px] font-bold uppercase tracking-[4px] text-[--accent]">LETS!DOC OPERA</div>
                <div className="flex flex-wrap gap-[10px]">
                  {tags.map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-[20px] border px-[18px] py-2 font-ui text-xs font-bold ${
                        i === 0 ? "border-[--border-accent] text-[--accent]" : "border-[--border-color] text-[--muted]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProblemSection;
