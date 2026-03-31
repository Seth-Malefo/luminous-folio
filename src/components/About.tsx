import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="mb-8">
      <div className="panel p-8 md:p-12 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[20px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/307c6f0c-3faf-4be8-8747-a495dd31904b/profile-picture-55be0a1e-1774996758046.webp" 
              alt="Setlhomara Malefo"
              className="relative w-full aspect-square object-cover rounded-[18px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center gap-3">
              About Me
              <span className="h-[1px] w-24 bg-gradient-to-r from-emerald-500 to-transparent"></span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                Hello! I'm <span className="text-emerald-400 font-semibold">Setlhomara Malefo</span>, a passionate developer based in South Africa. I specialize in building high-performance web applications using modern technologies.
              </p>
              <p>
                My journey in tech began with a curiosity for how things work on the internet, which quickly evolved into a dedicated career. I believe in writing code that is not just functional, but also clean and intuitive.
              </p>
              <p>
                When I'm not coding, I'm usually exploring new tech trends, contributing to open-source projects, or refining my skills in UI/UX design. My goal is to create digital products that provide meaningful value to users.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="tag py-2 px-4 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs uppercase tracking-widest border border-emerald-500/20">Fast Learner</span>
              <span className="tag py-2 px-4 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-xs uppercase tracking-widest border border-cyan-500/20">Problem Solver</span>
              <span className="tag py-2 px-4 rounded-full bg-violet-500/10 text-violet-400 font-bold text-xs uppercase tracking-widest border border-violet-500/20">Team Player</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};