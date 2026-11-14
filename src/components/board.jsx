import { useState, useEffect } from "react";
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
        <h1 className="text-3xl font-bold text-blue-500 mb-8">
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
                    className="h-80 card-board-appear"
                  />
                </div>
                <p className="text-center text-lg text-blue-900 font-bold">
                  {readType?.cardTitles[index] || ""}
                </p>
                <p className="text-center">
                  {isRevealed
                    ? `${card.numero} - ${card.nome}`
                    : ocultedCard.title}
                </p>
              </div>
            );
          })}
        </div>

        {data.map((card, index) => {
          const isRevealed = index < revealedCount;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-2"
            >
              <Message
                data={isRevealed ? card.significado : ocultedCard.message}
              />
            </div>
          );
        })}
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
}
