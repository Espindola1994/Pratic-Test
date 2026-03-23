"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { allStudyItems } from "@/data/study-data";
import { StudyItem, UserProgress } from "@/types/study";
import { getProgress, updateItemProgress } from "@/lib/progress";
import { ArrowLeft, ArrowRight, RotateCw, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense } from "react";

function FlashcardsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const mode = searchParams.get("mode"); // difficult, review, random20, unreviewed

  const [items, setItems] = useState<StudyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progressData, setProgressData] = useState<Record<string, UserProgress>>({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let filtered = [...allStudyItems];
    const savedProgress = getProgress();
    const progressMap = savedProgress.reduce((acc, p) => ({ ...acc, [p.studyItemId]: p }), {} as Record<string, UserProgress>);
    setProgressData(progressMap);

    if (category) {
      filtered = filtered.filter(item => item.category === category);
    } else if (mode === "difficult") {
      filtered = filtered.filter(item => progressMap[item.id]?.difficult);
    } else if (mode === "review") {
      filtered = filtered.filter(item => progressMap[item.id]?.reviewLater);
    } else if (mode === "unreviewed") {
      filtered = filtered.filter(item => !progressMap[item.id]?.reviewed);
    } else if (mode === "random20") {
      filtered = filtered.sort(() => 0.5 - Math.random()).slice(0, 20);
    }

    setItems(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
    setFinished(false);
  }, [category, mode]);

  const currentItem = items[currentIndex];

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(c => c + 1), 150);
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(c => c - 1), 150);
    }
  };

  const toggleAction = (action: "reviewed" | "difficult" | "reviewLater") => {
    if (!currentItem) return;
    
    const currentStatus = progressData[currentItem.id]?.[action] || false;
    const newStatus = !currentStatus;
    
    updateItemProgress(currentItem.id, { [action]: newStatus });
    
    setProgressData(prev => ({
      ...prev,
      [currentItem.id]: {
        ...prev[currentItem.id],
        [action]: newStatus
      } as UserProgress
    }));
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Nenhum flashcard encontrado</h2>
        <p className="text-slate-600 mb-8">Não há itens correspondentes aos filtros selecionados.</p>
        <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
          Voltar ao Início
        </Link>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-12 text-center">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 mb-4">Sessão Concluída!</h1>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            Você passou por todas as <strong className="text-slate-800">{items.length}</strong> perguntas desta seleção.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setCurrentIndex(0);
                setIsFlipped(false);
                setFinished(false);
              }}
              className="px-6 py-3 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Revisar Novamente
            </button>
            <Link 
              href="/"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentProgress = progressData[currentItem?.id];
  const hasSelection = currentProgress?.reviewed || currentProgress?.difficult || currentProgress?.reviewLater;

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Flashcards</h1>
          <p className="text-sm text-slate-500">
            {category ? `Categoria: ${category}` : mode ? `Modo: ${mode}` : "Todas as Questões"}
          </p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold">
          {currentIndex + 1} / {items.length}
        </div>
      </div>

      <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-blue-500 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
        />
      </div>

      {/* FLASHCARD */}
      <div className="perspective-1000 mb-8 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id + (isFlipped ? "-back" : "-front")}
            initial={{ opacity: 0, rotateX: isFlipped ? -90 : 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: isFlipped ? 90 : -90 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "w-full min-h-[300px] bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-lg border cursor-pointer relative",
              isFlipped ? "border-blue-200 shadow-blue-100" : "border-slate-200"
            )}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <span className="absolute top-4 left-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
              {isFlipped ? "Resposta" : "Pergunta"}
            </span>

            {isFlipped ? (
              <p className="text-2xl md:text-3xl text-blue-900 font-medium leading-relaxed">
                {currentItem.answer}
              </p>
            ) : (
              <p className="text-2xl md:text-3xl text-slate-800 font-bold leading-relaxed">
                {currentItem.question}
              </p>
            )}

            <div className="absolute bottom-4 flex items-center gap-2 text-slate-400 text-sm">
              <RotateCw className="w-4 h-4" /> Clique para virar
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center gap-4">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-1 flex justify-center items-center gap-2 py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <ArrowLeft className="w-5 h-5" /> Anterior
          </button>
          
          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex-[2] py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 active:scale-95 transition shadow-md shadow-blue-200"
          >
            {isFlipped ? "Ver Pergunta" : "Ver Resposta"}
          </button>
          
          <button 
            onClick={handleNext}
            disabled={!hasSelection}
            title={!hasSelection ? "Marque uma opção de revisão para avançar" : ""}
            className="flex-1 flex justify-center items-center gap-2 py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {currentIndex === items.length - 1 ? "Concluir" : "Próxima"} <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* ACTIONS */}
        {!hasSelection && (
          <p className="text-center text-sm font-semibold text-amber-600 animate-in fade-in">
            Selecione uma opção de revisão abaixo para liberar a próxima questão.
          </p>
        )}
        <div className="grid grid-cols-3 gap-3">
          <button 
            onClick={() => toggleAction("reviewed")}
            className={cn(
              "flex flex-col items-center gap-2 py-3 px-2 rounded-xl border-2 transition",
              currentProgress?.reviewed 
                ? "border-emerald-500 bg-emerald-50 text-emerald-700" 
                : "border-slate-200 text-slate-600 hover:bg-slate-50"
            )}
          >
            <CheckCircle className="w-6 h-6" />
            <span className="text-[11px] sm:text-sm font-semibold text-center">{currentProgress?.reviewed ? "Revisado" : "Marcar Revisado"}</span>
          </button>

          <button 
            onClick={() => toggleAction("difficult")}
            className={cn(
              "flex flex-col items-center gap-2 py-3 px-2 rounded-xl border-2 transition",
              currentProgress?.difficult 
                ? "border-amber-500 bg-amber-50 text-amber-700" 
                : "border-slate-200 text-slate-600 hover:bg-slate-50"
            )}
          >
            <AlertTriangle className="w-6 h-6" />
            <span className="text-[11px] sm:text-sm font-semibold text-center">{currentProgress?.difficult ? "Difícil" : "Marcar Difícil"}</span>
          </button>

          <button 
            onClick={() => toggleAction("reviewLater")}
            className={cn(
              "flex flex-col items-center gap-2 py-3 px-2 rounded-xl border-2 transition",
              currentProgress?.reviewLater 
                ? "border-purple-500 bg-purple-50 text-purple-700" 
                : "border-slate-200 text-slate-600 hover:bg-slate-50"
            )}
          >
            <Clock className="w-6 h-6" />
            <span className="text-[11px] sm:text-sm font-semibold text-center">{currentProgress?.reviewLater ? "Revisarei" : "Revisar Depois"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FlashcardsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto p-12 text-center text-slate-500">Carregando flashcards...</div>}>
      <FlashcardsContent />
    </Suspense>
  );
}
