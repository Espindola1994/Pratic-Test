import Link from "next/link";
import { BookOpen, Brain, LayoutDashboard, Search, Zap, Map, Star } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-6 text-xl font-bold text-blue-900 tracking-tight">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span>Practice Test</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm font-medium">
          <Link href="/flashcards" className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors">
            <Zap className="h-4 w-4" /> Flashcards
          </Link>
          <Link href="/mapa-mental" className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors">
            <Brain className="h-4 w-4" /> Mapa Mental
          </Link>
          <Link href="/simulado" className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors">
            <LayoutDashboard className="h-4 w-4" /> Simulado
          </Link>
          <Link href="/diagramas-rov" className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors">
            <Map className="h-4 w-4" /> Diagramas
          </Link>
          <Link href="/favoritos" className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors">
            <Star className="h-4 w-4" /> Favoritos
          </Link>
          <Link href="/revisao" className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors">
            <Search className="h-4 w-4" /> Revisão Automática
          </Link>
        </nav>
        
        <div className="flex md:hidden flex-1 justify-end">
          <Link href="/revisao" className="p-2 border rounded-md">
            <Search className="h-5 w-5 text-slate-600" />
          </Link>
        </div>
      </div>
      
      {/* Mobile nav bar (bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-[calc(4rem+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)] bg-white border-t border-gray-200">
        <div className="grid h-full max-w-[600px] grid-cols-6 mx-auto font-medium">
          <Link href="/" className="inline-flex flex-col items-center justify-center px-1 hover:bg-gray-50 group text-slate-500 hover:text-blue-600">
            <BookOpen className="w-5 h-5 mb-1 text-slate-500 group-hover:text-blue-600" />
            <span className="text-[10px]">Home</span>
          </Link>
          <Link href="/flashcards" className="inline-flex flex-col items-center justify-center px-1 hover:bg-gray-50 group text-slate-500 hover:text-blue-600">
            <Zap className="w-5 h-5 mb-1 text-slate-500 group-hover:text-blue-600" />
            <span className="text-[10px]">Flashcards</span>
          </Link>
          <Link href="/mapa-mental" className="inline-flex flex-col items-center justify-center px-1 hover:bg-gray-50 group text-slate-500 hover:text-blue-600">
            <Brain className="w-5 h-5 mb-1 text-slate-500 group-hover:text-blue-600" />
            <span className="text-[10px]">Mapa</span>
          </Link>
          <Link href="/simulado" className="inline-flex flex-col items-center justify-center px-1 hover:bg-gray-50 group text-slate-500 hover:text-blue-600">
            <LayoutDashboard className="w-5 h-5 mb-1 text-slate-500 group-hover:text-blue-600" />
            <span className="text-[10px]">Simulado</span>
          </Link>
          <Link href="/diagramas-rov" className="inline-flex flex-col items-center justify-center px-1 hover:bg-gray-50 group text-slate-500 hover:text-blue-600">
            <Map className="w-5 h-5 mb-1 text-slate-500 group-hover:text-blue-600" />
            <span className="text-[10px]">Diagramas</span>
          </Link>
          <Link href="/favoritos" className="inline-flex flex-col items-center justify-center px-1 hover:bg-gray-50 group text-slate-500 hover:text-blue-600">
            <Star className="w-5 h-5 mb-1 text-slate-500 group-hover:text-blue-600" />
            <span className="text-[10px] truncate max-w-full text-center">Favoritos</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
