import Board from "../components/board";
import Message from "../components/message";
import { ARCANOS_MAIORES } from "../data/arcanos.js";

export default function DailyCard() {
  const randomIndex = Math.floor(Math.random() * ARCANOS_MAIORES.length);
  const randomCard = [ARCANOS_MAIORES[randomIndex]];

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <Board type="diary" data={randomCard} />
    </div>
  );
}
