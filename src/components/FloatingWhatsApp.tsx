"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Speech bubble / Tooltip */}
      {showTooltip && (
        <div className="relative bg-white text-slate-800 text-xs px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span className="font-medium">Tire dúvidas direto no WhatsApp!</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl("Olá! Estava navegando na página do io.edu LMS e gostaria de tirar dúvidas sobre a plataforma pelo WhatsApp.")}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl glow-whatsapp transition-transform duration-300 transform group-hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Iniciar conversa no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-200 rounded-full border-2 border-white" />
      </a>
    </div>
  );
}
