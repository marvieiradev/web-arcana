import { ARCANOS_MAIORES } from "../data/arcanos.js";

export default function AllCards() {
  return (
    <div className="flex flex-col min-h-screen max-w-300 gap-6">
      <h1 className="text-3xl font-bold text-blue-500">Todas as cartas</h1>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {ARCANOS_MAIORES.map((arcano) => (
          <div key={arcano.id} data={arcano} className="flex flex-col items-center justify-center gap-2 w-24">
            <div
              className="w-20 h-30 p-4 text-purple-400 mb-3 bg-purple-100 rounded-md flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: arcano.iconSvg }}
            />
            <h2 className="text-sm text-center font-serif text-purple-800">{arcano.numero}</h2>
            <h3 className="text-xs text-center font-serif text-purple-800">{arcano.nome}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
