import type {Metadata} from 'next';
import './globals.css';
import { Geist, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  title: 'Leonardo Barretti | AI/LLM Engineer — Production LLM Systems',
  description: 'Portfólio e Currículo de Leonardo Barretti, AI/LLM Engineer especializado em sistemas multi-agente, RAG e pipelines de LLM em produção.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={cn("font-sans dark", geist.variable, jetbrainsMono.variable)}>
      <body className="bg-[#030712] text-zinc-100 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
