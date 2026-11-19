import { useNavigate } from "react-router-dom";
import {
  Moon,
  Sparkles,
  SunMedium,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const startReading = (readType) => {
    navigate("/reading", {
      state: { readType },
    });
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] mt-4">
        <div className="pb-4">
          <div className="inline-flex items-center gap-2 text-gold-light uppercase text-xs tracking-[0.22em]">
            <span className="w-2 h-2 border border-gold rounded-full shadow-2xl shadow-line" />{" "}
            <span>Um espaço para escutar o invisível</span>
          </div>
          <h1 className="font-semibold font-playfair leading-22 text-start text-[clamp(52px,6.6vw,94px)] ">
            O que você
            <br />
            <em className="text-gold-light">precisa ouvir</em>
            <br />
            agora?
          </h1>
          <p className="font-sm text-muted m-0 max-w-120 mt-4">
            O tarô não dita o seu caminho. Ele acende uma lanterna para que você
            possa caminhar com mais presença.
          </p>
        </div>
        <div
          className="relative min-h-125 grid place-items-center"
          aria-label="Monte de cartas ornamental"
        >
          <div className="absolute border border-purple/50 rounded-[50%] -rotate-23 w-98 h-73 shadow-2xl shadow-purple/50" />
          <div className="absolute rounded-[50%] rotate-42 w-62 h-93 shadow-2xl border border-line" />
          <div className="absolute text-gold opacity-72 top-16.25 right-[10%]">
            <Moon size={15} />
          </div>
          <div className="absolute text-gold opacity-72 left-[10%] bottom-33.75">
            <Sparkles size={13} />
          </div>
          <div className="absolute text-gold opacity-72 right-[18%] bottom-23">
            <SunMedium size={14} />
          </div>

          <div className="relative flex items-center justify-center h-80 w-full">
            {[0, 1, 2].map((card, index) => {
              const rotations = [0, 6, 12];
              return (
                <img
                  key={card}
                  src="/cards/card-back.webp"
                  alt={`Carta ${index + 1}`}
                  className="absolute h-40 md:h-80 w-auto card-shuffle"
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
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Arcana</h1>
        <div
          onClick={() => navigate("/daily-card")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-4"
        >
          Carta do Dia
        </div>

        <div
          onClick={() => startReading("temporal")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mt-4"
        >
          Leitura Presente, Passado e Futuro
        </div>

        <div
          onClick={() => startReading("situational")}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-4"
        >
          Leitura Situacional
        </div>
      </div>
    </>
  );
}
