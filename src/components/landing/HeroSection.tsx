import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Globe, Users, TrendingUp } from "lucide-react";

const FloatingCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={`glass rounded-2xl glow-border ${className}`}
  >
    {children}
  </motion.div>
);

const DataStream = () => (
  <div className="absolute right-0 top-0 bottom-0 w-px overflow-hidden opacity-30">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="w-px h-4 bg-primary animate-data-flow absolute"
        style={{ animationDelay: `${i * 0.4}s`, left: 0 }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label inline-flex items-center gap-2 bg-secondary px-4 py-1.5 rounded-full">
                <Zap size={12} className="text-primary" />
                Marketing Médico
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              Marketing médico
              <br />
              sem complicação
              <span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              A Lets Doc cuida de toda a sua presença digital, da estratégia ao tráfego,
              para que você possa focar exclusivamente na sua prática médica.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-3"
            >
              {[
                "Sem precisar aprender marketing.",
                "Sem precisar gerenciar equipe.",
                "Sem precisar perder tempo.",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-secondary-foreground">{text}</span>
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
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-7 py-3.5 rounded-xl hover:opacity-90 transition-all group"
              >
                Agendar diagnóstico
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#processo"
                className="inline-flex items-center gap-2 glass text-foreground font-medium px-7 py-3.5 rounded-xl hover:bg-secondary transition-all"
              >
                Conheça o processo
              </a>
            </motion.div>
          </div>

          {/* Right: Floating glassmorphic dashboard */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[520px]">
              {/* Main dashboard card */}
              <FloatingCard className="absolute top-0 left-4 right-4 p-6 animate-float" delay={0.4}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                    <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
                      Painel em tempo real
                    </span>
                  </div>
                  <span className="text-xs text-primary font-mono">LIVE</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Alcance", value: "+142%", icon: Globe },
                    { label: "Engajamento", value: "+87%", icon: Users },
                    { label: "Conversões", value: "+34%", icon: TrendingUp },
                  ].map((stat, i) => (
                    <div key={i} className="bg-secondary/50 rounded-xl p-3 text-center relative overflow-hidden">
                      <stat.icon size={14} className="text-primary mx-auto mb-1.5" />
                      <div className="text-lg font-display font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* Mini chart */}
                <div className="mt-4 flex items-end gap-1 h-12">
                  {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                      className="flex-1 bg-primary/30 rounded-sm"
                      style={{ minHeight: 2 }}
                    />
                  ))}
                </div>
                <DataStream />
              </FloatingCard>

              {/* Floating operation card */}
              <FloatingCard
                className="absolute bottom-24 -left-4 p-4 w-56 animate-float-delayed"
                delay={0.6}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart3 size={14} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Operação unificada</div>
                    <div className="text-[10px] text-muted-foreground">Estratégia · Conteúdo · Tráfego</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Conteúdo", pct: 92 },
                    { label: "Tráfego", pct: 78 },
                    { label: "Engajamento", pct: 85 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
                        <span>{item.label}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </FloatingCard>

              {/* Terminal-style card */}
              <FloatingCard
                className="absolute bottom-8 right-0 p-4 w-64 animate-float-slow"
                delay={0.8}
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-destructive/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <span className="text-[10px] text-muted-foreground ml-2 font-mono">letsdoc.terminal</span>
                </div>
                <div className="font-mono text-[11px] space-y-1.5">
                  <div className="text-muted-foreground">
                    <span className="text-primary">$</span> iniciar operação
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-green-400">✓</span> Estratégia definida
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-green-400">✓</span> Conteúdo produzido
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-green-400">✓</span> Tráfego ativado
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-primary">$</span>
                    <span className="text-foreground">resultados gerando</span>
                    <span className="animate-pulse text-primary">_</span>
                  </div>
                </div>
              </FloatingCard>

              {/* Decorative orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-[80px] animate-pulse-glow" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
