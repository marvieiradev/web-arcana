import { ArrowRight } from "lucide-react";

export default function ReadingMode({ onSelect, mode }) {
  //const mode = spreads[modeKey];
  const Icon = mode.icon;
  return (
    <button
      type="button"
      className="min-h-55 min-w-80 relative text-left p-4 border border-gray-700 cursor-pointer
      bg-linear-to-b from-purple/10 to-purple/30 hover:border-gold/50 hover:-translate-1 ease -mt-2"
      onClick={() => onSelect()}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-center w-8 h-8 text-gold-light border border-gold/50 rounded-[50%]">
          <Icon size={17} strokeWidth={1.7} />
        </span>
        <span className="text-xs text-muted uppercase tracking-[0.14em]">
          {mode.count} {mode.count === 1 ? "carta" : "cartas"}
        </span>
      </div>
      <span className="block text-gold-light uppercase text-xs tracking-[0.18em] mt-4">
        {mode.eyebrow}
      </span>
      <strong className="font-playfair text-lg">{mode.title}</strong>
      <span className="block text-muted text-sm mt-4 max-w-70">
        {mode.description}
      </span>
      <span className="flex items-center justify-end mt-4 gap-2 text-gold-light text-sm uppercase tracking-[0.12em]">
        Escolher tiragem <ArrowRight size={14} />
      </span>
    </button>
  );
}
