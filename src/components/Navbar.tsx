import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <nav id="navbar-main" className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo / DV Initials with Brand Tag */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#ffff]/5 border border-white/10 flex items-center justify-center font-display text-base font-bold text-white group-hover:border-[#d946ef]/60 group-hover:text-[#d946ef] transition-all duration-300 shadow-inner">
              DV
            </div>
            <div className="flex flex-col justify-center select-none">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-[#d946ef] transition-colors duration-300 leading-tight">
                Daniela Villarroel
              </span>
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase font-mono leading-tight mt-0.5">
                Desarrollo Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-[#d946ef] transition-colors text-xs font-semibold tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Call to Action Button - Like Nexio's Clean High Contrast button */}
          <div className="hidden md:block">
            <motion.a
              href="#contacto"
              className="inline-block px-5 py-2.5 bg-white text-black text-xs font-bold tracking-wider uppercase rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
              animate={{
                x: [0, -2, 2, -2, 2, -1, 1, 0],
                y: [0, 1, -1, 1, -1, 1, -1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut"
              }}
            >
              Solicitar Cotización
            </motion.a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Alternar menú"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
 
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden bg-[#07070a] border-b border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-[#d946ef] transition-all py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <motion.a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-300"
              animate={{
                x: [0, -2, 2, -2, 2, -1, 1, 0],
                y: [0, 1, -1, 1, -1, 1, -1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut"
              }}
            >
              Solicitar Cotización
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
