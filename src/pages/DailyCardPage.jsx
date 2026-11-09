import Board from "../components/board";
import Message from "../components/message";

export default function DailyCard() {
    return(
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <h1 className="text-3xl font-bold text-blue-500">Carta do dia</h1>
            <Board data="diary"/>
            <Message data="Esta é a carta do dia. Ela traz uma mensagem especial para você. Aproveite a leitura e reflita sobre o significado desta carta em sua vida."/>
        </div>
    )
}