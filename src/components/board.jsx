import { useState, useEffect } from "react";
import Message from "./message";
import Shuffle from "./shuffle";
import { data, Link } from "react-router-dom";

const READ_TYPES = [
  {
    id: "diary",
    title: "Leitura Diária",
    cardTitles: ["Carta do Dia"],
    interpretationKeys: ["diaria"],
  },
  {
    id: "temporal",
    title: "Passado · Presente · Futuro",
    cardTitles: ["Passado", "Presente", "Futuro"],
    interpretationKeys: ["passado", "presente", "futuro"],
  },
  {
    id: "situational",
    title: "Situação · Desafio · Conselho",
    cardTitles: ["Situação", "Desafio", "Conselho"],
    interpretationKeys: ["situacao", "desafio", "solucao"],
  },
];

const HIDDEN_CARD = {
  image: "cards/CardBack.webp",
  title: "Carta Oculta",
  message: "Esta carta está oculta. Clique para revelar.",
};

export default function Board({ type, data }) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [isShuffling, setIsShuffling] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const [quantity, setQuantity] = useState(0);

  //console.log(data)

  useEffect(() => {
    if (!isShuffling) return;

    if (countdown <= 0) {
      setIsShuffling(false);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isShuffling, countdown]);

  const readType = READ_TYPES.find((item) => item.id === type);

  if (isShuffling) {
    return <Shuffle />;
  }

  if (!readType || !Array.isArray(data)) {
    return <p>Não foi possível carregar a tiragem.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-full max-w-7xl">
        <h1 className="mb-8 text-xl font-bold text-white md:text-3xl font-playfair">
          {readType.title}
        </h1>

        <div className="mt-10 m-2 p-4 border border-gold/50  bg-radial-[at_50%_40%] from-night to-purple/10 to-45%">
          <div className="flex items-center justify-between uppercase text-xs text-muted">
            <div className="flex gap-1 justify-center items-center">
              <span className="w-2 h-2 bg-gold shadow-sm shadow-gold rounded-full" />{" "}
              mesa virtual
            </div>
            <span>
              clique para revelar · {quantity}/{data.length}
            </span>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-2">
            {data.map((card, index) => {
              const isRevealed = index < revealedCount;
              const isNext = index === revealedCount;

              return (
                <>
                  <div
                    key={`${card.id}-${index}`}
                    onClick={() => {
                      setQuantity(index + 1);
                      if (isNext) {
                        setRevealedCount((prev) =>
                          Math.min(prev + 1, data.length),
                        );
                      }
                    }}
                    className={`flex flex-col items-center justify-center gap-2 ${
                      isNext ? "cursor-pointer" : ""
                    }`}
                  >
                    <span className="mt-8 -mb-4 md:-mb-8 uppercase text-xs md:text-sm text-gold/90">
                      {readType.cardTitles[index] || `Carta ${index + 1}`}
                    </span>
                    <div className="perspective-midrange">
                      <div className="transform-[rotateX(15deg)] origin-[bottom_center]">
                        <div className="card-scene h-35 w-auto md:h-80 aspect-3/4 card-appear">
                          <div
                            className={`card-inner ${
                              isRevealed ? "is-flipped" : ""
                            }`}
                          >
                            <img
                              src={HIDDEN_CARD.image}
                              alt="Carta virada para baixo"
                              className="card-face"
                            />
                            <img
                              src={card.imageCard}
                              alt={isRevealed ? card.nome : "Carta oculta"}
                              className="card-face card-front"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <span className="text-center text-xs md:text-base text-white/90 mt-2 font-playfair">
                      {isRevealed ? `${card.nome}` : HIDDEN_CARD.title}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="mt-6 w-full">
          {data.map((card, index) => {
            const isRevealed = index < revealedCount;
            const interpretationKey = readType.interpretationKeys[index];

            const interpretation =
              card.interpretacoes?.[interpretationKey] ??
              card.significado ??
              "Interpretação indisponível.";

            return (
              <div
                key={`${card.id}-message-${index}`}
                className="flex flex-col items-center justify-center p-2"
              >
                {isRevealed && (
                  <h2 className="mb-2 font-bold text-blue-900">
                    {readType.cardTitles[index]}
                  </h2>
                )}

                <Message
                  data={isRevealed ? interpretation : HIDDEN_CARD.message}
                />
              </div>
            );
          })}
        </div>
      </div>

      {revealedCount === data.length && (
        <Link
          to="/"
          className="mt-4 rounded bg-blue-800 p-2 text-white hover:bg-blue-700"
        >
          Voltar para a página inicial
        </Link>
      )}
    </div>
  );
}
