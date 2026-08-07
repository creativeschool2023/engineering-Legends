import React, { useState } from 'react';
import { X, Settings, Cpu, Play, RotateCcw, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Discipline } from '../types';

interface SimulatorProps {
  discipline: Discipline;
  onClose: () => void;
}

export const BlueprintSimulatorModal: React.FC<SimulatorProps> = ({ discipline, onClose }) => {
  const [param1, setParam1] = useState(50);
  const [param2, setParam2] = useState(75);
  const [simulating, setSimulating] = useState(false);
  const [results, setResults] = useState<null | {
    safetyFactor: number;
    efficiency: number;
    stressThreshold: number;
    status: 'OPTIMAL' | 'WARNING' | 'CRITICAL';
  }>(null);

  const runSimulation = () => {
    setSimulating(true);
    setTimeout(() => {
      const calcEfficiency = Math.min(99.4, Number((param1 * 0.4 + param2 * 0.5 + 20).toFixed(1)));
      const calcSafetyFactor = Number((1.2 + (100 - param1) * 0.025).toFixed(2));
      const calcStress = Number((param1 * 1.8 + param2 * 2.1).toFixed(0));

      let status: 'OPTIMAL' | 'WARNING' | 'CRITICAL' = 'OPTIMAL';
      if (calcSafetyFactor < 1.4 || calcStress > 250) status = 'CRITICAL';
      else if (calcSafetyFactor < 1.8) status = 'WARNING';

      setResults({
        safetyFactor: calcSafetyFactor,
        efficiency: calcEfficiency,
        stressThreshold: calcStress,
        status
      });
      setSimulating(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e17]/95 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0d1321] border border-[#b87333] rounded-xl shadow-[0_0_50px_rgba(184,115,51,0.25)] p-6 sm:p-8 overflow-hidden text-slate-100">
        {/* Blueprint Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #b87333 1px, transparent 1px),
                              linear-gradient(to bottom, #b87333 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* L Corner Brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#b87333]" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#b87333]" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#b87333]" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#b87333]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#111827] border border-[#94a3b8]/20 text-slate-400 hover:text-[#b87333] hover:border-[#b87333] transition-all z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="relative z-10 space-y-2 pb-4 border-b border-[#94a3b8]/20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#b87333] tracking-widest uppercase">
            <Settings className="w-4 h-4 animate-spin" />
            <span>INTERACTIVE BLUEPRINT SIMULATOR V3.0</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-slate-100">{discipline.name}</h3>
          <p className="text-xs text-slate-400 font-sans">{discipline.description}</p>
        </div>

        {/* Controls Grid */}
        <div className="relative z-10 py-6 space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                <span>PARAM A: STRUCTURAL LOAD / VELOCITY INPUT</span>
                <span className="text-[#b87333] font-bold">{param1} %</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={param1}
                onChange={(e) => setParam1(Number(e.target.value))}
                className="w-full accent-[#b87333] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                <span>PARAM B: OPERATIONAL DENSITY / FREQUENCY</span>
                <span className="text-[#b87333] font-bold">{param2} %</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={param2}
                onChange={(e) => setParam2(Number(e.target.value))}
                className="w-full accent-[#b87333] cursor-pointer"
              />
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-4">
            <button
              onClick={runSimulation}
              disabled={simulating}
              className="flex-1 bg-gradient-to-r from-[#b87333] to-[#d4af37] text-[#0a0e17] font-mono font-bold text-xs uppercase tracking-widest py-3 rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              {simulating ? 'EXECUTING CALCULATIONS...' : 'RUN SIMULATION CALCULATIONS'}
            </button>
            <button
              onClick={() => {
                setParam1(50);
                setParam2(75);
                setResults(null);
              }}
              className="p-3 bg-[#111827] border border-[#94a3b8]/30 text-slate-300 hover:text-[#b87333] rounded-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Simulation Output Box */}
          {results && (
            <div className="mt-4 p-4 rounded-lg bg-[#111827] border border-[#b87333]/40 space-y-3 font-mono text-xs animate-fadeIn">
              <div className="flex justify-between items-center pb-2 border-b border-[#94a3b8]/20">
                <span className="text-[#b87333] tracking-wider uppercase">SIMULATION RESULTS:</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    results.status === 'OPTIMAL'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : results.status === 'WARNING'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}
                >
                  STATUS: {results.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="bg-[#0d1321] p-2 rounded border border-[#94a3b8]/15">
                  <div className="text-[10px] text-slate-400">SAFETY FACTOR</div>
                  <div className="text-lg font-bold text-[#b87333]">{results.safetyFactor}x</div>
                </div>
                <div className="bg-[#0d1321] p-2 rounded border border-[#94a3b8]/15">
                  <div className="text-[10px] text-slate-400">EFFICIENCY</div>
                  <div className="text-lg font-bold text-[#d4af37]">{results.efficiency}%</div>
                </div>
                <div className="bg-[#0d1321] p-2 rounded border border-[#94a3b8]/15">
                  <div className="text-[10px] text-slate-400">STRESS (MPa)</div>
                  <div className="text-lg font-bold text-[#2563eb]">{results.stressThreshold}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
