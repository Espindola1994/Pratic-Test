"use client";

import Link from "next/link";
import { Zap, Brain, LayoutDashboard, Search, AlertTriangle, ArrowRight, Settings2, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { getStats } from "@/lib/progress";
import { allStudyItems } from "@/data/study-data";
import { getCategoryStats } from "@/lib/categories";

export default function Home() {
  const [stats, setStats] = useState({
    totalReviewed: 0,
    totalDifficult: 0,
    totalRight: 0,
    totalWrong: 0,
    totalReviewLater: 0,
  });

  const totalItems = allStudyItems.length;
  const categoryStats = getCategoryStats();

  useEffect(() => {
    setStats(getStats());
  }, []);

  const progressPercentage = Math.round((stats.totalReviewed / totalItems) * 100) || 0;

  return (
    <div className="container px-4 py-8 mx-auto max-w-5xl">
      <div className="flex flex-col items-center text-center mb-10 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
          Practice Test
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
          Material de memorização rápida para prova discursiva.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Foco em Memorização
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            {totalItems} Questões
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Seu Progresso</h2>
          <div className="mb-4">
            <div className="flex justify-between text-sm font-medium mb-1">
              <span className="text-slate-600">Revisados</span>
              <span className="text-blue-600">{stats.totalReviewed} / {totalItems} ({progressPercentage}%)</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
              <div className="flex items-center gap-2 text-amber-700 font-medium mb-1">
                <AlertTriangle className="h-4 w-4" /> Difíceis
              </div>
              <div className="text-3xl font-bold text-amber-900">{stats.totalDifficult}</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-slate-700 font-medium mb-1">
                <Settings2 className="h-4 w-4" /> Revisar Depois
              </div>
              <div className="text-3xl font-bold text-slate-900">{stats.totalReviewLater}</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 text-emerald-700 font-medium mb-1">
                <BookOpen className="h-4 w-4" /> Não Revisadas
              </div>
              <div className="text-3xl font-bold text-emerald-900">{totalItems - stats.totalReviewed}</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <div className="flex items-center gap-2 text-purple-700 font-medium mb-1">
                <LayoutDashboard className="h-4 w-4" /> Categorias
              </div>
              <div className="text-3xl font-bold text-purple-900">{categoryStats.length}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/flashcards" className="group flex items-center justify-between p-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Iniciar Flashcards</h3>
                <p className="text-blue-100 text-sm">Prática de repetição espaçada</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/simulado" className="group flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <LayoutDashboard className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Fazer Simulado</h3>
                <p className="text-slate-500 text-sm">Teste sem alternativas</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/mapa-mental" className="group flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Mapa Mental</h3>
                <p className="text-slate-500 text-sm">Estruturação por agrupamento</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link href="/revisao" className="group flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="bg-slate-100 p-3 rounded-xl">
                <Search className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Revisão Rápida</h3>
                <p className="text-slate-500 text-sm">Busca, filtros e leitura corrida</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Modos Rápidos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/flashcards?mode=difficult" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-center">
            <AlertTriangle className="h-6 w-6 text-amber-500 mb-2" />
            <span className="font-semibold text-slate-800 text-sm">Questões Difíceis</span>
          </Link>
          <Link href="/flashcards?mode=review" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-center">
            <Settings2 className="h-6 w-6 text-blue-500 mb-2" />
            <span className="font-semibold text-slate-800 text-sm">Revisar Depois</span>
          </Link>
          <Link href="/flashcards?mode=random20" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-center">
            <Zap className="h-6 w-6 text-purple-500 mb-2" />
            <span className="font-semibold text-slate-800 text-sm">20 Aleatórias</span>
          </Link>
          <Link href="/flashcards?mode=unreviewed" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-center">
            <BookOpen className="h-6 w-6 text-emerald-500 mb-2" />
            <span className="font-semibold text-slate-800 text-sm">Não Revisadas</span>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Categorias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryStats.map((cat, idx) => (
            <Link key={idx} href={`/flashcards?category=${encodeURIComponent(cat.category)}`} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all flex justify-between items-center group">
              <span className="font-medium text-slate-700 group-hover:text-blue-700 line-clamp-1 mr-2">{cat.category}</span>
              <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full whitespace-nowrap">{cat.count} itens</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
