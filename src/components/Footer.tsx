import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 text-slate-500">
      <div className="max-w-[1180px] mx-auto px-7 pb-8 border-t border-white/5 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-slate-200 mb-2">Setlhomara Malefo</h2>
            <p className="text-sm max-w-xs">Building modern web experiences with love and precision in South Africa.</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-emerald-500/10 hover:text-emerald-400 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/10 hover:text-cyan-400 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-emerald-500/10 hover:text-emerald-400 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-cyan-500/10 hover:text-cyan-400 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-slate-600 gap-4">
          <p>© 2024 Setlhomara Malefo. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};