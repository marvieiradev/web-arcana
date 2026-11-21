export default function Shuffle() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-blue-500 mb-8">
        Embaralhando as cartas...
      </h1>
      <div className="relative flex items-center justify-center h-80 w-full">
        {[0, 1, 2, 3, 4].map((card, index) => {
          const rotations = [-12, -6, 0, 6, 12];
          return (
            <img
              key={card}
              src="cards/CardBack.webp"
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
  );
}
