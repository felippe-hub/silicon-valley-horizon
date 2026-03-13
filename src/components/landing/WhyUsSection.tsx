import { useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const cards = [
  { n: "01", t: "Operação low touch", d: "Você não precisa participar de reuniões semanais ou aprovar cada post. Operamos de forma autônoma, com check-ins mensais." },
  { n: "02", t: "Comunicação direta", d: "Sem camadas de atendimento. Fale direto com quem faz acontecer, via WhatsApp, quando precisar." },
  { n: "03", t: "Centralização total", d: "Estratégia, conteúdo, tráfego e análise em um só lugar. Zero fragmentação, zero retrabalho." },
];

const WhyUsSection = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <section ref={ref} id="porque" className="fade-in bg-[--bg] px-6 py-28 md:px-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">Por que a Lets!DOC</div>
        <h2 className="mb-6 max-w-[600px] font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]">
          Menos reunião, mais tração.
        </h2>
        <p className="max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          Uma operação feita para simplificar o seu lado sem reduzir a qualidade da entrega.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.n} className="rounded-2xl border border-[--border-color] p-10 transition hover:border-[--border-accent]">
              <div className="mb-4 font-display text-[52px] tracking-[2px] text-[--accent]">{c.n}</div>
              <div className="mb-3 font-ui text-[17px] font-bold text-[--w]">{c.t}</div>
              <div className="text-sm leading-[1.65] text-[--muted]">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
