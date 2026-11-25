import { useNavigate } from "react-router-dom";
import Board from "../components/board";
import { useLocation } from "react-router-dom";
import { ARCANOS } from "../data/arcanos.js";

export default function Reading() {
  const navigate = useNavigate();

  const randomCards = [...ARCANOS].sort(() => Math.random() - 0.5).slice(0, 3);

  console.log(randomCards)

  const location = useLocation();
  const selectedReadType = location.state?.readType ?? null;
  if (!selectedReadType) {
    navigate("/all-cards");
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <Board type={selectedReadType} data={randomCards} />
      </div>
    </>
  );
}
