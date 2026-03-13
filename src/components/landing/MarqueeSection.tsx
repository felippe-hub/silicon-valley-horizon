const items = [
  "MARKETING MÉDICO", "TRÁFEGO PAGO", "SOCIAL MEDIA",
  "PRODUÇÃO AUDIOVISUAL", "IDENTIDADE VISUAL", "SITES E LANDING PAGES",
];

const MarqueeSection = () => (
  <div className="relative overflow-hidden border-y border-[--border-color] bg-[--bg2] py-4">
    {/* Gradient fade edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[--bg2] to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[--bg2] to-transparent" />
    <div className="marquee-animate flex w-max gap-14 whitespace-nowrap">
      {[...items, ...items].map((txt, i) => (
        <span key={i} className="flex items-center gap-14">
          <span className="font-display text-xl tracking-[5px] text-[--dim]">{txt}</span>
          <span className="font-ui text-xs font-bold text-[--accent]">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeSection;
