import { useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <section ref={ref} id="sobre" className="fade-in bg-[--bg] px-6 py-28 md:px-14">
      <div className="mx-auto max-w-[720px] text-center">
        <div className="mb-5 font-ui text-[10px] font-bold uppercase tracking-[5px] text-[--accent]">Sobre</div>
        <h2 className="mb-6 font-display text-[clamp(40px,6vw,84px)] uppercase leading-[0.95] tracking-[2px] text-[--w]">
          Uma agência criada de dentro do mercado médico.
        </h2>
        <div className="mx-auto mb-8 h-[2px] w-12 bg-[--accent]" />
        <p className="mx-auto mb-6 max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          A Lets!DOC nasceu de dentro do mercado médico. Não somos uma agência genérica que resolveu atender médicos — somos especialistas que entendem a rotina, as restrições éticas e as oportunidades únicas da comunicação em saúde.
        </p>
        <p className="mx-auto max-w-[540px] text-[17px] leading-[1.75] text-white/55">
          Combinamos estratégia de marketing digital com profundo conhecimento do setor médico para entregar resultados consistentes, sem complicar a vida de quem já tem uma rotina intensa demais.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
