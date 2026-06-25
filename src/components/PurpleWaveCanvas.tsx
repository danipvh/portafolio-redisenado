import { useEffect, useRef } from 'react';

interface PurpleWaveCanvasProps {
  isMobile?: boolean;
}

export default function PurpleWaveCanvas({ isMobile = false }: PurpleWaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let step = 0;

    const render = () => {
      step += isMobile ? 0.01 : 0.015;

      ctx.clearRect(0, 0, width, height);

      const centerY = height / 2;
      const numWaves = isMobile ? 10 : 18;
      const minDim = Math.min(width, height);
      const responsiveAmplitude = minDim * (isMobile ? 0.12 : 0.18);
      const baseFreq = (Math.PI * (isMobile ? 2.0 : 2.2)) / width;
      const xStep = isMobile ? 14 : 8;

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < numWaves; i++) {
        ctx.beginPath();

        const norm = i / numWaves;
        const freq = baseFreq + (i % 5) * (baseFreq * 0.12);
        const phase = step * (0.65 + (i % 4) * 0.2) + (i * Math.PI) / 18;
        const maxAmplitude = responsiveAmplitude * Math.sin(norm * Math.PI);

        let color: string;
        let alpha = 0.04 + Math.sin(norm * Math.PI) * 0.12;

        if (i % 4 === 0) {
          color = `rgba(0, 241, 255, ${alpha})`;
        } else if (i % 4 === 1) {
          color = `rgba(45, 212, 191, ${alpha})`;
        } else if (i % 4 === 2) {
          color = `rgba(52, 211, 153, ${alpha})`;
        } else {
          color = `rgba(6, 182, 212, ${alpha})`;
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = isMobile ? 1 : 1 + (i % 2) * 0.35;
        ctx.shadowColor = 'transparent';

        for (let x = 0; x <= width; x += xStep) {
          const xRatio = x / width;
          const envelope = Math.sin(xRatio * Math.PI);
          const yOffset = Math.sin(x * freq + phase) * Math.cos(x * (baseFreq * 0.4) - phase * 0.28) * maxAmplitude * Math.pow(envelope, 1.25);
          const sign = i % 2 === 0 ? 1 : -1;
          const y = centerY + yOffset * sign;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      const coreGradient = ctx.createRadialGradient(
        width / 2,
        centerY + Math.sin(step * 1.2) * 6,
        0,
        width / 2,
        centerY + Math.sin(step * 1.2) * 6,
        minDim * 0.35
      );
      coreGradient.addColorStop(0, 'rgba(204, 251, 241, 0.15)');
      coreGradient.addColorStop(0.3, 'rgba(0, 241, 255, 0.08)');
      coreGradient.addColorStop(0.7, 'rgba(45, 212, 191, 0.03)');
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = coreGradient;
      ctx.fillRect(0, 0, width, height);

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 block"
    />
  );
}
