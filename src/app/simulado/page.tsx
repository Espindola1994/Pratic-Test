"use client";

import { useState } from "react";
import { allStudyItems, categories } from "@/data/study-data";
import { StudyItem, UserProgress } from "@/types/study";
import { updateItemProgress } from "@/lib/progress";
import { CheckCircle2, Play, RotateCcw, ArrowLeft, ArrowRight } from "lucide-react";

export default function SimuladoPage() {
  const [started, setStarted] = useState(false);
  const [items, setItems] = useState<StudyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);
  
  // Settings for the simulation
  const [simType, setSimType] = useState<"geral" | "aleatorio" | "dificeis" | "categoria">("geral");
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  
  // Results
  const [answered, setAnswered] = useState(0);

  const startSimulation = () => {
    let selected = [...allStudyItems];
    
    if (simType === "aleatorio") {
      selected = selected.sort(() => 0.5 - Math.random()).slice(0, 30); // 30 random questions
    } else if (simType === "dificeis") {
      const savedData = localStorage.getItem("rov_study_progress");
      if (savedData) {
        const progress: UserProgress[] = JSON.parse(savedData);
        const difficultIds = progress.filter(p => p.difficult).map(p => p.studyItemId);
        selected = selected.filter(str => difficultIds.includes(str.id));
      } else {
        selected = [];
      }
    } else if (simType === "categoria") {
      selected = selected.filter(item => item.category === selectedCategory);
    }
    
    // For geral and categoria, optionally shuffle to make it a test
    if (simType === "geral" || simType === "categoria") {
      selected = selected.sort(() => 0.5 - Math.random());
    }

    setItems(selected);
    setCurrentIndex(0);
    setAnswered(0);
    setFinished(false);
    setShowAnswer(false);
    setStarted(true);
  };

  const handleNext = () => {
    const currentItem = items[currentIndex];
    
    updateItemProgress(currentItem.id, {
      reviewed: true
    });
    
    setAnswered(prev => prev + 1);

    if (currentIndex < items.length - 1) {
      setShowAnswer(false);
      setCurrentIndex(c => c + 1);
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setShowAnswer(false);
      setCurrentIndex(c => c - 1);
    }
  };

  const restart = () => {
    setStarted(false);
    setFinished(false);
  };

  if (!started) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl text-center">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Play className="w-8 h-8 ml-1" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 mb-4">Configurar Simulado</h1>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            Teste seus conhecimentos. Apenas responda mentalmente e avalie seu desempenho sem pegadinhas.
          </p>

          <div className="flex flex-col gap-4 text-left max-w-sm mx-auto mb-8">
            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
              <input type="radio" name="simType" value="geral" checked={simType === "geral"} onChange={() => setSimType("geral")} className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
              <span className="font-medium text-slate-800">Geral (Todo o conteúdo)</span>
            </label>
            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
              <input type="radio" name="simType" value="aleatorio" checked={simType === "aleatorio"} onChange={() => setSimType("aleatorio")} className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
              <span className="font-medium text-slate-800">30 Aleatórias</span>
            </label>
            <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
              <input type="radio" name="simType" value="dificeis" checked={simType === "dificeis"} onChange={() => setSimType("dificeis")} className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
              <span className="font-medium text-slate-800">Apenas Difíceis (marcadas)</span>
            </label>
            <div className={`p-4 border rounded-xl transition-colors ${simType === "categoria" ? "bg-slate-50 border-blue-200" : ""}`}>
              <label className="flex items-center gap-3 cursor-pointer mb-2">
                <input type="radio" name="simType" value="categoria" checked={simType === "categoria"} onChange={() => setSimType("categoria")} className="w-5 h-5 text-blue-600 focus:ring-blue-500" />
                <span className="font-medium text-slate-800">Por Categoria</span>
              </label>
              {simType === "categoria" && (
                <select 
                  className="w-full mt-2 p-2 border border-slate-300 rounded-lg text-sm bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              )}
            </div>
          </div>

          <button 
            onClick={startSimulation}
            className="w-full max-w-sm mx-auto bg-blue-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-200"
          >
            Começar Simulado
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Nenhuma questão encontrada</h2>
        <p className="text-slate-600 mb-8">Tente escolher outro modo de simulado.</p>
        <button onClick={restart} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
          Voltar
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Modo Concluído!</h1>
          <p className="text-slate-600 mb-8">
            Você passou por <strong className="text-slate-800">{items.length}</strong> questões no total.
          </p>

          <button onClick={restart} className="flex items-center justify-center gap-2 w-full bg-slate-800 text-white font-bold text-lg py-4 rounded-xl hover:bg-slate-900 transition mb-4">
            <RotateCcw className="w-5 h-5" /> Fazer Nova Sessão
          </button>
        </div>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-slate-800">
          Questão {currentIndex + 1} <span className="text-slate-400 font-medium">de {items.length}</span>
        </h1>
        <button onClick={restart} className="text-sm text-slate-500 hover:text-slate-800 transition">
          Sair
        </button>
      </div>

      <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
        />
      </div>

      <div className="bg-white rounded-3xl p-8 min-h-[300px] flex flex-col justify-center shadow-lg border border-slate-200 mb-6">
        <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
          {currentItem.category}
        </span>
        <h2 className="text-2xl md:text-3xl text-slate-800 font-bold leading-relaxed mb-8">
          {currentItem.question}
        </h2>

        {!showAnswer ? (
          <button 
            onClick={() => setShowAnswer(true)}
            className="mt-auto py-4 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 font-bold text-lg hover:bg-blue-100 transition"
          >
            Mostrar Resposta
          </button>
        ) : (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
              <p className="text-xl text-slate-700 font-medium">
                {currentItem.answer}
              </p>
            </div>
            
            <div className="flex justify-between items-center gap-4 mt-8">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex-1 flex justify-center items-center gap-2 py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ArrowLeft className="w-5 h-5" /> Anterior
              </button>
              
              <button 
                onClick={handleNext}
                className="flex-1 flex justify-center items-center gap-2 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-md shadow-blue-200"
              >
                {currentIndex === items.length - 1 ? "Finalizar" : "Próxima"} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
