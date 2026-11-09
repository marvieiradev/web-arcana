import { useState } from "react";
import Board from "../components/board";
import Message from "../components/message";

export default function Reading() {
  const temporal = {
    readingType: "three-cards",
    title: "Presente, Passado e Futuro",
    message:
      " Esta é a leitura de 3 cartas. Ela traz uma mensagem especial para você. Aproveite a leitura e reflita sobre o significado destas cartas em sua vida.",
    cardTitles: ["Presente", "Passado", "Futuro"],
  };

  const situational = {
    readingType: "three-cards",
    title: "Situação, Desafio e Conselho",
    message:
      "Esta é a leitura de 3 cartas. Ela traz uma mensagem especial para você. Aproveite a leitura e reflita sobre o significado destas cartas em sua vida.",
    cardTitles: ["Situação", "Desafio", "Conselho"],
  };

  const [readType, setReadType] = useState(null);

  return (
    <>
      {readType === null && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Escolha o tipo de leitura</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setReadType(temporal)}
          >
            Presente, Passado e Futuro
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
            onClick={() => setReadType(situational)}
          >
            Situação, Desafio e Conselho
          </button>
        </div>
      )}
      {readType !== null && (
        <div className="flex flex-col items-center justify-center h-screen gap-8">
          <Board data={readType} />
          <Message data={"Lorem20 ipsum dolor sit amet"} />
        </div>
      )}
    </>
  );
}
