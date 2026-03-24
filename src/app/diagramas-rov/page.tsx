"use client";

import React, { useState } from "react";
import { DiagramHydraulicRov } from "@/components/diagrams/DiagramHydraulicRov";
import { DiagramElectricalFiber } from "@/components/diagrams/DiagramElectricalFiber";
import { AcronymsPanel } from "@/components/diagrams/AcronymsPanel";
import { MemoryTrainingPanel } from "@/components/diagrams/MemoryTrainingPanel";

type Tab = "hidraulica" | "eletrica" | "siglas" | "treino";

export default function DiagramasROVPage() {
  const [activeTab, setActiveTab] = useState<Tab>("hidraulica");

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
          Diagramas em Blocos ROV
        </h1>
        <p className="text-slate-600 mt-2 text-lg">
          Material visual fiel para estudo e memorização técnica.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 bg-slate-100 p-1.5 rounded-xl border border-slate-200 fit-content">
        <button
          onClick={() => setActiveTab("hidraulica")}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
            activeTab === "hidraulica"
              ? "bg-white text-blue-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
          }`}
        >
          Diagrama Hidráulica
        </button>
        <button
          onClick={() => setActiveTab("eletrica")}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
            activeTab === "eletrica"
              ? "bg-white text-blue-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
          }`}
        >
          Elétrica e Fibra
        </button>
        <button
          onClick={() => setActiveTab("siglas")}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
            activeTab === "siglas"
              ? "bg-white text-blue-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
          }`}
        >
          Siglas e Traduções
        </button>
        <button
          onClick={() => setActiveTab("treino")}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
            activeTab === "treino"
              ? "bg-blue-600 text-white shadow-sm border border-blue-700 hover:bg-blue-700"
              : "text-blue-700 hover:bg-blue-200/50 bg-blue-50"
          }`}
        >
          Modo Treino / Memorização
        </button>
      </div>

      {/* Content Area */}
      <div className="w-full">
        {activeTab === "hidraulica" && (
          <div className="animate-in fade-in">
            <DiagramHydraulicRov hideLabels={false} hideLines={false} />
          </div>
        )}

        {activeTab === "eletrica" && (
          <div className="animate-in fade-in">
            <DiagramElectricalFiber hideLabels={false} hideLines={false} />
          </div>
        )}

        {activeTab === "siglas" && <AcronymsPanel />}

        {activeTab === "treino" && <MemoryTrainingPanel />}
      </div>
    </div>
  );
}
