import { Headphones } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center min-h-18 bg-obsidian mx-auto px-2 py-2 border-t border-line pb-2">
      <div className="w-full max-w-340 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-2 uppercase leading-0.5 text-xs md:text-sm">
      <span >© 2026 web arcana</span>
      <div className="flex items-center gap-2">
        <Headphones size={14} /> experiência sonora opcional
      </div>
      </div>
    </div>
  );
}
