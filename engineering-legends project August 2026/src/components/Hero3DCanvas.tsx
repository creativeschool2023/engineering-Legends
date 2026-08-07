import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Compass, ShieldCheck, Layers } from 'lucide-react';

export const Hero3DCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for repulsion
    const mouse = { x: width / 2, y: height / 2, radius: 140 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle setup
    const particleCount = Math.min(Math.floor((width * height) / 11000), 160);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      baseX: number;
      baseY: number;
    }[] = [];

    const colors = ['#9E774F', '#84603B', '#0F172A', '#64748B'];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Light alabaster radial background gradient
      const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, Math.max(width, height));
      bgGrad.addColorStop(0, '#FAF8F5');
      bgGrad.addColorStop(1, '#F2EFE9');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle blueprint grid lines
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Repulsion from mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2.5;
          p.y -= (dy / dist) * force * 2.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();

        // Connect nearby particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#9E774F';
            ctx.globalAlpha = (1 - pdist / 110) * 0.18;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen pt-28 sm:pt-36 pb-16 overflow-hidden flex items-center justify-center bg-[#FAF8F5]">
      {/* Interactive Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-auto" />

      {/* Decorative Corner Brackets for Full Screen */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#9E774F] z-10 pointer-events-none opacity-40" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#9E774F] z-10 pointer-events-none opacity-40" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#9E774F] z-10 pointer-events-none opacity-40" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#9E774F] z-10 pointer-events-none opacity-40" />

      {/* Center Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#9E774F]/40 text-[#9E774F] font-mono text-xs tracking-[0.2em] uppercase shadow-sm backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-[#9E774F]" />
          <span>EXHIBITION SERIES: GLOBAL ENGINEERING ARCHIVE</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] tracking-tight leading-[1.12] uppercase max-w-4xl mx-auto">
          We made the <span className="serif-italic italic font-normal text-[#9E774F] lowercase">world liveable</span> for You
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-xs sm:text-sm text-[#64748B] tracking-[0.18em] uppercase max-w-3xl mx-auto font-medium">
          NAVIGATING THE TECHNICAL SUPREMACY & HUMAN INGENUITY ACROSS CIVIL, MECHANICAL, & AEROSPACE FRONTIERS.
        </p>

        {/* Description */}
        <p className="font-sans text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
          From ancient stone aqueducts and steam turbines to deep-space observatories and microprocessors, explore the engineers and blueprints that built our modern world.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs uppercase tracking-widest">
          <Link
            to="/archive"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#0F172A] text-white font-bold shadow-lg hover:bg-[#1E293B] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#9E774F]" />
            ENTER HALL OF LEGENDS
          </Link>
          <Link
            to="/marvels"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white border border-[#9E774F]/50 text-[#0F172A] hover:border-[#0F172A] hover:bg-[#F4F1EA] transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md shadow-sm"
          >
            <Layers className="w-4 h-4 text-[#9E774F]" />
            ENGINEERING MARVELS HUB
          </Link>
        </div>
      </div>

      {/* Scroll Down Compass Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#9E774F] pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#64748B]">
          EXPLORE EXHIBITS
        </span>
        <div className="w-8 h-8 rounded-full border border-[#9E774F]/40 flex items-center justify-center animate-bounce bg-white/50">
          <ArrowDown className="w-4 h-4 text-[#9E774F]" />
        </div>
      </div>
    </div>
  );
};
