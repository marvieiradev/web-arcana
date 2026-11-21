import Board from "../components/board";
import { ARCANOS } from "../data/arcanos.js";

export default function DailyCard() {
  const randomIndex = Math.floor(Math.random() * ARCANOS.length);
  const randomCard = [ARCANOS[randomIndex]];

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <Board type="diary" data={randomCard} />
    </div>
  );
}
