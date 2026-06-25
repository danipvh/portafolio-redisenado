import { CheckCircle2 } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { motion } from 'motion/react';

const InteractiveCodeBg = lazy(() => import('./InteractiveCodeBg'));

export default function Hero() {
  const checkmarks = [
    'Desarrollo Web a Medida',
    'Soluciones Personalizadas',
    'Diseño Responsive',
    'Soporte y mantenimiento',
  ];

  return (
    <section id="hero" className="relative w-full min-h-[95vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Full-width Interactive Real-Time Typing Code Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#030206]" />}>
        <InteractiveCodeBg />
      </Suspense>

      {/* Background glow graphics to bring premium Vercel-like depth */}
      <div className="absolute top-1/4 -right-16 w-80 h-80 bg-[#d946ef]/10 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#a21caf]/10 blur-[100px] rounded-full -z-10"></div>

      {/* Centered inner container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
        <div className="w-full space-y-8 flex flex-col items-center text-center">
          <motion.h1 
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.048,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-3xl mx-auto"
          >
            {"Desarrollo soluciones web que ayudan a empresas y emprendedores a".split(" ").map((word, wordIdx, arr) => (
              <span key={`w1-${wordIdx}`} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIdx) => (
                  <motion.span 
                    key={`c-${charIdx}`} 
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 }
                    }} 
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIdx < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
            <span className="inline-block">&nbsp;</span>
            <span className="text-[#d946ef] bg-gradient-to-r from-[#e879f9] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent">
              {"crecer digitalmente.".split(" ").map((word, wordIdx, arr) => (
                <span key={`w2-${wordIdx}`} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, charIdx) => (
                    <motion.span 
                      key={`c2-${charIdx}`} 
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: { opacity: 1, y: 0 }
                      }} 
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIdx < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans text-center"
          >
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
            className="flex justify-center w-full"
          >
            <a
              href="#servicios"
              className="px-10 py-4 bg-gradient-to-r from-[#d946ef] to-[#9333ea] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(217,70,239,0.45)] hover:from-[#e879f9] hover:to-[#a855f7] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
            >
              Ver Servicios
            </a>
          </motion.div>

          {/* Benefits row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 w-full max-w-3xl mx-auto"
          >
            {checkmarks.map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#d946ef] shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
