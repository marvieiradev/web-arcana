import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-full overflow-x-auto bg-black text-white border border-background rounded-lg p-4 flex">
        <div className="w-full flex items-center justify-around space-x-4">
            <Link to="/" className="text-white hover:text-gray-400">
                <h1 className="text-2xl font-bold">Arcana</h1>
            </Link>
            <Link to="/daily-card" className="text-white hover:text-gray-400">Carta do Dia</Link>
            <Link to="/reading" className="text-white hover:text-gray-400 ml-4">Leitura</Link>
        </div>
      </div>
    </>
  );
}
