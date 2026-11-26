import { Eye, Sparkles, Gem, ScrollText, BookOpenText } from "lucide-react";

export default function ReadingSynthesis({ data, quantity, readType }) {
  const allRevealed = quantity === data.length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="mt-4 m-2 md:mt-4">
        <div className="flex w-full items-center justify-between text-xs text-gold uppercase">
          <div className="flex gap-2 items-center">
            <ScrollText size={14} />{" "}
            {allRevealed ? "Visão geral da mesa" : "A mesa aguarda"}
          </div>
          <div className="flex gap-2 items-center text-muted-2">
            <span>
              {allRevealed ? "todas as cartas reveladas" : "revele uma por uma"}
            </span>
          </div>
        </div>

        <h2 className="text-lg font-bold text-white md:text-xl font-playfair text-start mt-4 mb-4">
          {allRevealed
            ? "O que se apresenta"
            : "Revele cada carta para ouvir a história"}
        </h2>

        <>
          {data.map((card, index) => {
            const isRevealed = index < quantity;
            const interpretationKey = readType.interpretationKeys[index];

            const interpretation =
              card.interpretacoes?.[interpretationKey] ??
              card.significado ??
              "Interpretação indisponível.";

            return (
              <div
                key={`${card.id}-message-${index}`}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-col bg-night/50 border border-gold/50 mb-2 p-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={isRevealed ? card.imageCard : "cards/CardBack.webp"}
                      alt="Carta"
                      className="h-20 w-12"
                    />
                    <div className="flex flex-col gap-2 items-start">
                      <span className="text-xs md:text-sm text-gold uppercase">
                        {readType.cardTitles[index]}
                      </span>
                      <span className="text-md md:text-lg font-playfair text-text">
                        {isRevealed ? card.nome : "Carta em silêncio"}
                      </span>
                      <span className="text-xs md:text-sm text-muted">
                        {isRevealed
                          ? `${card.palavrasChave[0]} · ${card.palavrasChave[1]} · ${card.palavrasChave[2]}`
                          : "Toque para revelar"}
                      </span>
                    </div>
                  </div>
                  <span className="text-start text-xs"></span>
                </div>
              </div>
            );
          })}
        </>
      </div>

      <div className="mt-4 m-2 p-4 border border-gold/50  bg-radial-[at_50%_40%] from-night to-purple/10 to-45%">
        <div className="flex w-full items-center justify-between text-xs text-gold uppercase">
          <div className="flex gap-2 items-center">
            <Sparkles size={14} />{" "}
            {allRevealed ? "Síntese da leitura" : "A mesa aguarda"}
          </div>
          <div className="flex gap-2 items-center">
            <Gem size={17} />
            <span>
              {allRevealed
                ? "leitura completa"
                : `${quantity}/${data.length} reveladas`}
            </span>
          </div>
        </div>

        <h2 className="text-lg font-bold text-white md:text-xl font-playfair text-start mt-4 mb-4">
          {allRevealed
            ? "O fio entre as cartas"
            : "Revele cada carta para ouvir a história"}
        </h2>

        {!allRevealed ? (
          <div className="flex items-center justify-center text-sm md:text-base gap-2 mt-8">
            <Eye size={19} className="text-gold" />
            <p className="text-muted">
              <em>
                A posição revela o seu significado quando você toca nela. Vá no
                seu tempo.
              </em>
            </p>
          </div>
        ) : (
          <>
            {data.map((card, index) => {
              const isRevealed = index < quantity;
              const interpretationKey = readType.interpretationKeys[index];

              const interpretation =
                card.interpretacoes?.[interpretationKey] ??
                card.significado ??
                "Interpretação indisponível.";

              return (
                <div
                  key={`${card.id}-message-${index}`}
                  className="flex flex-col"
                >
                  {isRevealed && (
                    <div className="flex flex-col py-2">
                      <span className="border border-muted-2/50 mb-2"></span>
                      <div className="flex gap-1 items-center text-gold mb-2">
                        <BookOpenText size={14} />
                        <span className="text-sm uppercase">
                          {readType.cardTitles[index]}
                        </span>
                      </div>
                      <span className="text-start text-sm">
                        {isRevealed ? interpretation : HIDDEN_CARD.message}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
