import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VideoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="video" className="relative bg-[--bg] px-6 py-20 md:px-14">
      {/* Ambient blob */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(54,169,225,0.05)_0%,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass glow-border mx-auto max-w-[900px] overflow-hidden rounded-[20px]"
      >
        <div className="relative flex aspect-video flex-col items-center justify-center gap-5 bg-[--bg3]/80">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(54,169,225,0.08),transparent_60%)]" />

          {/* Decorative grid lines */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="play-pulse relative z-10 flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full border-2 border-[--border-accent] transition hover:border-[--accent] hover:bg-[--accent-dim]"
          >
            <div className="ml-[5px] h-0 w-0 border-y-[13px] border-l-[22px] border-y-transparent border-l-[--accent]" />
          </motion.div>
          <p className="relative z-10 font-ui text-[13px] tracking-[1px] text-[--muted]">Assista como a Lets!DOC opera</p>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
