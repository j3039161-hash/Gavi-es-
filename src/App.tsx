/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Dumbbell, 
  ChevronRight, 
  Star,
  Users,
  ShieldCheck,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const GYM_NAME = "GAVIÕES";
const UNIT = "PAULISTA";
const HERO_IMAGE = "/src/assets/images/gym_hero_paulista_1777014991466.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Modalidades', href: '#features' },
    { name: 'A Unidade', href: '#unit' },
    { name: 'Planos', href: '#plans' },
    { name: 'Contato', href: '#contact' },
  ];
  return (
    <div className="min-h-screen bg-brand-black text-brand-text selection:bg-brand-primary/30 selection:text-white overflow-x-hidden font-sans">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none z-0" />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/80 backdrop-blur-md border-b border-brand-border h-20' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-10 h-full flex justify-between items-center text-brand-text">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-brand-primary rounded-sm flex items-center justify-center">
              <span className="text-black font-black text-xl italic font-display">G</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tighter uppercase">{GYM_NAME} 24H</span>
              <span className="text-[10px] text-brand-primary tracking-[0.2em] uppercase font-semibold">Unidade {UNIT}</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-muted hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 bg-white text-black text-xs font-black uppercase italic tracking-tighter hover:bg-brand-primary transition-colors">
              Matricule-se
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-gray border-b border-brand-border flex flex-col items-center py-10 gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-black uppercase italic"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-primary text-black font-black italic w-3/4 py-4 uppercase">
              Matrícula Online
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Academia Gaviões Paulista" 
            className="w-full h-full object-cover opacity-30 grayscale saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 mb-8 bg-brand-gray/40 border border-brand-border px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500">Aberto 24 Horas — Treine no seu tempo</span>
            </div>
            
            <h1 className="font-black text-7xl md:text-[8.5rem] italic uppercase leading-[0.8] mb-8 tracking-tighter flex flex-col">
              <span>A MAIOR DO</span>
              <span className="text-brand-primary">BRASIL.</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-muted max-w-lg mb-10 leading-relaxed font-medium">
              Equipamentos de última geração, professores treinados e a energia que você só encontra na Gaviões Paulista.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <button className="group relative btn-primary flex items-center gap-4 py-5 px-10">
                <span className="text-lg">Começar Agora</span>
                <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-4">
                 <div className="h-14 w-px bg-brand-border"></div>
                 <div className="flex flex-col justify-center">
                    <div className="flex text-brand-primary gap-1 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">
                      1.389+ Avaliações no Google
                    </p>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex lg:col-span-2 flex-col gap-6"
          >
             <div className="card-premium h-48 flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-brand-primary/20 transition-all pointer-events-none" />
                <div>
                  <h3 className="font-black text-2xl uppercase italic leading-none mb-1">Unidade Paulista</h3>
                  <p className="text-xs font-bold text-brand-muted uppercase tracking-wider">R. Treze de Maio, 812</p>
                </div>
                <div className="flex justify-between items-center">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-gray bg-neutral-800" />)}
                      <div className="w-8 h-8 rounded-full border-2 border-brand-gray bg-brand-primary text-black text-[9px] font-black flex items-center justify-center">+500</div>
                   </div>
                   <span className="text-[10px] font-black uppercase italic text-brand-primary hover:underline cursor-pointer">Ver Mapa</span>
                </div>
             </div>

             <div className="bg-brand-primary rounded-xl p-6 text-black flex flex-col justify-between h-48">
                <div>
                  <h3 className="font-black text-2xl uppercase italic leading-none mb-2">Treine com Elite</h3>
                  <p className="text-xs font-black opacity-80 uppercase tracking-tighter">Isenção de taxa de adesão para novos alunos esta semana.</p>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-black italic">R$ 99,90<small className="text-[10px] ml-1 uppercase">/mês</small></span>
                  <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-brand-primary transition-all cursor-pointer">
                    <ChevronRight size={20} />
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Metrics */}
      <section className="bg-brand-gray border-y border-brand-border py-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "24H", label: "Afasto Ininterrupto" },
              { val: "50+", label: "Unidades no Brasil" },
              { val: "100%", label: "Treinadores Elite" },
              { val: "Okt24", label: "Arnold Classic" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-4xl font-black italic uppercase tracking-tighter text-brand-primary mb-1">{stat.val}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-2xl">
              <p className="text-brand-primary font-black uppercase italic tracking-widest mb-4">Potencialize seu Resultado</p>
              <h2 className="section-title mb-0 leading-[0.8]">Domine Sua <span className="text-stroke text-transparent">Performance</span></h2>
            </div>
            <p className="max-w-xs text-brand-muted text-sm font-medium leading-relaxed italic border-l-2 border-brand-primary pl-6 py-2">
              Não somos apenas uma academia. Somos o centro de treinamento dos campeões.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Musculação", tag: "Equipamentos Elite", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
              { title: "Artes Marciais", tag: "Mestres Graduados", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
              { title: "Personal Training", tag: "Foco Total", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800" }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="group card-premium p-0 h-[550px] overflow-hidden relative border-brand-border">
                  <div className="absolute inset-0 grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-10 left-10 z-10">
                    <span className="text-[10px] font-black uppercase text-brand-primary bg-black px-2 py-1 mb-3 inline-block tracking-widest">{item.tag}</span>
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter group-hover:text-brand-primary transition-colors">{item.title}</h3>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Styling */}
      <footer id="contact" className="bg-brand-gray border-t border-brand-border pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col lg:flex-row justify-between gap-20 pb-24">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-brand-primary rounded-sm flex items-center justify-center">
                  <span className="text-black font-black text-2xl italic font-display">G</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-bold tracking-tighter uppercase">{GYM_NAME}</span>
                </div>
              </div>
              <p className="text-brand-muted text-sm font-medium leading-relaxed max-w-sm">
                A força e a tradição da maior do Brasil. Ambientes planejados para sua performance máxima, 24 horas por dia.
              </p>
            </div>

            <div className="flex flex-wrap gap-16 lg:w-2/3 lg:justify-end">
                <div className="min-w-[200px]">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-6">Localização</h4>
                  <p className="text-sm font-semibold text-brand-text leading-loose italic">
                    R. Treze de Maio, 812<br/>
                    Bela Vista, São Paulo<br/>
                    CEP: 01327-000
                  </p>
                </div>
                <div className="min-w-[200px]">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-6">Contato</h4>
                  <p className="text-sm font-semibold text-brand-text leading-loose italic">
                    (11) 3285-3269<br/>
                    contato@academiagavioes.com.br
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                   <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-xs font-black hover:bg-white hover:text-black transition-all cursor-pointer">IG</div>
                      <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-xs font-black hover:bg-white hover:text-black transition-all cursor-pointer">FB</div>
                   </div>
                </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 italic">
            <p>© 2024 {GYM_NAME} 24H. LEGACY IN HARDCORE TRAINING.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .text-stroke {
          -webkit-text-stroke: 1.5px #f59e0b;
        }
      `}</style>
    </div>
  );
}

