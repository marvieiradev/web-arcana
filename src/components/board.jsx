/*import { useState, useEffect } from "react";
import Message from "./message";
import Shuffle from "./shuffle";
import { Link } from "react-router-dom";

export default function Board({ type, data }) {
  const [revealedCount, setRevealedCount] = useState(0);
  const [isShuffling, setIsShuffling] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!isShuffling) return;

    if (countdown === 0) {
      setIsShuffling(false);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isShuffling, countdown]);

  const readTypes = [
    {
      id: "diary",
      title: "Leitura Diária",
      cardTitles: ["Carta do Dia"],
    },
    {
      id: "temporal",
      title: "Presente, Passado e Futuro",
      cardTitles: ["Presente", "Passado", "Futuro"],
    },
    {
      id: "situational",
      title: "Situação, Desafio e Conselho",
      cardTitles: ["Situação", "Desafio", "Conselho"],
    },
  ];

  const ocultedCard = {
    image: "cards/card-back.webp",
    title: "Carta Oculta",
    message: "Esta carta está oculta clique para revelar.",
  };

  const readType = readTypes.find((item) => item.id === type);

  if (isShuffling) {
    return <Shuffle />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-full overflow-x-auto gap-2">
        <h1 className="text-xl md:text-3xl font-bold text-blue-500 mb-8">
          {readType?.title}
        </h1>
        <div className="flex items-center justify-center gap-4">
          {data.map((card, index) => {
            const isRevealed = index < revealedCount;
            return (
              <div
                key={index}
                onClick={() => setRevealedCount((prev) => prev + 1)}
                className={`flex flex-col items-center justify-center gap-2 ${
                  index === revealedCount ? "cursor-pointer" : ""
                }`}
              >
                <div className="flex items-center justify-center relative">
                  <img
                    src={isRevealed ? card.cardImage : ocultedCard.image}
                    alt="Carta"
                    className="h-40 md:h-80 card-appear"
                  />
                </div>
                <p className="text-center text-base md:text-lg text-blue-900 font-bold">
                  {readType?.cardTitles[index] || ""}
                </p>
                <p className="text-center text-sm md:text-base">
                  {isRevealed
                    ? `${card.numero} - ${card.nome}`
                    : ocultedCard.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-4">
          {data.map((card, index) => {
            const isRevealed = index < revealedCount;
            return (
              <div
                key={index}
              className="flex flex-col items-center justify-center p-2"
            >
              <Message
                data={isRevealed ? card.significado : ocultedCard.message}
              />
            </div>
          );
        })}
        </div>
      </div>
      {revealedCount === data.length && (
        <Link
          to="/"
          className="mt-4 text-white bg-blue-800 p-2 rounded hover:bg-blue-700"
        >
          Voltar para a página inicial
        </Link>
      )}
    </div>
  );
}*/

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
    title: "Presente, Passado e Futuro",
    cardTitles: ["Presente", "Passado", "Futuro"],
    interpretationKeys: ["presente", "passado", "futuro"],
  },
  {
    id: "situational",
    title: "Situação, Desafio e Conselho",
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
      <div className="w-full">
        <h1 className="mb-8 text-xl font-bold text-blue-500 md:text-3xl">
          {readType.title}
        </h1>

        <div className="flex flex-wrap items-start justify-center gap-4">
          {data.map((card, index) => {
            const isRevealed = index < revealedCount;
            const isNext = index === revealedCount;

            return (
              <div
                key={`${card.id}-${index}`}
                onClick={() => {
                  if (isNext) {
                    setRevealedCount((prev) => Math.min(prev + 1, data.length));
                  }
                }}
                className={`flex flex-col items-center justify-center gap-2 ${
                  isNext ? "cursor-pointer" : ""
                }`}
              >
                <div className="perspective-midrange">
                  <div className="transform-[rotateX(25deg)] origin-[bottom_center]">
                    <div className="card-scene h-40 w-auto md:h-80 aspect-2/3 card-appear">
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

                <p className="text-center text-base font-bold text-blue-900 md:text-lg">
                  {readType.cardTitles[index] || `Carta ${index + 1}`}
                </p>

                <p className="text-center text-sm md:text-base">
                  {isRevealed ? `${card.nome}` : HIDDEN_CARD.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6">
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
