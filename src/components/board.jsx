import Message from "./message";
export default function Board({ type, data }) {
  const readTypes = [
    {
      id: "diary",
      title: "Leitura do Dia",
      cardTitles: [""],
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

  const readType = readTypes.find((item) => item.id === type);
  console.log("readType:", readType);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-full overflow-x-auto gap-2">
        <h1 className="text-3xl font-bold text-blue-500 mb-8">
          {readType?.title}
        </h1>
        <div className="flex items-center justify-center gap-4">
          {data.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img src={card.cardImage} alt="Carta" className="h-80" />
              <p className="text-center text-lg text-blue-900 font-bold">
                {readType?.cardTitles[index] || ""}
              </p>
              <p className="text-center">
                {card.numero} - {card.nome}
              </p>
            </div>
          ))}
        </div>

        {data.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mt-2"
          >
            <Message data={card.significado} />
          </div>
        ))}
      </div>
    </div>
  );
}
