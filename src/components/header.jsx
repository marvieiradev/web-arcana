import { useState } from "react";
import { Link } from "react-router-dom";
import { Volume2, VolumeX, CircleHelp } from "lucide-react";

export default function Header() {
  const [soundOn, setSoundOn] = useState(true);

  return (
    <div className="w-full flex items-center justify-center min-h-21 bg-obsidian mx-auto px-4 py-2 border-b border-line pb-2">
      <div className="w-full max-w-340 flex items-center justify-between gap-4 text-text">
        <Link to="/" className="">
          <div className="flex justify-center items-center gap-2 cursor-pointer hover:scale-105">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-semibold text-lg">
              web <em className="text-gold-light ">arcana</em>
            </span>
          </div>
        </Link>
        <div className="hidden md:flex items-center text-sm text-muted-2 justify-center gap-2  uppercase">
          <span className="w-2 h-2 bg-gold shadow-sm shadow-gold rounded-full" />
          <span className="text-xs">
            uma leitura para este momento
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            className="flex items-center gap-2 text-sm uppercase hover:text-gold-light cursor-pointer"
            onClick={() => setSoundOn((value) => !value)}
            aria-label={
              soundOn ? "Desligar feedback sonoro" : "Ligar feedback sonoro"
            }
          >
            {soundOn ? (
              <>
                <Volume2 size={15} />
                <span className="hidden md:block">som ligado</span>
              </>
            ) : (
              <>
                <VolumeX size={15} />
                <span className="hidden md:block">som desligado</span>
              </>
            )}
          </button>
          <button
            className="hover:text-gold-light cursor-pointer"
            aria-label="Sobre o Arcana"
          >
            <CircleHelp size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
