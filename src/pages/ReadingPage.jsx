import { useNavigate } from "react-router-dom";
import Board from "../components/board";
import Message from "../components/message";
import { useLocation } from "react-router-dom";
import { ARCANOS_MAIORES } from "../data/arcanos.js";

export default function Reading() {
  const navigate = useNavigate();
  const randomCards = [...ARCANOS_MAIORES]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const location = useLocation();
  const selectedReadType = location.state?.readType ?? null;
  if (!selectedReadType) {
    navigate("/all-cards");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <Board type={selectedReadType} data={randomCards} />
      </div>
    </>
  );
}
