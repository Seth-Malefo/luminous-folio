import React, { useState, useEffect } from 'react';
import { 
  Code as GitHubIcon, 
  User as LinkedInIcon, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  Monitor,
  Terminal,
  Zap,
  ArrowRight,
  Code,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import './App.css';

/** Utility for Tailwind class merging */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- CONSTANTS ---
const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SKILLS = [
  { name: 'HTML5/CSS3', level: 98, category: 'Frontend' },
  { name: 'React 19', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 92, category: 'Language' },
  { name: 'Tailwind CSS', level: 96, category: 'UI/UX' },
  { name: 'Framer Motion', level: 88, category: 'Animation' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Next.js', level: 90, category: 'Fullstack' },
  { name: 'PostgreSQL', level: 82, category: 'Database' },
];

const PROJECTS = [
  {
    title: 'Modern Analytics Dashboard',
    description: 'A high-performance data visualization platform with real-time updates and interactive charts built for modern enterprise workflows.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/307c6f0c-3faf-4be8-8747-a495dd31904b/project-1-ui-b77c16c8-1774996454884.webp',
    tags: ['React', 'D3.js', 'Tailwind', 'Vite'],
    link: '#',
    github: '#',
    status: 'Completed'
  },
  {
    title: 'Neural Vision AI',
    description: 'An advanced image processing engine utilizing neural networks to detect patterns and categorize visual data with 99.4% accuracy.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/307c6f0c-3faf-4be8-8747-a495dd31904b/project-2-ai-93186e77-1774996434200.webp',
    tags: ['Python', 'TensorFlow', 'React', 'Cloud'],
    link: '#',
    github: '#',
    status: 'Beta'
  },
  {
    title: 'Developer Hub',
    description: 'A minimalist collaborative workspace for developers to manage tasks, snippets, and project timelines in a unified environment.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/307c6f0c-3faf-4be8-8747-a495dd31904b/project-3-workspace-818094f9-1774996433903.webp',
    tags: ['Next.js', 'Supabase', 'Framer', 'UI'],
    link: '#',
    github: '#',
    status: 'In Progress'
  }
];

// --- UI COMPONENTS ---

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn(
    "bg-gradient-to-r from-emerald-400 to-cyan-400 text-[#0b1224] px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-lg",
    className
  )}>
    {children}
  </span>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' | 'outline' }) => {
  const variants = {
    primary: "bg-gradient-to-r from-emerald-500 to-cyan-400 text-[#0b1224] hover:opacity-90 shadow-[0_10px_40px_rgba(16,185,129,0.2)]",
    ghost: "bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10",
    outline: "border-2 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
  };
  
  return (
    <button 
      className={cn(
        "px-6 py-3 rounded-xl font-bold transition-all duration-300 active:scale-95 disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const GlassPanel = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn(
    "bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden",
    className
  )}>
    {children}
  </div>
);

// --- SECTIONS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      isScrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 flex items-center justify-center shadow-lg">
            <Code className="text-slate-950 w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl leading-none tracking-tight">MALEFO</span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Portfolio 2024</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-400 hover:text-emerald-400 transition-colors font-bold text-sm tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="py-2 px-5 text-xs" onClick={() => toast.success('Resume download started!')}>
            DOWNLOAD CV
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-200 bg-white/5 rounded-lg border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-2xl border-b border-white/10 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-black text-slate-200 hover:text-emerald-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <Button onClick={() => setMobileMenuOpen(false)}>HIRE ME</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-8">
            <Zap size={14} /> 
            <span>REACT 19 • RE-ENVISIONED PORTFOLIO</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-white mb-8">
            I DESIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              ELEGANT
            </span> <br />
            SYSTEMS.
          </h1>
          
          <p className="text-slate-400 text-xl max-w-lg mb-10 leading-relaxed font-medium">
            Building intuitive digital experiences that combine high-end aesthetics 
            with pixel-perfect technical execution. My name is <span className="text-white font-bold">Setlhomara Malefo</span>.
          </p>

          <div className="flex flex-wrap gap-5">
            <Button className="group flex items-center gap-3 pr-4">
              Explore Projects 
              <span className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </span>
            </Button>
            <div className="flex items-center gap-4">
               {[GitHubIcon, LinkedInIcon].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all">
                   <Icon size={22} />
                 </a>
               ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 p-2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-[2.5rem] border border-white/10">
            <div className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative group">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/11e6ba93-1544-42b4-99fd-48eadca6f328/1774996883186_seth.jpg" 
                alt="Setlhomara Malefo" 
                className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="p-5 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Weekly Status</p>
                      <p className="text-white font-black text-lg">Milestone Completed</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-emerald-500/30 border-t-emerald-500 animate-spin" />
                 </div>
              </div>
            </div>
          </div>

          {/* Floating Element 1 */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 p-4 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Layout size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Design Systems</p>
                <p className="text-white text-sm font-black">98% Efficient</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-5 -right-5 p-4 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Terminal size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">React 19 Stack</p>
                <p className="text-white text-sm font-black">Performance Ready</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div>
            <Badge className="mb-4">Capabilities</Badge>
            <h2 className="text-5xl font-black text-white">Technical Core.</h2>
          </div>
          <p className="text-slate-500 max-w-sm font-medium mb-1">
            Leveraging the latest industry standards to build resilient and future-proof digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassPanel className="h-full group hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-8">
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                     {i % 2 === 0 ? <Code2 size={24} /> : <Cpu size={24} />}
                   </div>
                   <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{skill.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{skill.name}</h3>
                <div className="space-y-3">
                   <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                      <span className="text-slate-500">Expertise</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                   </div>
                   <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                      />
                   </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <Badge className="mb-4">Portfolio</Badge>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Recent Creations.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            A showcase of my journey in engineering complex systems with simple, elegant interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="relative group rounded-3xl overflow-hidden border border-white/10 mb-8 aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                    <GitHubIcon size={20} />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">
                     {project.status}
                   </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">#{tag}</span>
                ))}
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 hover:text-emerald-400 transition-colors cursor-pointer">
                {project.title}
              </h3>
              
              <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-emerald-400 transition-all group w-fit">
                Full Case Study 
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:translate-x-1 transition-all">
                  <ArrowRight size={14} />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your message has been received! I will reach out soon.');
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <GlassPanel className="p-12 md:p-20 bg-gradient-to-br from-slate-900/80 to-slate-950/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <Badge className="mb-6">Contact Me</Badge>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Let's build <br /> together.</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-sm leading-relaxed">
                Currently taking on new projects and looking for permanent opportunities with forward-thinking teams.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Email Address</p>
                      <p className="text-white font-bold">setlhomara.malefo@engineering.dev</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Globe size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Location</p>
                      <p className="text-white font-bold">Cape Town, South Africa</p>
                    </div>
                 </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">Name</label>
                    <input 
                      required 
                      className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">Email</label>
                    <input 
                      required 
                      type="email"
                      className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    required 
                    rows={4}
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
               </div>
               <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 group flex items-center justify-center gap-3"
               >
                 {isSubmitting ? 'PROCESSING...' : (
                   <>SEND MESSAGE <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} /></>
                 )}
               </Button>
            </form>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 border border-white/10">
            <Code size={18} />
          </div>
          <span className="font-black text-sm tracking-widest">MALEFO</span>
        </div>
        
        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.4em]">
          Designed & Built by Setlhomara Malefo © 2024
        </p>
        
        <div className="flex gap-8">
           {NAV_LINKS.map(link => (
             <a key={link.name} href={link.href} className="text-slate-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
               {link.name}
             </a>
           ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#0f172a] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Toaster position="top-center" richColors />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}