import { Moon, Sparkles, SunMedium } from "lucide-react";

export default function CardStack({ cards }) {
  const count = [1, 2, 3, 4, 5].slice(-cards);
  const rotations = [-12, -6, 0, 6, 12].slice(0, cards);

  return (
    <div
      className="relative min-h-95 md:min-h-125 grid place-items-center"
      aria-label="Monte de cartas ornamental"
    >
      <div className="absolute border border-purple/50 rounded-[50%] -rotate-23 w-67 h-51 md:w-98 md:h-73 shadow-2xl shadow-purple/50" />
      <div className="absolute rounded-[50%] rotate-42 w-42 h-65  md:w-62 md:h-93 shadow-2xl border border-line" />
      <div className="absolute text-gold opacity-72 top-11 md:top-16 right-[10%]">
        <Moon size={15} />
      </div>
      <div className="absolute text-gold opacity-72 left-[10%] bottom-22 md:bottom-34">
        <Sparkles size={13} />
      </div>
      <div className="absolute text-gold opacity-72 right-[18%] bottom-15 md:bottom-23">
        <SunMedium size={14} />
      </div>

      <div className="relative flex items-center justify-center h-80 w-full">
        {count.map((card, index) => {
          return (
            <img
              key={card}
              src="cards/CardBack.webp"
              alt={`Carta ${index + 1}`}
              className="absolute h-50 md:h-70 w-auto card-shuffle"
              style={{
                left: "50%",
                marginLeft: `${(index - 2) * 35}px`,
                zIndex: index,
                animationDelay: `${index * 0.5}s`,
                "--rotation": `${rotations[index]}deg`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
