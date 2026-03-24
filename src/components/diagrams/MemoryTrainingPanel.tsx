"use client";

import React, { useState } from "react";
import { DiagramHydraulicRov } from "./DiagramHydraulicRov";
import { DiagramElectricalFiber } from "./DiagramElectricalFiber";

export function MemoryTrainingPanel() {
  const [hideLabels, setHideLabels] = useState(false);
  const [hideLines, setHideLines] = useState(false);
  const [showTips, setShowTips] = useState(false);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in">
      {/* Toolbox */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold mb-4 text-slate-800">Controles de Treino</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => setHideLabels(!hideLabels)}
            className="px-4 py-2 border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {hideLabels ? "Mostrar Siglas" : "Ocultar Siglas"}
          </button>
          <button
            onClick={() => setHideLines(!hideLines)}
            className="px-4 py-2 border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {hideLines ? "Mostrar Conexões" : "Ocultar Conexões"}
          </button>
          
          <button
            onClick={() => {
              setHideLabels(true);
              setHideLines(true);
            }}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl font-bold hover:bg-blue-200 transition-colors"
          >
            Modo Prova (Apagar Tudo)
          </button>

          <button
            onClick={() => {
              setHideLabels(false);
              setHideLines(false);
            }}
            className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
          >
            Revelar Respostas
          </button>
        </div>

        <button 
          onClick={() => setShowTips(!showTips)}
          className="text-sm font-bold text-blue-600 hover:underline"
        >
          {showTips ? "Esconder dicas" : "Ver checklist e dicas de memorização..."}
        </button>

        {showTips && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-xl flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h4 className="font-bold text-blue-900 mb-2">Checklist de Memorização:</h4>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Memorizar os blocos da esquerda para a direita.</li>
                <li>Memorizar as ligações por sua cor associada (Alta Voltagem, Fibra, etc).</li>
                <li>Memorizar as posições exatas das siglas.</li>
                <li>Saber preencher a legenda fielmente.</li>
                <li>Memorizar a divisão Horizontal (Surface / Subsea).</li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-emerald-900 mb-2">Como decorar rápido:</h4>
              <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
                <li>1º Memorize a quantidade e as caixas em branco.</li>
                <li>2º Pense nas cores das linhas unindo elas.</li>
                <li>3º Depois decore o sentido/direção das conexões.</li>
                <li>4º Preencha as siglas mentalmente pelas caixas.</li>
                <li>5º Oculte tudo com o &quot;Modo Prova&quot; e desenhe num papel.</li>
              </ol>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-12">
        <DiagramHydraulicRov hideLabels={hideLabels} hideLines={hideLines} />
        <DiagramElectricalFiber hideLabels={hideLabels} hideLines={hideLines} />
      </div>
    </div>
  );
}
