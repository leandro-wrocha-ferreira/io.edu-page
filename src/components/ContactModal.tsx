"use client";

import { useState } from "react";
import { X, Sparkles, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Escola / Cursos Livres");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Olá! Meu nome é ${name}${email ? ` (${email})` : ""}. Tenho interesse na plataforma LMS White-Label io.edu para o segmento de ${projectType}. Gostaria de agendar uma demonstração!`;
    const url = getWhatsAppUrl(formattedMessage);
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl bg-slate-900/95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demonstração Guiada</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Iniciar Conversa no WhatsApp
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Preencha seus dados rápidos para direcionarmos o atendimento ideal.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Seu Nome *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Carlos Silva"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Seu E-mail (opcional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Tipo de Projeto
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="Escola / Cursos Livres">Escola / Cursos Livres</option>
              <option value="Infoproduto / Especialista">Infoproduto / Especialista</option>
              <option value="Treinamento Corporativo">Treinamento Corporativo</option>
              <option value="Faculdade / Pós-graduação">Faculdade / Pós-graduação</option>
              <option value="Outro">Outro formato</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Continuar para o WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
