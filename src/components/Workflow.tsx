import { motion } from 'motion/react';
import ScrollReveal from './ScrollReveal';

export default function Workflow() {
  const steps = [
    {
      num: 1,
      title: 'Descubrimiento',
      desc: 'Entender tus necesidades y objetivos del proyecto.',
    },
    {
      num: 2,
      title: 'Planificación',
      desc: 'Roadmap técnico y arquitectura de datos.',
    },
    {
      num: 3,
      title: 'Diseño UI/UX',
      desc: 'Interfaces intuitivas y prototipos funcionales.',
    },
    {
      num: 4,
      title: 'Desarrollo',
      desc: 'Implementación de soluciones técnicas.',
    },
    {
      num: 5,
      title: 'Lanzamiento',
      desc: 'Despliegue y optimización en producción.',
    },
    {
      num: 6,
      title: 'Soporte',
      desc: 'Mantenimiento y actualizaciones opcionales a convenir.',
    },
  ];

  return (
    <section id="proceso" className="py-24 max-w-6xl mx-auto px-6 relative overflow-hidden">
      
      {/* Decorative center badge matching Nexio website's capsule with lines */}
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d946ef]/30"></div>
            <div className="px-4 py-1.5 rounded-full border border-[#d946ef]/20 bg-[#d946ef]/5 text-[10px] font-bold uppercase tracking-widest text-[#f472b6] select-none">
              Metodología
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d946ef]/30"></div>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
            Flujo de Trabajo
          </h2>
        </div>
      </ScrollReveal>

      {/* Timeline Steps */}
      <ScrollReveal delay={0.25}>
        <div className="relative">
          {/* Horizontal connector line on desktop screens only */}
          <div className="hidden lg:block absolute top-[24px] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d946ef]/20 to-transparent -z-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative text-center space-y-4 flex flex-col items-center group"
              >
                {/* Step indicator circle with beautiful fuchsia shadows */}
                <div className="w-12 h-12 rounded-full bg-[#0a0a0d] border-2 border-[#d946ef]/30 text-[#f472b6] flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#d946ef] group-hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                  {step.num}
                </div>

                {/* Step header / description */}
                <div className="space-y-1.5 px-2">
                  <h5 className="font-display font-bold text-white text-base tracking-tight leading-tight">
                    {step.title}
                  </h5>
                  <p className="text-gray-400 text-xs leading-relaxed font-sans max-w-[160px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
