import { useEffect, useState } from "react";
import CardStack from "./cardStack";

export default function Shuffle() {
  const [segundos, setSegundos] = useState(2);
  const [ativo, setAtivo] = useState(true);
  const [dealing, setDealing] = useState(true);

  useEffect(() => {
    if (!ativo) return;
    

    if (segundos <= 0) {
      setAtivo(false);
      setDealing(false)
      return;
    }

    const timer = setTimeout(() => {
      setSegundos((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [ativo, segundos]);

  return (
    <>
      <div className="grid grid-cols-1 place-content-center min-h-screen">
        <h1 className="text-3xl font-bold text-text mb-4 font-playfair min-h-10">
          {dealing ? "Respire. A resposta se aproxima.":"As cartas encontram o seu lugar."}
        </h1>
        <CardStack cards={5} />
        <p className="text-xs md:text-sm uppercase text-muted">
          Embaralhando as cartas...
        </p>
      </div>
    </>
  );
}
