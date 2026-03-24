"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { Star, BookOpen, Trash2 } from "lucide-react";
import Link from "next/link";

export default function FavoritosPage() {
  const { favorites, removeFavorite, isLoaded } = useFavorites();

  if (!isLoaded) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-5xl flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-blue-900 flex items-center gap-3">
          <Star className="w-8 h-8 fill-yellow-400 text-yellow-500" />
          Meus Favoritos
        </h1>
        <p className="text-slate-600 mt-2 text-lg">
          Revise o conteúdo salvo do Mapa Mental para otimizar seu tempo.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 md:p-16 text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-6">
            <Star className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Nenhum favorito selecionado</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto text-lg leading-relaxed">
            Você ainda não salvou nenhum conteúdo. Navegue pelo Mapa Mental e clique na estrela para criar sua própria lista de revisão direcionada.
          </p>
          <Link 
            href="/mapa-mental" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            <BookOpen className="w-5 h-5" />
            Explorar Mapa Mental
          </Link>
        </div>
      ) : (
        <div className="grid gap-5">
          {favorites.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-lg mb-4">
                    {item.category}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-base">
                    {item.answer}
                  </p>
                </div>
                
                <button
                  onClick={() => removeFavorite(item.id)}
                  className="shrink-0 p-2.5 md:p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all flex items-center gap-2 font-semibold w-full md:w-auto justify-center border border-transparent hover:border-red-100"
                  title="Remover dos favoritos"
                >
                  <Trash2 className="w-5 h-5" />
                  <span className="md:hidden">Remover dos favoritos</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
