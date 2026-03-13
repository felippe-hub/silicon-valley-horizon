import { useRef } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const VideoSection = () => {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <section ref={ref} id="video" className="fade-in bg-[--bg] px-6 py-20 md:px-14">
      <div className="mx-auto max-w-[900px] overflow-hidden rounded-[20px] border border-[--border-color]">
        <div className="relative flex aspect-video flex-col items-center justify-center gap-5 bg-[--bg3]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(54,169,225,0.05),transparent_60%)]" />
          <div className="relative z-10 flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full border-2 border-[--border-accent] transition hover:border-[--accent] hover:bg-[--accent-dim]">
            <div className="ml-[5px] h-0 w-0 border-y-[13px] border-l-[22px] border-y-transparent border-l-[--accent]" />
          </div>
          <p className="relative z-10 font-ui text-[13px] tracking-[1px] text-[--muted]">Assista como a Lets!DOC opera</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
