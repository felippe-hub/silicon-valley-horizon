import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden section-border"
      style={{ background: "#0A0A0A" }}
    >
      {/* === Background layers (matching original) === */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blue orbiting blob */}
        <div className="absolute left-[-10%] top-[10%] h-[24rem] w-[24rem] md:h-[32rem] md:w-[32rem] blob-blue animate-orbit-slow" />
        {/* White subtle blob */}
        <div className="absolute bottom-[2%] right-[-12%] h-[18rem] w-[18rem] md:h-[28rem] md:w-[28rem] blob-white animate-orbit-reverse" />
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top, rgba(54,169,225,0.18), transparent 40%), linear-gradient(180deg, rgba(255,255,255,0.02), transparent 45%)",
          }}
        />
        {/* Floating grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.16] animate-grid-drift" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100dvh] w-full max-w-[98rem] items-center gap-8 px-4 pb-12 pt-24 md:grid-cols-[0.55fr_1.45fr] md:px-8">
        {/* Left: Copy */}
        <div className="space-y-7 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase glass"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#36A9E1" }} />
              Marketing Médico
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-[3.6rem] font-bold leading-[1] tracking-tight text-lets-white"
          >
            Marketing médico
            <br />
            sem complicação
            <span style={{ color: "#36A9E1" }}>.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-md leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            A Lets Doc cuida de toda a sua presença digital, da estratégia ao tráfego,
            para que você possa focar exclusivamente na sua prática médica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-2.5"
          >
            {[
              "Sem precisar aprender marketing.",
              "Sem precisar gerenciar equipe.",
              "Sem precisar perder tempo.",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#36A9E1" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#agendar"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl transition-all group"
              style={{ background: "#36A9E1", color: "#0A0A0A" }}
            >
              Agendar diagnóstico
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#processo"
              className="inline-flex items-center gap-2 glass font-medium px-7 py-3.5 rounded-xl transition-all text-lets-white hover:bg-[rgba(255,255,255,0.08)]"
            >
              Conheça o processo
            </a>
          </motion.div>
        </div>

        {/* Right: Layered glassmorphic interface */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-[580px] h-[480px]">

            {/* ===== LAYER 1: Back — Dashboard card ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 right-0 w-[420px] glass-md rounded-2xl p-6 animate-float inner-shadow-depth"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: "#36A9E1" }} />
                  <span className="text-[11px] font-medium tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Painel em tempo real
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold" style={{ color: "#36A9E1" }}>● LIVE</span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Alcance", value: "+142%", Icon: Globe },
                  { label: "Engajamento", value: "+87%", Icon: Users },
                  { label: "Conversões", value: "+34%", Icon: TrendingUp },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="glass rounded-xl p-3 text-center inner-shadow-depth"
                  >
                    <stat.Icon size={14} className="mx-auto mb-1.5" style={{ color: "#36A9E1" }} />
                    <div className="text-lg font-display font-bold text-lets-white">{stat.value}</div>
                    <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Mini chart bars */}
              <div className="mt-5 flex items-end gap-[3px] h-10">
                {[35, 50, 30, 60, 45, 70, 55, 75, 65, 85, 78, 92].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.04 }}
                    className="flex-1 rounded-[2px]"
                    style={{ background: `rgba(54, 169, 225, ${0.2 + (h / 100) * 0.4})`, minHeight: 2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* ===== LAYER 2: Mid — Operation status ===== */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-[55%] -translate-y-1/2 left-0 w-[240px] glass-md rounded-2xl p-5 animate-float-delayed glow-border inner-shadow-depth z-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center glass-blue">
                  <BarChart3 size={15} style={{ color: "#36A9E1" }} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-lets-white">Operação unificada</div>
                  <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>Estratégia · Conteúdo · Tráfego</div>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { label: "Conteúdo", pct: 92 },
                  { label: "Tráfego", pct: 78 },
                  { label: "Engajamento", pct: 85 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                      <span>{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 1.2, delay: 0.8 + i * 0.15 }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #36A9E1, #8BDDFF)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ===== LAYER 3: Front — Terminal card ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-0 right-4 w-[270px] glass-strong rounded-2xl p-4 animate-float-slow glow-border inner-shadow-depth z-20"
            >
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: "rgba(255,80,80,0.6)" }} />
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: "rgba(255,190,50,0.6)" }} />
                <div className="w-[7px] h-[7px] rounded-full" style={{ background: "rgba(80,200,120,0.6)" }} />
                <span className="text-[10px] ml-2 font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
                  letsdoc.terminal
                </span>
              </div>
              <div className="font-mono text-[11px] space-y-1.5">
                <div style={{ color: "rgba(255,255,255,0.4)" }}>
                  <span style={{ color: "#36A9E1" }}>$</span> iniciar operação
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span style={{ color: "#50C878" }}>✓</span> Estratégia definida
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span style={{ color: "#50C878" }}>✓</span> Conteúdo produzido
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span style={{ color: "#50C878" }}>✓</span> Tráfego ativado
                </div>
                <div className="flex items-center gap-1">
                  <span style={{ color: "#36A9E1" }}>$</span>
                  <span className="text-lets-white">resultados gerando</span>
                  <span className="animate-pulse" style={{ color: "#36A9E1" }}>_</span>
                </div>
              </div>
            </motion.div>

            {/* Central glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full animate-pulse-glow" style={{ background: "rgba(54,169,225,0.06)", filter: "blur(60px)" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
