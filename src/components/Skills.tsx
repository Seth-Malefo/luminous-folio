import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { name: 'HTML5', level: 95, color: 'emerald' },
  { name: 'CSS3', level: 90, color: 'cyan' },
  { name: 'JavaScript', level: 92, color: 'emerald' },
  { name: 'React', level: 88, color: 'cyan' },
  { name: 'Node.js', level: 80, color: 'emerald' },
  { name: 'TypeScript', level: 85, color: 'cyan' },
  { name: 'Tailwind CSS', level: 95, color: 'emerald' },
  { name: 'SQL / PostgreSQL', level: 75, color: 'cyan' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-8">
      <div className="panel p-8">
        <h2 className="text-2xl font-bold mb-8 text-slate-100">Technical Arsenal</h2>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 p-0 list-none">
          {SKILLS.map((skill, idx) => (
            <motion.li 
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-300 tracking-wide">{skill.name}</span>
                <span className="text-slate-500 font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${
                    skill.color === 'emerald' ? 'from-emerald-600 to-emerald-400' : 'from-cyan-600 to-cyan-400'
                  }`}
                />
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Other Tools & Frameworks</h3>
          <ul className="flex flex-wrap gap-2 p-0 list-none">
            {['Git', 'Vite', 'Figma', 'Postman', 'Vercel', 'Supabase', 'Next.js', 'Docker', 'Python'].map(tool => (
              <li key={tool} className="chip px-4 py-2 hover:border-emerald-500/50 hover:text-slate-200 transition-colors cursor-default">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};