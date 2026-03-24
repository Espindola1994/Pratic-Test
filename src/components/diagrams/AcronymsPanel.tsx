"use client";

import React from "react";

const acronyms = [
  { term: "VESSEL", full: "Navio", translation: "Embarcação ou base de suporte na superfície." },
  { term: "PDU", full: "Power Distribution Unit", translation: "Unidade de Distribuição de Energia." },
  { term: "OCU", full: "Operation Control Unit", translation: "Unidade de Controle de Operação." },
  { term: "HVTU", full: "High Voltage Transformer Unit", translation: "Unidade Transformadora de Alta Tensão." },
  { term: "HVJB", full: "High Voltage Junction Box", translation: "Caixa de Junção de Alta Tensão." },
  { term: "INST", full: "Instrumentação", translation: "Conjunto de sensores magnéticos/acústicos e afins." },
  { term: "HPU", full: "Hydraulic Power Unit", translation: "Unidade de Força Hidráulica." },
  { term: "TRAFO", full: "Transformer", translation: "Transformador (ou HVTU em alta tensão)." },
  { term: "FJB", full: "Fixed Junction Box", translation: "Caixa de Junção Fixa." },
  { term: "RJB", full: "Rotary Junction Box", translation: "Caixa de Junção Rotativa." },
  { term: "SR", full: "Slip Ring", translation: "Anel Coletor de sinais/força mecânica-rotativa." },
  { term: "HCU", full: "Hydraulic Control Unit", translation: "Unidade de Controle Hidráulico." },
  { term: "TCU", full: "Thruster Control Unit", translation: "Unidade de Controle de Propulsores." },
  { term: "JB", full: "Junction Box", translation: "Caixa de Junção genérica." },
  { term: "LPT", full: "Low Pressure Transducer (aprox)", translation: "Sigla de transdutor presente no diagrama original." },
  { term: "UPT", full: "Upper Pressure Transducer (aprox)", translation: "Sigla de transdutor presente no diagrama original." },
  { term: "TOOL", full: "Tooling / Ferramenta", translation: "Blocos de uso de ferramentas externas." },
  { term: "COMP", full: "Compensator", translation: "Cilindro Compensador Hidráulico." },
  { term: "TMS", full: "Tether Management System", translation: "Sistema de Gerenciamento do Tether (cabo que liga ao ROV)." },
  { term: "TETHER", full: "Tether Cargo", translation: "Cabo flexível que conecta o TMS ao ROV." },
  { term: "DECK CABLE", full: "Deck Cable", translation: "Cabo de convés." },
];

export function AcronymsPanel() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4">Siglas e Traduções</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {acronyms.map((item, idx) => (
          <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-blue-700 text-lg">{item.term}</span>
            </div>
            <p className="font-semibold text-slate-800 text-sm mb-1">{item.full}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{item.translation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
