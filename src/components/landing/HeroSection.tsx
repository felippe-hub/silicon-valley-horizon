import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Users, TrendingUp } from "lucide-react";
import doctorHero from "@/assets/doctor-hero.png";
import medicalWorkspace from "@/assets/medical-workspace.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden section-dark section-border-dark">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[24rem] w-[24rem] md:h-[32rem] md:w-[32rem] blob-blue animate-orbit-slow" />
        <div className="absolute bottom-[2%] right-[-12%] h-[18rem] w-[18rem] md:h-[28rem] md:w-[28rem] blob-white animate-orbit-reverse" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at top, rgba(54,169,225,0.18), transparent 40%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent 45%)" }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.16] animate-grid-drift" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100dvh] w-full max-w-[90rem] items-center gap-12 px-4 pb-12 pt-24 md:grid-cols-2 md:px-8 lg:gap-16">
        {/* Left: Copy */}
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase glass-dark" style={{ color: "rgba(255,255,255,0.6)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#36A9E1" }} />
              Marketing Médico
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-lets-white">
            Marketing médico<br />sem complicação<span style={{ color: "#36A9E1" }}>.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            A Lets Doc cuida de toda a sua presença digital, da estratégia ao tráfego, para que você possa focar exclusivamente na sua prática médica.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="space-y-2.5">
            {["Sem precisar aprender marketing.", "Sem precisar gerenciar equipe.", "Sem precisar perder tempo."].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#36A9E1" }} />
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>{text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 pt-2">
            <a href="#agendar" className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl transition-all group" style={{ background: "#36A9E1", color: "#0A0A0A" }}>
              Agendar diagnóstico <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#processo" className="inline-flex items-center gap-2 glass-dark-md font-medium px-7 py-3.5 rounded-xl transition-all text-lets-white hover:bg-[rgba(255,255,255,0.14)]">
              Conheça o processo
            </a>
          </motion.div>
        </div>

        {/* Right: Layered glassmorphic composition with real medical imagery */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-[560px] h-[480px]">

            {/* LAYER 1: Real image — medical workspace with glassmorphic overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -5 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-0 right-0 w-[380px] h-[250px] image-frame-dark animate-float"
              style={{ perspective: "1000px" }}
            >
              <img src={medicalWorkspace} alt="Consultório médico moderno" className="w-full h-full object-cover" />
              {/* Glass overlay on the image */}
              <div className="absolute inset-0 glass-dark-strong flex items-end p-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "#36A9E1" }} />
                    <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>Painel em tempo real</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[{ label: "Alcance", value: "+142%", Icon: Globe }, { label: "Engajamento", value: "+87%", Icon: Users }, { label: "Conversões", value: "+34%", Icon: TrendingUp }].map((s, i) => (
                      <div key={i} className="glass-dark-md rounded-lg p-2 text-center inner-shadow-dark">
                        <s.Icon size={12} className="mx-auto mb-1" style={{ color: "#36A9E1" }} />
                        <div className="text-sm font-display font-bold text-lets-white">{s.value}</div>
                        <div className="text-[9px] font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LAYER 2: Doctor image with glass frame */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotateY: 8 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="absolute bottom-4 left-0 w-[190px] animate-float-delayed z-10"
              style={{ perspective: "800px" }}
            >
              <div className="glass-dark-strong rounded-2xl p-3 glow-border inner-shadow-dark">
                <img src={doctorHero} alt="Médica profissional" className="w-full h-auto rounded-xl mb-3" />
                <div className="text-center">
                  <div className="text-xs font-semibold text-lets-white">Dra. Exemplo</div>
                  <div className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>Dermatologia</div>
                </div>
                <div className="mt-2 flex gap-1">
                  {[92, 78, 85].map((pct, i) => (
                    <div key={i} className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1.2, delay: 0.8 + i * 0.15 }}
                        className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #36A9E1, #8BDDFF)" }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* LAYER 3: Terminal with operation commands */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: -5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-8 right-4 w-[250px] glass-dark-strong rounded-2xl p-4 animate-float-slow glow-border inner-shadow-dark z-20"
              style={{ perspective: "600px" }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: "rgba(255,80,80,0.7)" }} />
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: "rgba(255,190,50,0.7)" }} />
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: "rgba(80,200,120,0.7)" }} />
                <span className="text-[10px] ml-2 font-mono font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>letsdoc.terminal</span>
              </div>
              <div className="font-mono text-[11px] space-y-1.5">
                <div style={{ color: "rgba(255,255,255,0.5)" }}><span className="font-bold" style={{ color: "#36A9E1" }}>$</span> iniciar operação</div>
                <div style={{ color: "rgba(255,255,255,0.6)" }}><span className="font-bold" style={{ color: "#50C878" }}>✓</span> Estratégia definida</div>
                <div style={{ color: "rgba(255,255,255,0.6)" }}><span className="font-bold" style={{ color: "#50C878" }}>✓</span> Conteúdo produzido</div>
                <div style={{ color: "rgba(255,255,255,0.6)" }}><span className="font-bold" style={{ color: "#50C878" }}>✓</span> Tráfego ativado</div>
                <div className="flex items-center gap-1">
                  <span className="font-bold" style={{ color: "#36A9E1" }}>$</span>
                  <span className="font-semibold text-lets-white">resultados gerando</span>
                  <span className="animate-pulse" style={{ color: "#36A9E1" }}>_</span>
                </div>
              </div>
            </motion.div>

            {/* LAYER 4: Floating metric card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute top-[42%] right-[-10px] glass-dark-strong rounded-xl p-3 w-[145px] animate-float z-10 inner-shadow-dark glow-border"
            >
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 size={14} style={{ color: "#36A9E1" }} />
                <span className="text-[10px] font-bold text-lets-white">Performance</span>
              </div>
              <div className="flex items-end gap-[2px] h-8">
                {[30, 45, 55, 40, 65, 50, 72, 60, 80, 70, 90].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.04 }}
                    className="flex-1 rounded-[2px]" style={{ background: `rgba(54,169,225,${0.3 + (h / 100) * 0.5})`, minHeight: 2 }} />
                ))}
              </div>
            </motion.div>

            {/* Central glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full animate-pulse-glow" style={{ background: "rgba(54,169,225,0.08)", filter: "blur(60px)" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>Scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
