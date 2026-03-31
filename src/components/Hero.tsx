import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-5 items-center mb-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="panel p-10 flex flex-col justify-center min-h-[400px]"
      >
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
          Available for Hire
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          Crafting Digital <br />
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-lg mb-8 leading-relaxed">
          I'm a full-stack developer passionate about building scalable, user-centric web applications that solve real-world problems.
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-emerald-400 font-bold text-2xl">2+</span>
            <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Years Experience</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-cyan-400 font-bold text-2xl">10+</span>
            <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Projects Built</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-emerald-400 font-bold text-2xl">100%</span>
            <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Commitment</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="primary-btn px-8">View Projects</button>
          <button className="ghost-btn px-8">Download CV</button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 gap-5"
      >
        <div className="panel p-6 flex items-center gap-5">
          <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400">
            <Code2 size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-200">Modern Codebases</h3>
            <p className="text-slate-500 text-sm">Clean, maintainable, and efficient architectures.</p>
          </div>
        </div>
        <div className="panel p-6 flex items-center gap-5">
          <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-400">
            <Globe size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-200">Global Standards</h3>
            <p className="text-slate-500 text-sm">Responsive design for every screen size.</p>
          </div>
        </div>
        <div className="panel p-6 flex items-center gap-5">
          <div className="p-4 rounded-xl bg-violet-500/10 text-violet-400">
            <Cpu size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-200">AI Driven</h3>
            <p className="text-slate-500 text-sm">Integrating the latest AI tech in modern apps.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};