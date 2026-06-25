import { useState, useEffect } from 'react';

const CODE_SNIPPETS = [
  `// Daniela Villarroel - Especialista en JavaScript
const developer = {
  name: 'Daniela Villarroel',
  role: 'Líder Full Stack JavaScript',
  skills: ['React', 'Node.js', 'PostgreSQL', 'Express'],
  passion: 'Soluciones web de altísima calidad'
};`,
  `// Recuperando métricas clave de ROI para el cliente
async function getPerformanceMetrics(projectId) {
  const stats = await db.query(
    'SELECT speed, conversion FROM projects WHERE id = $1',
    [projectId]
  );
  return stats.rows[0];
}`,
  `// Estado React fluido y transiciones suaves
export function GlowButton() {
  const [clicked, setClicked] = useState(false);
  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? 'Optimizando...' : 'Ver Servicios'}
    </button>
  );
}`,
  `// Envío de formulario con EmailJS
send(serviceId, templateId, {
  from_name: 'Cliente',
  from_email: 'cliente@ejemplo.com',
  company: 'Empresa',
  project_type: 'Sitio Corporativo',
  message: 'Mensaje del formulario'
}, publicKey)
  .then(() => console.log('Mensaje enviado'))
  .catch((error) => console.error(error));`
];

export default function CodeTerminal() {
  const [currentSnippetIdx, setCurrentSnippetIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentCode = CODE_SNIPPETS[currentSnippetIdx];
    
    if (!isDeleting) {
      if (charIndex < currentCode.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentCode.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 22); // Typing speed
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3500); // Wait time before backspacing
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentCode.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 10); // Delete speed
      } else {
        setIsDeleting(false);
        setCurrentSnippetIdx((prev) => (prev + 1) % CODE_SNIPPETS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, currentSnippetIdx, isDeleting]);

  const renderHighlightedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Check if it's a comment line
      if (line.trim().startsWith('//')) {
        return (
          <span key={idx} className="text-slate-400 italic font-medium block min-h-[1.25rem]">
            {line}
          </span>
        );
      }
      
      const parts = [];
      const regex = /(\bconst\b|\bdeclarations\b|\bfunction\b|\bexport\b|\breturn\b|\bimport\b|\bawait\b|\basync\b)|('[^']*')/g;
      let match;
      let lastIndex = 0;
      
      while ((match = regex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        if (match[1]) { // Keyword
          parts.push(<span key={match.index} className="text-[#c026d3] font-bold">{match[1]}</span>);
        } else if (match[2]) { // String
          parts.push(<span key={match.index} className="text-emerald-600">{match[2]}</span>);
        }
        lastIndex = regex.lastIndex;
      }
      
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }
      
      return (
        <span key={idx} className="text-slate-800 block min-h-[1.25rem]">
          {parts.length > 0 ? parts : ' '}
        </span>
      );
    });
  };

  return (
    <div className="w-full max-w-[460px] p-5 rounded-xl font-mono text-[11px] md:text-xs text-left select-none pointer-events-none bg-white border border-slate-200/80 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
          <span className="text-[10px] text-slate-400 ml-2 font-mono tracking-wider">daniela-stream.js</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-[#c026d3] uppercase font-bold tracking-widest animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          <span>Escritura en vivo</span>
        </div>
      </div>
      
      <pre className="whitespace-pre-wrap leading-relaxed font-semibold font-mono min-h-[140px] text-slate-800">
        {renderHighlightedText(displayedText)}
        <span className="inline-block w-1.5 h-3.5 bg-fuchsia-500 ml-0.5 animate-pulse"></span>
      </pre>
    </div>
  );
}
