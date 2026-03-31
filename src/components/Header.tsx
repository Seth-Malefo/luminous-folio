import React from 'react';
import { Terminal } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
      <div className="max-w-[1180px] mx-auto px-7 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 font-bold tracking-tight">
          <div className="bg-emerald-500/10 p-2 rounded-lg">
            <Terminal className="text-emerald-400 w-5 h-5" />
          </div>
          <span className="text-lg">Setlhomara Malefo</span>
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold shadow-lg ml-2 uppercase tracking-widest">
            Portfolio v1.0
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="primary-btn text-xs md:text-sm">Hire Me</a>
        </div>
      </div>
    </header>
  );
};