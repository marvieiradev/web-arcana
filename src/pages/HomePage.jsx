import { useNavigate } from "react-router-dom";
import { Moon, Sparkles, SunMedium, Clock3, Wand2 } from "lucide-react";
import ReadingMode from "../components/readingMode";
import CardStack from "../components/cardStack";

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
        <CardStack cards={3}/>
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
