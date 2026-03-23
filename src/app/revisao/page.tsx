"use client";

import { useState, useMemo } from "react";
import { allStudyItems, categories } from "@/data/study-data";
import { Search, Printer, Copy, Check } from "lucide-react";

export default function RevisaoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [copied, setCopied] = useState(false);

  const filteredItems = useMemo(() => {
    let items = allStudyItems;

    if (selectedCategory && selectedCategory !== "Todas") {
      items = items.filter(i => i.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      items = items.filter(
        i => i.question.toLowerCase().includes(lowerSearch) || 
             i.answer.toLowerCase().includes(lowerSearch)
      );
    }

    return items;
  }, [searchTerm, selectedCategory]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const textToCopy = filteredItems
      .map(item => `Q: ${item.question}\nR: ${item.answer}\n`)
      .join("\n");
      
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 print:hidden">
        <div>
          <h1 className="text-3xl font-extrabold text-blue-900">Revisão Rápida</h1>
          <p className="text-slate-600">Busca, filtros e leitura corrida para a prova.</p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copiado!" : "Copiar"}
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            <Printer className="w-4 h-4" />
            Imprimir
          </button>
        </div>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 print:hidden">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Buscar palavra-chave..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          
          <select 
            className="w-full md:w-64 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none font-medium text-slate-700"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="Todas">Todas as Categorias</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        
        <div className="mt-4 text-sm font-medium text-slate-500">
          Mostrando {filteredItems.length} de {allStudyItems.length} questões
        </div>
      </div>

      {/* Lista Corrida */}
      <div className="space-y-6 print:space-y-4">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            Nenhuma questão encontrada para estes filtros.
          </div>
        ) : (
          filteredItems.map((item, index) => (
            <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm print:shadow-none print:border-b print:rounded-none">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs mt-0.5 print:hidden">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug">
                    <span className="hidden print:inline">{index + 1}. </span>
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg print:bg-transparent print:p-0">
                    <strong className="text-blue-700 hidden print:inline">R: </strong>
                    {item.answer}
                  </p>
                  
                  <div className="mt-3 text-xs font-semibold text-slate-400 uppercase tracking-wider print:hidden">
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
