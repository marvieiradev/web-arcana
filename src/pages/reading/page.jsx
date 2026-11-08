import { useState } from "react";
import Board from "../../components/board";
import Message from "../../components/message";

export default function Reading() {
    const data = {
        readingType: "diary",
        message: "Esta é uma mensagem de exemplo."
    };

    const [readType, setReadType] = useState(null);

    return(
        <>
        {readType === null && (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold mb-4">Escolha o tipo de leitura</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setReadType("diary")}>
                    Carta do dia
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2" onClick={() => setReadType("three")}>
                    Leitura de 3 cartas
                </button>
            </div>
        )}
        {readType !== null && (
            <>
            <div className="text-blue-600">Reading</div>
            <Board data={readType} />
            <Message data={"Lorem20 ipsum dolor sit amet"} />
            </>
        )}
        </>
    )
}