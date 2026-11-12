import { useState } from "react";
import Board from "../components/board";
import Message from "../components/message";
import { ARCANOS_MAIORES } from "../data/arcanos.js";

export default function Reading() {
  const randomCards = [...ARCANOS_MAIORES]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const [selectedReadType, setSelectedReadType] = useState(null);
  const readTypes = [
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

  if (selectedReadType) {
    const randomCards = [...ARCANOS_MAIORES]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }

  return (
    <>
      {selectedReadType === null && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Escolha o tipo de leitura</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setSelectedReadType(readTypes[0])}
          >
            Presente, Passado e Futuro
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
            onClick={() => setSelectedReadType(readTypes[1])}
          >
            Situação, Desafio e Conselho
          </button>
        </div>
      )}
      {selectedReadType !== null && (
        <div className="flex flex-col items-center justify-center h-screen gap-8">
          <h1 className="text-3xl font-bold text-blue-500">{selectedReadType.title}</h1>
          <Board type={selectedReadType} data={randomCards} />
          <Message data={"Esta é a leitura de 3 cartas. Ela traz uma mensagem especial para você. Aproveite a leitura e reflita sobre o significado destas cartas em sua vida."} />
        </div>
      )}
    </>
  );
}
