import { useState } from 'react';
import { Milestone, Era } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, History } from 'lucide-react';

interface Props {
  timeline: Milestone[];
  theme: Era;
}

export default function Timeline({ timeline, theme }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % timeline.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + timeline.length) % timeline.length);

  return (
    <div className="bg-white border border-inst-line p-10">
      <h3 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
        <History size={14} />
        Historical Chronology
      </h3>

      <div className="relative mb-12">
        <div className="absolute top-0 left-0 w-px h-full bg-inst-line" />
        
        <div className="space-y-8 pl-8">
          {timeline.map((milestone, idx) => (
            <div 
              key={idx} 
              className={`relative cursor-pointer transition-all duration-500 ${idx === currentIndex ? 'opacity-100 translate-x-2' : 'opacity-30 hover:opacity-60'}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <div className={`absolute -left-[33px] top-1.5 w-2 h-2 rounded-full border border-white shadow-sm transition-colors ${idx === currentIndex ? 'bg-inst-accent' : 'bg-inst-line'}`} />
              <span className="text-[10px] font-mono font-bold text-inst-accent block mb-1">{milestone.year}</span>
              <h5 className="text-sm font-bold text-inst-ink">{milestone.title}</h5>
              {idx === currentIndex && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-xs text-inst-muted mt-2 leading-relaxed max-w-xs"
                >
                  {milestone.description}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 pt-8 border-t border-inst-line">
        <button 
          onClick={prev}
          className="w-8 h-8 rounded-full border border-inst-line flex items-center justify-center text-inst-muted hover:bg-inst-ink hover:text-white transition-all"
        >
          <ChevronLeft size={14} />
        </button>
        <span className="text-[10px] font-mono font-bold text-inst-muted">{currentIndex + 1} / {timeline.length}</span>
        <button 
          onClick={next}
          className="w-8 h-8 rounded-full border border-inst-line flex items-center justify-center text-inst-muted hover:bg-inst-ink hover:text-white transition-all"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
