import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BarChart3, Globe, TrendingUp, Users } from "lucide-react";
import doctorHero from "@/assets/doctor-hero.png";
import medicalWorkspace from "@/assets/medical-workspace.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const layerTopY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const layerMiddleY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const layerBottomY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] overflow-hidden section-dark section-border-dark">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 18% 20%, hsl(var(--primary) / 0.20), transparent 40%), radial-gradient(circle at 78% 74%, hsl(var(--primary) / 0.10), transparent 42%)" }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.12]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100dvh] w-full max-w-[94rem] items-center gap-10 px-4 pb-14 pt-24 md:grid-cols-[1fr_1.05fr] md:px-8">
        <div className="space-y-6 md:space-y-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-secondary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            MARKETING MÉDICO
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-foreground md:text-5xl lg:text-[3.75rem]"
          >
            Marketing médico
            <br />
            sem complicação<span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="max-w-xl text-base leading-relaxed text-foreground/75 md:text-[1.75rem]"
          >
            A Lets Doc cuida de toda a sua presença digital, da estratégia ao tráfego, para que você possa focar exclusivamente na sua prática médica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            {["Sem precisar aprender marketing.", "Sem precisar gerenciar equipe.", "Sem precisar perder tempo."].map((text) => (
              <div key={text} className="flex items-center gap-3 text-sm font-semibold text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {text}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <a href="#agendar" className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition hover:opacity-90">
              Agendar diagnóstico <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#processo" className="inline-flex items-center rounded-xl border border-foreground/20 bg-secondary/85 px-7 py-3.5 text-base font-semibold text-foreground/90 transition hover:bg-secondary">
              Conheça o processo
            </a>
          </motion.div>
        </div>

        <div className="relative h-[460px] md:h-[520px]">
          <motion.div style={{ y: layerTopY }} className="absolute right-0 top-0 w-[86%] rounded-3xl tech-panel-dark p-4 md:p-5">
            <div className="image-frame-dark h-[210px] rounded-2xl md:h-[250px]">
              <img src={medicalWorkspace} alt="Consultório médico moderno com monitoramento digital" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 rounded-2xl border border-foreground/12 bg-background/80 p-3 md:p-4">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/70">PAINEL EM TEMPO REAL</div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Alcance", value: "+142%", Icon: Globe },
                  { label: "Engajamento", value: "+87%", Icon: Users },
                  { label: "Conversões", value: "+34%", Icon: TrendingUp },
                ].map(({ label, value, Icon }) => (
                  <div key={label} className="rounded-xl border border-foreground/10 bg-secondary/90 p-2 text-center">
                    <Icon size={12} className="mx-auto mb-1 text-primary" />
                    <div className="font-display text-sm font-bold text-foreground">{value}</div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-foreground/60">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: layerMiddleY }} className="absolute -bottom-2 left-0 z-20 w-[190px] rounded-2xl tech-panel-soft p-3">
            <img src={doctorHero} alt="Médica especialista" className="mb-3 h-auto w-full rounded-xl" />
            <div className="text-center">
              <div className="text-xs font-bold text-foreground">Dra. Exemplo</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/60">Dermatologia</div>
            </div>
            <div className="mt-2 flex gap-1">
              {[92, 78, 85].map((pct) => (
                <div key={pct} className="h-1 flex-1 overflow-hidden rounded-full bg-foreground/10">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: layerBottomY }} className="absolute bottom-6 right-4 z-30 w-[260px] rounded-2xl tech-panel-dark p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/60">LETSDOC.TERMINAL</span>
            </div>
            <div className="space-y-1.5 font-mono text-[11px] text-foreground/75">
              <div><span className="font-bold text-primary">$</span> iniciar operação</div>
              <div><span className="mr-1 text-primary">✓</span> Estratégia definida</div>
              <div><span className="mr-1 text-primary">✓</span> Conteúdo produzido</div>
              <div><span className="mr-1 text-primary">✓</span> Tráfego ativado</div>
              <div className="font-semibold text-foreground"><span className="mr-1 text-primary">$</span> resultados gerando_</div>
            </div>
          </motion.div>

          <motion.div style={{ y: layerMiddleY }} className="absolute right-0 top-[54%] z-20 w-[150px] rounded-xl tech-panel-soft p-3">
            <div className="mb-2 flex items-center gap-2 text-foreground">
              <BarChart3 size={14} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.08em]">Performance</span>
            </div>
            <div className="flex h-8 items-end gap-[2px]">
              {[30, 45, 55, 40, 65, 50, 72, 60, 80].map((h) => (
                <div key={h} className="min-h-[2px] flex-1 rounded-[2px] bg-primary/70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
