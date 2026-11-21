import { ARCANOS } from "../data/arcanos.js";

export default function AllCards() {
  return (
    <div className="flex flex-col min-h-screen max-w-300 gap-6">
      <h1 className="text-3xl font-bold text-blue-500">Todas as cartas</h1>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {ARCANOS.map((arcano) => (
          <div
            key={arcano.id}
            data={arcano}
            className="flex flex-col items-center justify-center gap-2 w-24"
          >
            <img
              src={arcano.imageCard}
              alt={arcano.nome}
              className="w-60 card-appear"
            />
            <h3 className="text-xs text-center  text-purple-800">
              {arcano.nome}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
