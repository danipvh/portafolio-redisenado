import { Code2, Gauge, Brain } from 'lucide-react';
import { motion } from 'motion/react';
import ScrollReveal from './ScrollReveal';
import danidev from '../assets/images/danidev.png';

export default function About() {
  const traits = [
    { label: 'Clean Code', icon: Code2 },
    { label: 'Performance', icon: Gauge },
    { label: 'Problem Solver', icon: Brain },
  ];

  return (
    <section id="sobre-mi" className="py-24 max-w-6xl mx-auto px-6 relative overflow-hidden">
      
      {/* Glow graphics */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d946ef]/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#a21caf]/5 blur-[100px] rounded-full -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Photo of Daniela at laptop */}
        <div className="lg:col-span-5 relative flex justify-center order-last lg:order-first w-full pb-6 lg:pb-0">
          <ScrollReveal direction="left">
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-float group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-tr from-[#d946ef]/20 via-[#a21caf]/10 to-transparent blur-3xl rounded-full"></div>
              <img
                src={danidev}
                alt="Daniela Villarroel trabajando"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right column: Biography info */}
        <div className="lg:col-span-7 text-left">
          <ScrollReveal direction="right" delay={0.15}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Sobre mí
                </h2>
                <div className="w-16 h-1 bg-[#d946ef] rounded-full shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
              </div>

              <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-sans">
                <p>
                  Soy Desarrolladora Web especializada en el diseño y desarrollo de soluciones digitales para emprendedores, profesionales y pequeñas empresas. <br></br>
                  Mi enfoque va más allá de la creación de software: busco comprender a fondo las necesidades y objetivos de cada negocio para transformar ideas, procesos y desafíos en herramientas digitales funcionales.
                </p>
                <p>
                  Trabajo principalmente con tecnologías del ecosistema JavaScript, creando sitios y plataformas web intuitivas, eficientes y alineadas con los objetivos de cada cliente.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                {traits.map((trait, index) => {
                  const TraitIcon = trait.icon;
                  return (
                    <div key={index} className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider text-white">
                      <div className="w-9 h-9 rounded-xl bg-[#d946ef]/10 border border-[#d946ef]/20 flex items-center justify-center text-[#f472b6]">
                        <TraitIcon className="w-4.5 h-4.5" />
                      </div>
                      <span>{trait.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
