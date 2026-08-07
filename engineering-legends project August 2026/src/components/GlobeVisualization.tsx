import React, { useEffect, useRef, useState } from 'react';
import { Organization } from '../types';
import { MapPin, Globe, ExternalLink } from 'lucide-react';

interface GlobeProps {
  organizations: Organization[];
  onSelectOrg: (org: Organization) => void;
  selectedOrgId?: string;
}

export const GlobeVisualization: React.FC<GlobeProps> = ({ organizations, onSelectOrg, selectedOrgId }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredOrg, setHoveredOrg] = useState<Organization | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    const height = (canvas.height = 420);
    const radius = Math.min(width, height) * 0.35;
    const cx = width / 2;
    const cy = height / 2;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Globe Background Glow
      const globeGlow = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.2);
      globeGlow.addColorStop(0, 'rgba(37, 99, 235, 0.15)');
      globeGlow.addColorStop(0.8, 'rgba(184, 115, 51, 0.08)');
      globeGlow.addColorStop(1, 'rgba(10, 14, 23, 0)');
      ctx.fillStyle = globeGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // Base Globe Sphere
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#0d1321';
      ctx.fill();
      ctx.strokeStyle = '#b87333';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw Lat/Lng Grid Lines
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)';
      ctx.lineWidth = 1;

      // Parallels
      for (let lat = -60; lat <= 60; lat += 30) {
        const radLat = (lat * Math.PI) / 180;
        const r = radius * Math.cos(radLat);
        const y = cy - radius * Math.sin(radLat);

        ctx.beginPath();
        ctx.ellipse(cx, y, r, r * 0.2, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Meridians
      for (let lng = 0; lng < 360; lng += 45) {
        const radLng = ((lng + rotation) * Math.PI) / 180;
        const x = cx + radius * Math.sin(radLng);

        ctx.beginPath();
        ctx.moveTo(x, cy - radius);
        ctx.lineTo(x, cy + radius);
        ctx.stroke();
      }

      // Rotate globe
      rotation += 0.25;

      // Draw Organization Pins
      organizations.forEach((org) => {
        // Convert lat/lng to sphere point with rotation
        const radLat = (org.coordinates.lat * Math.PI) / 180;
        const radLng = ((org.coordinates.lng + rotation) * Math.PI) / 180;

        const x = cx + radius * Math.cos(radLat) * Math.sin(radLng);
        const y = cy - radius * Math.sin(radLat);
        const visible = Math.cos(radLng) > -0.2; // Check if on front hemisphere

        if (visible) {
          const isSelected = org.id === selectedOrgId;

          // Draw Glowing Ring
          ctx.beginPath();
          ctx.arc(x, y, isSelected ? 8 : 5, 0, Math.PI * 2);
          ctx.fillStyle = isSelected ? '#d4af37' : '#b87333';
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Pulse animation for selected
          if (isSelected) {
            ctx.beginPath();
            ctx.arc(x, y, 14, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Label
          ctx.font = '10px monospace';
          ctx.fillStyle = isSelected ? '#f8fafc' : '#94a3b8';
          ctx.fillText(org.shortName, x + 10, y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [organizations, selectedOrgId]);

  return (
    <div className="relative w-full bg-[#0d1321] border border-[#b87333]/40 rounded-xl p-4 overflow-hidden">
      {/* Globe Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#94a3b8]/15 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#b87333]">
          <Globe className="w-4 h-4 animate-spin" />
          <span className="tracking-widest uppercase">GLOBAL INSTITUTIONAL NETWORK SPHERE</span>
        </div>
        <div className="text-slate-400">
          SELECT ORGANIZATIONAL PIN TO EXAMINE CHARTER
        </div>
      </div>

      {/* Canvas Globe container */}
      <div className="w-full flex justify-center py-4">
        <canvas ref={canvasRef} className="cursor-pointer max-w-full" />
      </div>

      {/* Quick Select Buttons */}
      <div className="flex flex-wrap gap-2 justify-center pt-2">
        {organizations.map((org) => (
          <button
            key={org.id}
            onClick={() => onSelectOrg(org)}
            className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              org.id === selectedOrgId
                ? 'bg-[#b87333] text-[#0a0e17] font-bold shadow-[0_0_12px_rgba(184,115,51,0.5)]'
                : 'bg-[#111827] border border-[#94a3b8]/20 text-slate-300 hover:border-[#b87333] hover:text-[#b87333]'
            }`}
          >
            <MapPin className="w-3 h-3" />
            {org.shortName}
          </button>
        ))}
      </div>
    </div>
  );
};
