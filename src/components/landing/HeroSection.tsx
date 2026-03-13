import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ECGCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showMetrics, setShowMetrics] = useState(false);
  const [activeLabel, setActiveLabel] = useState<"ecg" | "growth">("ecg");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pts: [number, number][] = [
      [0, 0.5], [0.07, 0.5], [0.10, 0.47], [0.12, 0.5], [0.14, 0.5],
      [0.16, 0.62], [0.18, 0.06], [0.20, 0.68], [0.23, 0.5],
      [0.27, 0.44], [0.30, 0.42], [0.33, 0.5], [0.42, 0.5],
      [0.50, 0.5], [0.56, 0.48], [0.62, 0.44], [0.68, 0.40],
      [0.74, 0.35], [0.80, 0.29], [0.87, 0.23], [0.94, 0.18], [1.0, 0.14],
    ];

    let W: number, H: number, dpr: number;
    let progress = 0;
    let animDone = false;
    let raf: number;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.scale(dpr, dpr);
      if (animDone) draw(1);
    }

    function drawLine(full: number, frac: number) {
      ctx!.beginPath();
      ctx!.moveTo(pts[0][0] * W, pts[0][1] * H);
      for (let i = 1; i < full; i++) ctx!.lineTo(pts[i][0] * W, pts[i][1] * H);
      if (full < pts.length && pts[full + 1]) {
        ctx!.lineTo(
          (pts[full][0] + (pts[full + 1][0] - pts[full][0]) * frac) * W,
          (pts[full][1] + (pts[full + 1][1] - pts[full][1]) * frac) * H
        );
      } else if (full < pts.length) ctx!.lineTo(pts[full][0] * W, pts[full][1] * H);
    }

    function draw(prog: number) {
      ctx!.clearRect(0, 0, W, H);
      ctx!.save();
      ctx!.strokeStyle = "rgba(255,255,255,0.07)";
      ctx!.lineWidth = 1;
      ctx!.setLineDash([5, 10]);
      ctx!.beginPath();
      ctx!.moveTo(0, H * 0.5);
      ctx!.lineTo(W, H * 0.5);
      ctx!.stroke();
      ctx!.setLineDash([]);
      ctx!.restore();

      if (prog <= 0) return;
      const total = pts.length, count = prog * total, full = Math.floor(count), frac = count - full;
      if (full < 2) return;

      if (prog > 0.5) {
        const gStart = Math.floor(0.5 * total), gEnd = Math.min(full, total - 1);
        ctx!.save();
        ctx!.globalAlpha = Math.min(1, (prog - 0.5) * 2.2) * 0.14;
        ctx!.fillStyle = "#36A9E1";
        ctx!.beginPath();
        ctx!.moveTo(pts[gStart][0] * W, H * 0.5);
        for (let i = gStart; i <= gEnd; i++) ctx!.lineTo(pts[i][0] * W, pts[i][1] * H);
        if (full < total - 1 && pts[full + 1]) {
          ctx!.lineTo(
            (pts[full][0] + (pts[full + 1][0] - pts[full][0]) * frac) * W,
            (pts[full][1] + (pts[full + 1][1] - pts[full][1]) * frac) * H
          );
        }
        ctx!.lineTo(pts[Math.min(gEnd, total - 1)][0] * W, H * 0.5);
        ctx!.closePath();
        ctx!.fill();
        ctx!.restore();
      }

      ctx!.save();
      ctx!.strokeStyle = "rgba(54,169,225,0.25)";
      ctx!.lineWidth = 6;
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";
      drawLine(full, frac);
      ctx!.stroke();
      ctx!.restore();

      ctx!.save();
      ctx!.strokeStyle = "#36A9E1";
      ctx!.lineWidth = 2;
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";
      ctx!.shadowBlur = 8;
      ctx!.shadowColor = "#36A9E1";
      drawLine(full, frac);
      ctx!.stroke();
      ctx!.restore();

      let tipX: number, tipY: number;
      if (full < total - 1 && pts[full + 1]) {
        tipX = (pts[full][0] + (pts[full + 1][0] - pts[full][0]) * frac) * W;
        tipY = (pts[full][1] + (pts[full + 1][1] - pts[full][1]) * frac) * H;
      } else {
        tipX = pts[total - 1][0] * W;
        tipY = pts[total - 1][1] * H;
      }

      const g = ctx!.createRadialGradient(tipX, tipY, 0, tipX, tipY, 18);
      g.addColorStop(0, "rgba(54,169,225,0.7)");
      g.addColorStop(1, "rgba(54,169,225,0)");
      ctx!.fillStyle = g;
      ctx!.beginPath();
      ctx!.arc(tipX, tipY, 18, 0, Math.PI * 2);
      ctx!.fill();

      ctx!.fillStyle = "#36A9E1";
      ctx!.beginPath();
      ctx!.arc(tipX, tipY, 4, 0, Math.PI * 2);
      ctx!.fill();

      if (prog >= 0.45) setActiveLabel("growth");
    }

    function animate() {
      progress += 0.007;
      if (progress >= 1) {
        progress = 1; animDone = true; draw(1); setShowMetrics(true); return;
      }
      draw(progress);
      raf = requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    const t = setTimeout(animate, 500);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); clearTimeout(t); };
  }, []);

  const metrics = [
    { val: "+142%", label: "Alcance" },
    { val: "+87%", label: "Engajamento" },
    { val: "+2.4k", label: "Seguidores" },
    { val: "+34%", label: "Conversões" },
  ];

  return (
    <>
      <motion.div variants={fadeUp} className="mx-auto mb-11 w-full max-w-[960px]">
        <canvas ref={canvasRef} className="block h-[130px] w-full" />
        <div className="mt-2 flex justify-between px-[4%]">
          <span className={`font-ui text-[10px] font-bold uppercase tracking-[3px] transition-colors duration-500 ${activeLabel === "ecg" ? "text-lets-blue" : "text-white/20"}`}>
            Expertise Médica
          </span>
          <span className={`font-ui text-[10px] font-bold uppercase tracking-[3px] transition-colors duration-500 ${activeLabel === "growth" ? "text-lets-blue" : "text-white/20"}`}>
            Crescimento Digital
          </span>
        </div>
      </motion.div>

      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={showMetrics ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, borderColor: "rgba(54,169,225,0.3)" }}
            className="glass glow-hover min-w-[130px] rounded-[14px] px-7 py-[18px]"
          >
            <div className="font-display text-[38px] leading-none tracking-[1px] text-lets-blue">{m.val}</div>
            <div className="mt-[5px] font-ui text-[10px] font-bold uppercase tracking-[2.5px] text-white/40">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-lets-black px-6 pb-24 pt-32 text-center md:px-12">
      <div className="hero-dot-grid pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-lets-blue/[0.08] blur-[100px] orbit-slow md:h-[36rem] md:w-[36rem]" />
      <div className="pointer-events-none absolute bottom-[5%] right-[-10%] h-[22rem] w-[22rem] rounded-full bg-white/[0.04] blur-[100px] orbit-reverse md:h-[30rem] md:w-[30rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(54,169,225,0.08)_0%,transparent_65%)]" />

      <div className="pointer-events-none absolute left-[8%] top-[20%] float-slow">
        <div className="h-1 w-1 rounded-full bg-lets-blue/40" />
      </div>
      <div className="pointer-events-none absolute right-[12%] top-[30%] float-medium" style={{ animationDelay: "1s" }}>
        <div className="h-1.5 w-1.5 rounded-full bg-lets-blue/30" />
      </div>
      <div className="pointer-events-none absolute left-[15%] bottom-[25%] float-fast" style={{ animationDelay: "2s" }}>
        <div className="h-1 w-1 rounded-full bg-white/20" />
      </div>
      <div className="pointer-events-none absolute right-[18%] bottom-[35%] float-slow" style={{ animationDelay: "3s" }}>
        <div className="h-2 w-2 rounded-full bg-lets-blue/20" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <motion.div variants={fadeUp} className="mb-7 flex items-center justify-center gap-3 font-ui text-[11px] font-bold uppercase tracking-[5px] text-lets-blue">
          <span className="h-px max-w-[48px] flex-1 bg-lets-blue/30" />
          Marketing Médico Especializado
          <span className="h-px max-w-[48px] flex-1 bg-lets-blue/30" />
        </motion.div>

        <motion.h1 variants={fadeUp} className="relative mb-2 font-display text-[clamp(72px,12vw,156px)] uppercase leading-[0.92] tracking-[3px] text-lets-white">
          Marketing<br />
          <span className="text-lets-blue">Médico</span>
        </motion.h1>
        <motion.h2 variants={fadeUp} className="relative mb-13 font-display text-[clamp(40px,6vw,80px)] uppercase tracking-[3px] text-white/[0.22]">
          Sem Complicação.
        </motion.h2>
      </motion.div>

      <ECGCanvas />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative mb-12 max-w-[500px] text-[17px] leading-[1.75] text-white/55"
      >
        A Lets!DOC cuida de toda a sua presença digital, da estratégia ao tráfego,
        para que você possa focar exclusivamente na sua prática médica.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="relative flex flex-wrap justify-center gap-[14px]"
      >
        <motion.a
          href="#agendar"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="cta-glow rounded-lg bg-lets-blue px-[38px] py-4 font-ui text-sm font-bold tracking-[0.5px] text-lets-black transition"
        >
          Agendar diagnóstico
        </motion.a>
        <motion.a
          href="#processo"
          whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
          whileTap={{ scale: 0.97 }}
          className="glass rounded-lg px-[38px] py-4 font-ui text-sm font-semibold text-lets-white transition"
        >
          Conhecer o processo
        </motion.a>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-30" style={{ animation: "bounce-hint 2.4s ease-in-out infinite" }}>
        <span className="font-ui text-[9px] uppercase tracking-[4px]">Scroll</span>
        <div className="h-11 w-px bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;