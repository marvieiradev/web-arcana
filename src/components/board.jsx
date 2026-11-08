export default function Board({ data }) {
    return (
        <>
        <div className="w-full overflow-x-auto">
            {data === "diary" ? (<p>Carta do dia</p>):(<p>Leitura de 3 cartas</p>)}
        </div>
        </>
    )
}