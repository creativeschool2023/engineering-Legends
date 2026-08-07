import React from 'react';
import { Engineer } from '../types';

interface PortraitProps {
  engineer: Engineer;
  className?: string;
  showPlateId?: boolean;
}

export const EngineerPortrait: React.FC<PortraitProps> = ({ engineer, className = '', showPlateId = true }) => {
  const getPortraitArtwork = (id: string) => {
    switch (id) {
      case 'imhotep':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-amber-500/80">
            <defs>
              <linearGradient id="imh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#0a0e17" />
              </linearGradient>
              <linearGradient id="gold-copper" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#b87333" />
              </linearGradient>
            </defs>
            <rect width="500" height="600" fill="url(#imh-grad)" />
            {/* Pyramid Silhouettes */}
            <path d="M 50 500 L 220 220 L 390 500 Z" fill="none" stroke="#b87333" strokeWidth="1.5" opacity="0.3" />
            <path d="M 220 220 L 220 500" stroke="#b87333" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            <path d="M 180 500 L 320 280 L 460 500 Z" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.2" />
            {/* Steps of Saqqara */}
            <g stroke="#b87333" strokeWidth="1.5" fill="none" opacity="0.5">
              <rect x="120" y="440" width="260" height="30" />
              <rect x="140" y="410" width="220" height="30" />
              <rect x="160" y="380" width="180" height="30" />
              <rect x="180" y="350" width="140" height="30" />
              <rect x="200" y="320" width="100" height="30" />
              <rect x="220" y="290" width="60" height="30" />
            </g>
            {/* Stylized Bust Profile */}
            <g opacity="0.85">
              {/* Head / Nemes headcloth outline */}
              <path d="M 250 140 C 200 140 180 180 175 220 C 170 260 160 300 130 360 L 370 360 C 340 300 330 260 325 220 C 320 180 300 140 250 140 Z" fill="none" stroke="url(#gold-copper)" strokeWidth="2.5" />
              {/* Shoulder drape */}
              <path d="M 130 360 L 100 480 L 400 480 L 370 360" fill="none" stroke="#b87333" strokeWidth="1.5" />
              {/* Facial silhouette line */}
              <path d="M 250 170 C 230 170 220 190 220 210 C 220 230 235 240 245 250 L 235 270 C 220 270 210 280 200 300" fill="none" stroke="#f8fafc" strokeWidth="2" opacity="0.7" />
              {/* Papyrus scroll in hand */}
              <rect x="210" y="380" width="80" height="15" rx="3" fill="#b87333" opacity="0.6" stroke="#d4af37" strokeWidth="1" />
            </g>
            {/* Hieroglyphic and Geometry overlays */}
            <circle cx="250" cy="140" r="100" fill="none" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.3" />
            <text x="250" y="550" textAnchor="middle" fill="#b87333" fontFamily="monospace" fontSize="12" letterSpacing="3">
              SAQQARA ARCHITECTURAL VECTOR
            </text>
          </svg>
        );

      case 'archimedes':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-blue-400/80">
            <defs>
              <linearGradient id="arch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#0a0e17" />
              </linearGradient>
            </defs>
            <rect width="500" height="600" fill="url(#arch-grad)" />
            {/* Archimedes Screw Spiral */}
            <g stroke="#2563eb" strokeWidth="1.5" fill="none" opacity="0.4">
              <line x1="80" y1="480" x2="420" y2="120" strokeWidth="3" />
              <path d="M 80 480 Q 120 440 100 400 Q 80 360 140 320 Q 200 280 180 240 Q 160 200 240 160 Q 320 120 420 120" />
              <circle cx="250" cy="300" r="180" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="4 8" />
            </g>
            {/* Greek Toga & Scholar Silhouette */}
            <g opacity="0.85">
              {/* Toga drape lines */}
              <path d="M 180 240 Q 250 180 320 240 L 360 480 L 140 480 Z" fill="none" stroke="#b87333" strokeWidth="2" />
              <path d="M 210 260 Q 250 320 290 260" fill="none" stroke="#d4af37" strokeWidth="1.5" />
              <path d="M 250 150 C 220 150 200 180 200 210 Q 250 230 300 210 C 300 180 280 150 250 150 Z" fill="none" stroke="#f8fafc" strokeWidth="2" opacity="0.8" />
              {/* Lever & Globe */}
              <line x1="100" y1="520" x2="400" y2="380" stroke="#d4af37" strokeWidth="2" />
              <circle cx="360" cy="400" r="25" fill="none" stroke="#b87333" strokeWidth="2" />
            </g>
            <text x="250" y="560" textAnchor="middle" fill="#2563eb" fontFamily="monospace" fontSize="12" letterSpacing="3">
              HYDROSTATIC LEVER & SCREW MECHANICS
            </text>
          </svg>
        );

      case 'hero':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-amber-500/80">
            <rect width="500" height="600" fill="#0d1321" />
            {/* Aeolipile Steam Sphere */}
            <circle cx="250" cy="240" r="90" fill="none" stroke="#b87333" strokeWidth="3" opacity="0.8" />
            <circle cx="250" cy="240" r="70" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="6 6" />
            {/* Steam Jets */}
            <path d="M 160 240 Q 120 210 100 240" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.7" />
            <path d="M 340 240 Q 380 270 400 240" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.7" />
            {/* Boiler Base Stand */}
            <path d="M 180 440 L 250 330 L 320 440 Z" fill="none" stroke="#b87333" strokeWidth="2" />
            <rect x="150" y="440" width="200" height="20" fill="none" stroke="#d4af37" strokeWidth="1.5" />
            <text x="250" y="550" textAnchor="middle" fill="#b87333" fontFamily="monospace" fontSize="12" letterSpacing="3">
              AEOLIPILE STEAM REACTION SPHERE
            </text>
          </svg>
        );

      case 'al-khwarizmi':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-emerald-400/80">
            <rect width="500" height="600" fill="#0a0e17" />
            {/* Mathematical Grid & Arabic Matrix */}
            <g stroke="#10b981" strokeWidth="0.5" opacity="0.25">
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={`h-${i}`} x1="50" y1={50 + i * 50} x2="450" y2={50 + i * 50} />
              ))}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v-${i}`} x1="50 + i * 44" y1="50" x2={50 + i * 44} y2="500" />
              ))}
            </g>
            {/* Algebra Square Completion Diagram */}
            <rect x="170" y="180" width="160" height="160" fill="none" stroke="#d4af37" strokeWidth="2" />
            <line x1="170" y1="240" x2="330" y2="240" stroke="#b87333" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="230" y1="180" x2="230" y2="340" stroke="#b87333" strokeWidth="1.5" strokeDasharray="4 4" />
            {/* Persian Scholar Silhouette */}
            <path d="M 250 120 C 220 120 200 140 200 170 Q 250 180 300 170 C 300 140 280 120 250 120 Z" fill="none" stroke="#f8fafc" strokeWidth="2" opacity="0.8" />
            <text x="250" y="550" textAnchor="middle" fill="#10b981" fontFamily="monospace" fontSize="12" letterSpacing="3">
              AL-JABR ALGORITHMIC VECTOR
            </text>
          </svg>
        );

      case 'fatima-al-fihri':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-amber-400/80">
            <rect width="500" height="600" fill="#0d1321" />
            {/* Andalusian Horseshoe Arches */}
            <path d="M 120 450 L 120 280 C 120 200 180 150 250 150 C 320 150 380 200 380 280 L 380 450" fill="none" stroke="#d4af37" strokeWidth="2.5" />
            <path d="M 160 450 L 160 300 C 160 240 200 200 250 200 C 300 200 340 240 340 300 L 340 450" fill="none" stroke="#b87333" strokeWidth="1.5" />
            {/* Courtyard Water Basin */}
            <ellipse cx="250" cy="420" rx="90" ry="25" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.7" />
            {/* Moroccan Female Scholar Silhouette */}
            <path d="M 250 220 C 220 220 210 240 210 270 Q 250 290 290 270 C 290 240 280 220 250 220 Z" fill="none" stroke="#f8fafc" strokeWidth="2" opacity="0.8" />
            <text x="250" y="550" textAnchor="middle" fill="#d4af37" fontFamily="monospace" fontSize="12" letterSpacing="3">
              AL-QARAWIYYIN UNIVERSITY FEZ 859 AD
            </text>
          </svg>
        );

      case 'banu-musa':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-cyan-400/80">
            <rect width="500" height="600" fill="#0a0e17" />
            {/* Pegged Sequencer Drum */}
            <rect x="150" y="200" width="200" height="120" rx="10" fill="none" stroke="#06b6d4" strokeWidth="2" />
            {/* Peg pins */}
            <g fill="#d4af37">
              <circle cx="180" cy="230" r="4" />
              <circle cx="220" cy="250" r="4" />
              <circle cx="260" cy="220" r="4" />
              <circle cx="300" cy="280" r="4" />
              <circle cx="200" cy="290" r="4" />
              <circle cx="280" cy="260" r="4" />
            </g>
            {/* Water Siphon Pipes */}
            <path d="M 120 400 Q 150 320 250 320 Q 350 320 380 400" fill="none" stroke="#b87333" strokeWidth="2" />
            <text x="250" y="550" textAnchor="middle" fill="#06b6d4" fontFamily="monospace" fontSize="12" letterSpacing="3">
              HYDRO-SEQUENCER AUTOMATA 850 AD
            </text>
          </svg>
        );

      case 'abbas-ibn-firnas':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-amber-300/80">
            <rect width="500" height="600" fill="#0f172a" />
            {/* Monoplane Feather-Silk Glider Wings */}
            <path d="M 50 300 Q 250 120 450 300 Q 250 240 50 300 Z" fill="none" stroke="#d4af37" strokeWidth="2.5" />
            <path d="M 100 280 L 180 340 M 150 260 L 220 340 M 350 280 L 270 340 M 300 260 L 230 340" stroke="#b87333" strokeWidth="1.5" />
            {/* Aviator Harness */}
            <circle cx="250" cy="280" r="15" stroke="#f8fafc" strokeWidth="2" fill="none" />
            <text x="250" y="550" textAnchor="middle" fill="#d4af37" fontFamily="monospace" fontSize="12" letterSpacing="3">
              CÓRDOBA AERO-GLIDER FLIGHT 875 AD
            </text>
          </svg>
        );

      case 'al-zahrawi':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-rose-400/80">
            <rect width="500" height="600" fill="#0d1321" />
            {/* Surgical Scalpel & Forceps Mechanics */}
            <path d="M 150 150 L 320 450" stroke="#f43f5e" strokeWidth="3" />
            <path d="M 350 150 L 180 450" stroke="#b87333" strokeWidth="2" />
            <circle cx="250" cy="300" r="20" stroke="#d4af37" strokeWidth="2" fill="none" />
            {/* Catgut Suture Thread Coil */}
            <path d="M 120 480 Q 250 420 380 480" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="250" y="550" textAnchor="middle" fill="#f43f5e" fontFamily="monospace" fontSize="12" letterSpacing="3">
              KITAB AL-TASRIF SURGICAL METALLURGY
            </text>
          </svg>
        );

      case 'mariam-al-astrolabiya':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-yellow-400/80">
            <rect width="500" height="600" fill="#0a0e17" />
            {/* Brass Astrolabe Plate & Rete Star Pointers */}
            <circle cx="250" cy="270" r="140" fill="none" stroke="#d4af37" strokeWidth="3" />
            <circle cx="250" cy="270" r="110" fill="none" stroke="#b87333" strokeWidth="1.5" strokeDasharray="4 6" />
            {/* Star Pointer Rays */}
            <path d="M 250 130 L 250 410 M 110 270 L 390 270 M 150 170 L 350 370 M 350 170 L 150 370" stroke="#94a3b8" strokeWidth="0.5" opacity="0.6" />
            <text x="250" y="550" textAnchor="middle" fill="#d4af37" fontFamily="monospace" fontSize="12" letterSpacing="3">
              ALEPPO BRASS ASTROLABE SPHERE
            </text>
          </svg>
        );

      case 'ibn-al-haytham':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-indigo-400/80">
            <rect width="500" height="600" fill="#0f172a" />
            {/* Camera Obscura Dark Chamber */}
            <rect x="100" y="150" width="300" height="260" fill="none" stroke="#6366f1" strokeWidth="2" />
            {/* Pinhole Aperture & Converging Light Beams */}
            <circle cx="100" cy="280" r="4" fill="#6366f1" />
            <line x1="20" y1="180" x2="400" y2="380" stroke="#e0e7ff" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="20" y1="380" x2="400" y2="180" stroke="#e0e7ff" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="250" y="550" textAnchor="middle" fill="#6366f1" fontFamily="monospace" fontSize="12" letterSpacing="3">
              CAMERA OBSCURA OPTICS 1021 AD
            </text>
          </svg>
        );

      case 'al-biruni':
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-teal-400/80">
            <rect width="500" height="600" fill="#0a0e17" />
            {/* Earth Sphere & Mountain Dip Horizon Angle */}
            <circle cx="250" cy="380" r="160" fill="none" stroke="#14b8a6" strokeWidth="2" />
            <path d="M 120 220 L 250 150 L 380 220" stroke="#d4af37" strokeWidth="2" fill="none" />
            <line x1="250" y1="150" x2="380" y2="380" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
            <text x="250" y="550" textAnchor="middle" fill="#14b8a6" fontFamily="monospace" fontSize="12" letterSpacing="3">
              EARTH CIRCUMFERENCE GEODESY 6339.6 KM
            </text>
          </svg>
        );

      case 'al-jazari':
      default:
        return (
          <svg viewBox="0 0 500 600" className="w-full h-full text-copper-400/80">
            <rect width="500" height="600" fill="#0d1321" />
            {/* Crankshaft & Reciprocating Piston Pump */}
            <circle cx="250" cy="220" r="60" fill="none" stroke="#b87333" strokeWidth="3" />
            <line x1="250" y1="220" x2="310" y2="220" stroke="#d4af37" strokeWidth="4" />
            <line x1="310" y1="220" x2="380" y2="340" stroke="#f8fafc" strokeWidth="2" />
            <rect x="340" y="340" width="80" height="100" fill="none" stroke="#b87333" strokeWidth="2" />
            <text x="250" y="550" textAnchor="middle" fill="#b87333" fontFamily="monospace" fontSize="12" letterSpacing="3">
              CRANKSHAFT RECIPROCATING HYDRO PUMP
            </text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#0a0e17] border border-[#b87333]/40 rounded-lg group ${className}`}>
      {/* Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(184, 115, 51, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(184, 115, 51, 0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* L-Shaped Copper Corner Brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#b87333] z-20" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#b87333] z-20" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#b87333] z-20" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#b87333] z-20" />

      {/* Plate ID Badge */}
      {showPlateId && (
        <div className="absolute top-4 right-4 z-30 bg-[#0a0e17]/90 border border-dashed border-[#b87333] px-3 py-1 rounded text-[11px] font-mono text-[#b87333] tracking-wider uppercase backdrop-blur-md">
          PLATE ID: {engineer.plateId}
        </div>
      )}

      {/* Main Vector / Canvas Artwork */}
      <div className="w-full h-full flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">
        {getPortraitArtwork(engineer.id)}
      </div>

      {/* Bottom Vignette Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/80 to-transparent pointer-events-none z-10" />
    </div>
  );
};
