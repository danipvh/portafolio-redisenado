import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Sparkles, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { send } from '@emailjs/browser';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Sitio Corporativo',
    description: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      tempErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email inválido';
    }
    if (!formData.description.trim()) tempErrors.description = 'La descripción es requerida';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          project_type: formData.projectType,
          message: formData.description,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Sitio Corporativo',
        description: '',
      });
    } catch (error) {
      console.error(error);
      alert('No se pudo enviar el mensaje. Revisa la consola para más detalles.');
    } finally {
      setSubmitting(false);
    }
  };  return (
    <section id="contacto" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left info column */}
          <ScrollReveal direction="left">
            <div className="space-y-8 text-left">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                ¿Tienes una idea o proyecto?
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
                Hablemos sobre cómo podemos transformar tus necesidades técnicas en una solución digital.
              </p>

              <div className="space-y-6 pt-4">
                {/* Email non-clickable container */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300">
                    <Mail className="w-5 h-5 text-[#f472b6]" />
                  </div>
                  <span className="text-gray-400 text-base font-semibold">
                    dv.dev.js@gmail.com
                  </span>
                </div>

                {/* LinkedIn clickable container */}
                <a 
                  href="https://www.linkedin.com/in/danipvh" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#d946ef]/20 group-hover:border-[#d946ef]/40 transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-[#f472b6]" />
                  </div>
                  <span className="text-gray-400 hover:text-white transition-colors text-base font-semibold">
                    Perfil en LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Form container */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative">
              {/* Soft decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#d946ef]/15 to-[#a21caf]/15 rounded-3xl opacity-40 blur-xl"></div>
              
              <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 relative bg-[#0a0a0d]/90">
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-[#d946ef]/15 border border-[#d946ef]/30 rounded-full flex items-center justify-center mx-auto text-[#f472b6]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display text-2xl font-bold text-white tracking-tight">
                        ¡Mensaje enviado con éxito!
                      </h4>
                      <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed font-sans">
                        Gracias por ponerte en contacto. Revisaré tu propuesta y te responderé en el menor tiempo posible. 
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Row 1: Nombre + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1 text-left">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-pink-400">
                          Nombre
                        </label>
                        <input
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-0 border-b border-white/10 focus:border-[#d946ef] focus:ring-0 transition-all py-3 text-sm text-white placeholder-white/20 focus:outline-none"
                        />
                        {errors.name && <span className="text-red-400 text-xs mt-1 font-semibold">{errors.name}</span>}
                      </div>

                      <div className="flex flex-col gap-1 text-left">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-pink-400">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="email@ejemplo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-0 border-b border-white/10 focus:border-[#d946ef] focus:ring-0 transition-all py-3 text-sm text-white placeholder-white/20 focus:outline-none"
                        />
                        {errors.email && <span className="text-red-400 text-xs mt-1 font-semibold">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Row 2: Empresa + Tipo Proyecto */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1 text-left">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-pink-400">
                          Empresa
                        </label>
                        <input
                          type="text"
                          placeholder="Nombre de tu empresa"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-transparent border-0 border-b border-white/10 focus:border-[#d946ef] focus:ring-0 transition-all py-3 text-sm text-white placeholder-white/20 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-1 text-left">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-pink-400">
                          Tipo de Proyecto
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-transparent border-0 border-b border-white/10 focus:border-[#d946ef] focus:ring-0 transition-all py-3 text-sm text-white focus:outline-none"
                        >
                          <option value="Sitio Corporativo" className="bg-[#0a0a0d] text-white">Sitio Corporativo</option>
                          <option value="E-commerce" className="bg-[#0a0a0d] text-white">E-commerce</option>
                          <option value="Sistema de Gestión" className="bg-[#0a0a0d] text-white">Sistema de Gestión</option>
                          <option value="Web App a medida" className="bg-[#0a0a0d] text-white">Web App a medida</option>
                          <option value="Otro" className="bg-[#0a0a0d] text-white">Otro</option>
                        </select>
                      </div>
                    </div>

                    {/* Description field */}
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-[10px] tracking-widest uppercase font-bold text-pink-400">
                        Descripción del Proyecto
                      </label>
                      <textarea
                        placeholder="Cuéntame un poco más sobre tu idea..."
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-white/10 focus:border-[#d946ef] focus:ring-0 transition-all py-3 text-sm text-white placeholder-white/20 focus:outline-none resize-none"
                      ></textarea>
                      {errors.description && <span className="text-red-400 text-xs mt-1 font-semibold">{errors.description}</span>}
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-[#d946ef] text-white font-bold tracking-widest uppercase text-xs rounded-full hover:bg-[#a21caf] glow-button-primary shadow-lg shadow-[#d946ef]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-55 cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Enviar Mensaje</span>
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
