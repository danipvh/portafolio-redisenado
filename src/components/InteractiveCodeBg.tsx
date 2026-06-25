import { useState, useRef, MouseEvent } from 'react';
import PurpleWaveCanvas from './PurpleWaveCanvas';

export default function InteractiveCodeBg() {
  // Interactive pointer glow states
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Click handler disabled to reduce re-render load and prevent expensive particle updates
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      id="interactive-code-background"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 w-full h-full cursor-default select-none overflow-hidden bg-[#030206]"
    >
      {/* High-definition Violet/Purple Energy Wave GIF Background Simulation */}
      <PurpleWaveCanvas />

      {/* Ambient purple/magenta background glow to reinforce the video GIF mood */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] md:w-[1300px] h-[500px] bg-gradient-to-r from-[#d946ef]/15 via-[#a855f7]/25 to-[#9333ea]/15 rounded-full blur-[130px] animate-pulse-slow"></div>
        <div className="absolute -top-1/4 left-1/3 w-[600px] h-[600px] bg-[#c084fc]/10 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[#a21caf]/15 rounded-full blur-[150px]"></div>
      </div>

      {/* Real-time Dynamic CSS spotlight following mouse */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle 320px at ${mousePos.x}px ${mousePos.y}px, rgba(217, 70, 239, 0.12) 0%, transparent 100%)`,
        }}
      />

      {/* Grid overlay lines that add structural developer look */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(rgba(192,132,252,0.15)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(192,132,252,0.15)_1.5px,transparent_1.5px)] bg-[size:32px_32px] z-10"></div>

      {/* Edge vignette layout fading effect to blend background nicely */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030206] via-transparent to-[#030206]/50 z-10"></div>
    </div>
  );
}
