import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const startReading = (readType) => {
     navigate("/reading", {
      state: { readType},
    });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Arcana</h1>
        <div
          onClick={() => navigate("/daily-card")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mt-4"
        >
          Carta do Dia
        </div>
        
        
        <div
          onClick={() => startReading("temporal")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mt-4"
        >
          Leitura Presente, Passado e Futuro
        </div>

         <div
          onClick={() => startReading("situational")}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-4"
        >
          Leitura Situacional
        </div>
      </div>
    </>
  );
}
