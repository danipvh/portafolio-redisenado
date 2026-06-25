import { Building2, MousePointerClick, Database, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';
import ScrollReveal from './ScrollReveal';

export default function Services() {
  const list = [
    {
      title: 'Sitios Web Corporativos',
      desc: 'Diseñados para transmitir profesionalismo y potenciar la presencia digital de tu negocio.',
      icon: Building2,
    },
    {
      title: 'Landing Pages',
      desc: 'Páginas enfocadas en captar clientes potenciales y aumentar conversiones.',
      icon: MousePointerClick,
    },
    {
      title: 'Sistemas de Gestión',
      desc: 'Dashboards personalizados para administración de clientes, inventarios y flujos internos.',
      icon: Database,
    },
    {
      title: 'Aplicaciones Web',
      desc: 'Soluciones personalizadas para necesidades de negocio específicas.',
      icon: LayoutGrid,
    },
  ];

  return (
    <section id="servicios" className="py-24 max-w-6xl mx-auto px-6 relative">
      <ScrollReveal>
        <div className="mb-16 text-left">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Especialidades
          </h2>
          {/* Underline highlight */}
          <div className="w-16 h-1 bg-[#d946ef] rounded-full mt-4 shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-2xl flex flex-col items-start gap-6 border border-white/5 bg-[#0a0a0d]/80 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d946ef]/10 border border-[#d946ef]/20 flex items-center justify-center text-[#f472b6] transition-transform duration-300 group-hover:scale-105">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="space-y-3 flex-grow">
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
