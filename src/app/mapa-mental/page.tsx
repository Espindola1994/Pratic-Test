"use client";

import { useState } from "react";
import { getAllCategories, getItemsByCategory } from "@/lib/categories";
import { ChevronDown, FileText, BrainCircuit, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useFavorites } from "@/hooks/useFavorites";

export default function MapaMentalPage() {
  const categories = getAllCategories();
  const [activeTab, setActiveTab] = useState<"mapa" | "cola">("mapa");
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    categories.reduce((acc, cat) => ({ ...acc, [cat]: false }), {})
  );
  
  const { toggleFavorite, isFavorite } = useFavorites();

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const expandAll = () => {
    setOpenCategories(categories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {}));
  };

  const collapseAll = () => {
    setOpenCategories(categories.reduce((acc, cat) => ({ ...acc, [cat]: false }), {}));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-blue-900">Mapa Mental</h1>
          <p className="text-slate-600">Todo o conhecimento estruturado por categorias.</p>
        </div>
        
        <div className="flex bg-slate-100 p-1 rounded-xl w-full md:w-auto">
          <button
            onClick={() => setActiveTab("mapa")}
            className={cn(
              "flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all",
              activeTab === "mapa" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
            )}
          >
            <BrainCircuit className="w-4 h-4" /> Mapa Mental
          </button>
          <button
            onClick={() => setActiveTab("cola")}
            className={cn(
              "flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all",
              activeTab === "cola" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
            )}
          >
            <FileText className="w-4 h-4" /> Cola de Prova
          </button>
        </div>
      </div>

      {activeTab === "mapa" && (
        <div className="mb-4 flex gap-3">
          <button onClick={expandAll} className="text-sm text-blue-600 font-medium hover:underline">
            Expandir Tudo
          </button>
          <span className="text-slate-300">|</span>
          <button onClick={collapseAll} className="text-sm text-slate-500 font-medium hover:underline">
            Recolher Tudo
          </button>
        </div>
      )}

      {activeTab === "mapa" ? (
        <div className="space-y-4">
          {categories.map((category) => {
            const items = getItemsByCategory(category);
            const isOpen = openCategories[category];

            return (
              <div key={category} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                      {items.length}
                    </span>
                    <h2 className="text-lg font-bold text-slate-800">{category}</h2>
                  </div>
                  <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-transform", isOpen && "rotate-180")} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-100"
                    >
                      <div className="p-5 grid gap-4 bg-slate-50/50">
                        {items.map((item) => (
                          <div key={item.id} className="relative bg-white p-4 rounded-xl border border-slate-100 shadow-sm group">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(item);
                              }}
                              className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-50 transition-colors"
                              title={isFavorite(item.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                            >
                              <Star 
                                className={cn(
                                  "w-5 h-5 transition-all", 
                                  isFavorite(item.id) 
                                    ? "fill-yellow-400 text-yellow-500 scale-110" 
                                    : "text-slate-300 group-hover:text-yellow-400"
                                )} 
                              />
                            </button>
                            <h3 className="font-semibold text-slate-800 mb-2 pr-8">{item.question}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <div className="mb-6 pb-6 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Visão Compacta (Cola de Prova)</h2>
            <p className="text-sm text-slate-500">
              Formato ideal para leitura de véspera. Imprima ou leia rapidamente.
            </p>
          </div>
          
          <div className="space-y-12">
            {categories.map((category) => {
              const items = getItemsByCategory(category);
              return (
                <div key={`cola-${category}`}>
                  <h3 className="text-lg font-bold text-blue-800 mb-4 pb-2 border-b border-blue-100 uppercase tracking-wider text-sm">
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    {items.map((item) => (
                      <div key={`cola-item-${item.id}`} className="text-sm break-inside-avoid relative group">
                        <div className="flex items-start justify-between gap-2">
                          <strong className="text-slate-800 block mb-0.5">{item.question}</strong>
                          <button
                            onClick={() => toggleFavorite(item)}
                            className="shrink-0 p-0.5 mt-0.5 transition-colors"
                            title={isFavorite(item.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                          >
                            <Star 
                              className={cn(
                                "w-4 h-4 transition-all", 
                                isFavorite(item.id) 
                                  ? "fill-yellow-400 text-yellow-500" 
                                  : "text-slate-300 opacity-0 group-hover:opacity-100 hover:text-yellow-400"
                              )} 
                            />
                          </button>
                        </div>
                        <span className="text-slate-600 block pr-6">{item.answer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
