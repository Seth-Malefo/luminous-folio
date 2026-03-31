import React, { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="mb-8">
      <Toaster position="top-right" expand={true} richColors />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-5">
        <div className="panel p-8 flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-6 text-slate-100">Get In Touch</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6 flex-grow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-300">Email Me</h4>
                <a href="mailto:malefo.s@example.com" className="text-slate-500 hover:text-emerald-400 transition-colors">malefo.s@example.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-300">Call Me</h4>
                <p className="text-slate-500">+27 (0) 12 345 6789</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-violet-500/10 rounded-xl text-violet-400">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-300">Location</h4>
                <p className="text-slate-500">Johannesburg, South Africa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="panel p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-emerald-500/50 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-emerald-500/50 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
              <input 
                type="text" 
                required
                placeholder="Project Inquiry"
                className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-emerald-500/50 transition-colors"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                required
                placeholder="How can I help you?"
                rows={4}
                className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-slate-200 outline-none focus:border-emerald-500/50 transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button type="submit" className="primary-btn w-full py-4 mt-2 flex items-center justify-center gap-2 group">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};