import { useNavigate } from "react-router-dom";
import { Moon, Sparkles, SunMedium, Clock3, Wand2 } from "lucide-react";
import ReadingMode from "../components/readingMode";

export default function Home() {
  const navigate = useNavigate();
  const modes = {
    daily: {
      eyebrow: "Foco rápido",
      title: "Carta do Dia",
      description:
        "Uma única carta para iluminar a energia que caminha com você hoje.",
      count: 1,
      positions: ["Energia de hoje"],
      icon: SunMedium,
    },
    journey: {
      eyebrow: "Linha do tempo",
      title: "Passado · Presente · Futuro",
      description:
        "Uma leitura em três atos para entender o fio invisível da sua jornada.",
      count: 3,
      positions: ["Passado", "Presente", "Futuro"],
      icon: Clock3,
    },
    challenge: {
      eyebrow: "Clareza prática",
      title: "Situação & Desafio",
      description:
        "Veja o que está acontecendo, qual movimento fazer e onde isso pode levar.",
      count: 3,
      positions: ["O Problema", "A Ação Recomendada", "O Resultado Provável"],
      icon: Wand2,
    },
  };

  const startReading = (readType) => {
    navigate("/reading", {
      state: { readType },
    });
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] mt-2">
        <div className="p-2 pb-4 mt-2">
          <div className="flex items-center justify-center md:justify-start gap-2 text-gold-light uppercase md:tracking-[0.22em] mb-4">
            <span className="w-2 h-2 border border-gold rounded-full shadow-2xl shadow-line" />{" "}
            <span className="text-xs">
              Um espaço para escutar o invisível
            </span>
          </div>
          <h1 className="font-semibold font-playfair leading-12 md:leading-22 text-center md:text-start text-[clamp(52px,5vw,94px)]">
            O que você
            <br />
            <em className="text-gold-light">precisa ouvir</em>
            <br />
            agora?
          </h1>
          <p className="text-sm text-muted p-2 w-full md:max-w-120 mt-6">
            O tarô não dita o seu caminho. Ele acende uma lanterna para que você
            possa caminhar com mais presença.
          </p>
        </div>
        <div
          className="relative min-h-95 md:min-h-125 grid place-items-center"
          aria-label="Monte de cartas ornamental"
        >
          <div className="absolute border border-purple/50 rounded-[50%] -rotate-23 w-67 h-51 md:w-98 md:h-73 shadow-2xl shadow-purple/50" />
          <div className="absolute rounded-[50%] rotate-42 w-42 h-65  md:w-62 md:h-93 shadow-2xl border border-line" />
          <div className="absolute text-gold opacity-72 top-11 md:top-16 right-[10%]">
            <Moon size={15} />
          </div>
          <div className="absolute text-gold opacity-72 left-[10%] bottom-22 md:bottom-33.75">
            <Sparkles size={13} />
          </div>
          <div className="absolute text-gold opacity-72 right-[18%] bottom-15 md:bottom-23">
            <SunMedium size={14} />
          </div>

          <div className="relative flex items-center justify-center h-80 w-full">
            {[0, 1, 2].map((card, index) => {
              const rotations = [0, 6, 12];
              return (
                <img
                  key={card}
                  src="/card-hero.webp"
                  alt={`Carta ${index + 1}`}
                  className="absolute h-55 md:h-75 w-auto card-shuffle"
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
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-8">
        <ReadingMode
          mode={modes.daily}
          onSelect={() => navigate("/daily-card")}
        />

        <ReadingMode
          mode={modes.journey}
          onSelect={() => startReading("temporal")}
        />

        <ReadingMode
          mode={modes.challenge}
          onSelect={() => startReading("situational")}
        />
      </section>
    </>
  );
}
