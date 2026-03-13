const items = [
  "MARKETING MÉDICO", "TRÁFEGO PAGO", "SOCIAL MEDIA",
  "PRODUÇÃO AUDIOVISUAL", "IDENTIDADE VISUAL", "SITES E LANDING PAGES",
];

const MarqueeSection = () => (
  <div className="overflow-hidden border-y border-[--border-color] bg-[--bg2] py-4">
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
