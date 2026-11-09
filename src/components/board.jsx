export default function Board({ data }) {
  return (
    <>
      <div className="w-full overflow-x-auto">
        {data === "diary" ? (
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-around items-center gap-4">
              <img
                src="src/assets/example-card.webp"
                alt="Carta"
                className="h-80"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
            <div className="flex justify-around items-center gap-4">
              <div className="flex flex-col justify-center items-center gap-4">
                <img
                  src="src/assets/example-card.webp"
                  alt="Carta"
                  className="h-80"
                />
                <p>{data.cardTitles[0]}</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-4">
                <img
                  src="src/assets/example-card.webp"
                  alt="Carta"
                  className="h-80"
                />
                <p>{data.cardTitles[1]}</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-4">
                <img
                  src="src/assets/example-card.webp"
                  alt="Carta"
                  className="h-80"
                />
                <p>{data.cardTitles[2]}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
