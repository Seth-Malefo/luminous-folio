import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: "AI Analysis Dashboard",
    description: "A comprehensive dashboard for monitoring AI model performance with real-time data visualization and automated report generation.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/307c6f0c-3faf-4be8-8747-a495dd31904b/project-ai-2-6c5c91df-1774996758680.webp",
    tags: ["React", "Python", "D3.js"],
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce System",
    description: "Modern headless commerce platform with optimized checkout flows, integrated payments, and dynamic inventory management.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/307c6f0c-3faf-4be8-8747-a495dd31904b/project-coding-1-aa23e4ea-1774996761691.webp",
    tags: ["TypeScript", "Next.js", "Stripe"],
    link: "#",
    github: "#"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-8">
      <div className="flex justify-between items-end mb-8 px-2">
        <div>
          <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
          <p className="text-slate-500 mt-1">A showcase of my recent work and open-source contributions.</p>
        </div>
        <button className="ghost-btn text-xs md:text-sm">View All Works</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.title}
            whileHover={{ y: -5 }}
            className="panel group flex flex-col h-full overflow-hidden"
          >
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                <a href={project.github} className="p-3 bg-white/10 rounded-full hover:bg-emerald-500/20 text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.link} className="p-3 bg-white/10 rounded-full hover:bg-emerald-500/20 text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-200">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};