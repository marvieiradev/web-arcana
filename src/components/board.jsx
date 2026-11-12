export default function Board({ type, data }) {
  console.log("Board data:", data);
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="flex items-center justify-center gap-4">
          {data.map((card, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2">
              <img src={card.cardImage} alt="Carta" className="h-80" />
              <p className="text-center text-lg text-blue-900 font-bold">
                {type.id ? type.cardTitles[index] : ""}
              </p>
              <p className="text-center">
                {card.numero} - {card.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
