import { useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

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
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <section ref={ref} id="para-quem" className="fade-in bg-[--bg2] px-6 py-28 md:px-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">Para quem</div>
        <h2 className="mb-6 max-w-[600px] font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]">
          Somos seletivos, e você também deveria ser.
        </h2>
        <p className="max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          A parceria funciona melhor quando existe alinhamento de ritmo, investimento e expectativa.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[--border-accent] bg-[rgba(54,169,225,0.025)] p-10">
            <div className="mb-7 font-ui text-[11px] font-bold uppercase tracking-[4px] text-[--accent]">É para você se...</div>
            <ul className="flex flex-col gap-4">
              {forYou.map((t) => (
                <li key={t} className="flex items-start gap-[14px] text-[15px] leading-[1.5] text-white/75">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[--border-accent] bg-[--accent-dim]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[--accent]" />
                  </div>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[--border-color] p-10 opacity-55">
            <div className="mb-7 font-ui text-[11px] font-bold uppercase tracking-[4px] text-[--muted]">Não é para você se...</div>
            <ul className="flex flex-col gap-4">
              {notForYou.map((t) => (
                <li key={t} className="flex items-start gap-[14px] text-[15px] leading-[1.5] text-white/75">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full border border-[--border-color]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
