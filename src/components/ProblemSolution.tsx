import { AlertCircle, HelpCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import ScrollReveal from './ScrollReveal';

export default function ProblemSolution() {
  const problems = [
    {
      title: 'Procesos Manuales',
      desc: 'Las tareas repetitivas y la gestión manual consumen tiempo, reducen la eficiencia y dificultan la operación diaria.',
    },
    {
      title: 'Presencia Digital Desactualizada',
      desc: 'Un sitio poco profesional o desactualizado puede afectar la confianza y alejar oportunidades de negocio.',
    },
    {
      title: 'Baja Conversión',
      desc: 'Si la experiencia de usuario no es clara, rápida e intuitiva, tus potenciales clientes abandonarán antes de dar el siguiente paso.',
    },
  ];

  return (
    <section className="py-24 bg-[#030303]/40 relative overflow-hidden">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Problems */}
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                La tecnología adecuada puede marcar la diferencia en tu negocio.</h2>
              <div className="space-y-6">
                {problems.map((prob, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm leading-snug uppercase tracking-wide">
                        {prob.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Solution Card */}
            <div className="relative">
              {/* Ambient glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d946ef] to-[#a21caf] rounded-2xl opacity-[0.15] blur-xl"></div>
              
              <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative bg-[#0a0a0d]/85">
                <div className="absolute -top-3.5 right-6 bg-[#d946ef] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                  SOLUCIÓN
                </div>

                <div className="space-y-6">
                  <blockquote className="font-display text-xl md:text-2xl text-white font-semibold leading-relaxed tracking-tight">
                    Creo herramientas digitales modernas que permiten optimizar procesos y fortalecer la presencia digital.
                  </blockquote>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    No es solo código: son soluciones diseñadas para mejorar la operación, aportar valor y acompañar el crecimiento de cada proyecto.
                  </p>

                  <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#d946ef]/10 border border-[#d946ef]/20 flex items-center justify-center shrink-0 animate-pulse">
                      <Sparkles className="w-5 h-5 text-[#f472b6]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white">
                      Enfoque en Experiencia de usuario.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
