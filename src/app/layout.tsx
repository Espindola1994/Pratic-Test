import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estudo ROV - Flashcards e Simulado',
  description: 'Memorização rápida em 3 dias para prova discursiva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
