import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Arcana</h1>
        <Link
          to="/daily-card"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Carta do Dia
        </Link>
        <Link
          to="/reading"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition mt-4"
        >
          Leitura
        </Link>
      </div>
    </>
  );
}
