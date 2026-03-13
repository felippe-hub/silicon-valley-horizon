import { useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <section ref={ref} id="agendar" className="fade-in bg-[--bg2] px-6 py-28 text-center md:px-14">
      <div className="mx-auto max-w-[600px]">
        <div className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">Comece agora</div>
        <h2 className="mb-6 font-display text-[clamp(44px,7vw,88px)] uppercase leading-[0.95] tracking-[2px] text-[--w]">
          Seu marketing não precisa ser mais uma preocupação.
        </h2>
        <p className="mx-auto mb-12 max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          Agende um diagnóstico gratuito e descubra como a Lets!DOC pode transformar sua presença digital sem adicionar complexidade à sua rotina.
        </p>
        <div className="flex flex-wrap justify-center gap-[14px]">
          <a href="https://wa.me/5500000000000" className="rounded-lg bg-[--accent] px-[38px] py-4 font-ui text-sm font-bold tracking-[0.5px] text-black transition hover:-translate-y-0.5 hover:opacity-90">
            Agendar diagnóstico
          </a>
          <a href="https://wa.me/5500000000000" className="rounded-lg border border-[--border-m] bg-transparent px-[38px] py-4 font-ui text-sm font-semibold text-[--w] transition hover:border-white/30 hover:bg-white/5">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
