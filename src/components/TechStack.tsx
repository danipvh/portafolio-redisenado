import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Globe, Terminal, Database, Wrench, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface TechItem {
  name: string;
  categories: ('frontend' | 'backend' | 'database' | 'deploy')[];
  logoUrl: string;
  invert?: boolean; // Some logos look better with dark/light customization
}

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'deploy'>('all');

  const tabs = [
    { id: 'all', label: 'Todo el Stack', icon: Cpu },
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'backend', label: 'Backend / API', icon: Terminal },
    { id: 'database', label: 'Bases de Datos', icon: Database },
    { id: 'deploy', label: 'Herramientas / Deploy', icon: Wrench },
  ];

  const technologies: TechItem[] = [
    {
      name: 'Javascript',
      categories: ['frontend', 'backend'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'HTML5',
      categories: ['frontend'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS3',
      categories: ['frontend'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'Bootstrap',
      categories: ['frontend'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
      name: 'Tailwind CSS',
      categories: ['frontend'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: 'Node.js',
      categories: ['backend'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Express.js',
      categories: ['backend'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      invert: true
    },
    {
      name: 'PostgreSQL',
      categories: ['database'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'Github',
      categories: ['deploy'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      invert: true
    },
    {
      name: 'React',
      categories: ['frontend'],
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }
  ];

  const filteredTech = selectedCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.categories.includes(selectedCategory));

  return (
    <section id="tecnologia" className="py-24 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Stack Tecnológico
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Dominio de las herramientas líderes de la industria para entregar productos digitales de calidad.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Navigation Tabs */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#d946ef] text-white shadow-lg shadow-[#d946ef]/25 scale-105'
                      : 'bg-[#0a0a0d] text-gray-400 hover:text-white border border-white/5 hover:border-white/15'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Grid transition container */}
        <ScrollReveal delay={0.3}>
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={tech.name}
                  className="p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 bg-[#0a0a0d]/80 border border-white/5 transition-all hover:bg-[#d946ef]/10 hover:border-[#d946ef]/30 hover:scale-[1.03]"
                  style={{ contentVisibility: 'auto' }}
                >
                  {tech.name === 'Github' ? (
                    <div className="w-12 h-12 flex items-center justify-center text-[#ff6600] drop-shadow-[0_0_10px_rgba(255,102,0,0.4)]">
                      <svg
                        className="w-12 h-12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.03-1.416-4.03-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.237-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.596-.166 1.233-.25 1.87-.254.637.004 1.274.088 1.87.254 2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                  ) : tech.name === 'Express.js' ? (
                    <img
                      src={tech.logoUrl}
                      alt={`Logo de ${tech.name}`}
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <img
                      src={tech.logoUrl}
                      alt={`Logo de ${tech.name}`}
                      loading="lazy"
                      decoding="async"
                      className={`w-12 h-12 object-contain ${tech.invert ? 'invert brightness-0 dark:invert-0 dark:brightness-100' : ''}`}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-white">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  );
}
