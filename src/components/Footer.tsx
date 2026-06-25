import { Linkedin, Github, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/danipvh', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/danipvh', icon: Github },
    { label: 'WhatsApp', href: 'https://wa.me/56984022947', icon: Phone },
  ];

  return (
    <footer className="py-16 border-t border-white/5 bg-[#040406]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand DV */}
        <div className="font-display text-3xl font-extrabold tracking-tight text-white select-none">
          DV
        </div>

        {/* Links list */}
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {socialLinks.map((link) => {
            const IconComp = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase"
              >
                <IconComp className="w-3.5 h-3.5 text-[#f472b6]" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs font-sans">
          © 2026 Daniela Villarroel. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}
