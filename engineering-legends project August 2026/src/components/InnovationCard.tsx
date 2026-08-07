import { Innovation, Era } from '../types';
import { getIcon } from './IconHelper';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface Props {
  innovation: Innovation;
  theme: Era;
  key?: string | number;
}

export default function InnovationCard({ innovation, theme }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-inst-line p-10 hover:shadow-2xl transition-all duration-500"
    >
      {/* Technical Corner Label */}
      <div className="absolute top-0 right-0 p-4 border-l border-b border-inst-line text-[9px] font-mono font-bold text-inst-accent uppercase tracking-widest">
        Fig. {innovation.id.toUpperCase().slice(0, 4)}
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-2/3">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-mono font-bold text-inst-accent">{innovation.year}</span>
            <div className="h-px w-8 bg-inst-line" />
            <h4 className="text-3xl font-serif font-bold text-inst-ink">{innovation.title}</h4>
          </div>

          <p className="text-base text-inst-muted leading-relaxed mb-10 max-w-xl">
            {innovation.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {innovation.details.map((detail, idx) => {
              const Icon = getIcon(detail.icon);
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-inst-line flex items-center justify-center text-inst-accent shrink-0">
                    <Icon size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-inst-accent uppercase tracking-widest block mb-1">{detail.label}</span>
                    <p className="text-xs font-medium text-inst-ink leading-snug">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison Section - Minimalist */}
        {innovation.comparison && (
          <div className="md:w-1/3 flex flex-col gap-6 border-l border-inst-line pl-12">
            <div className="space-y-2">
              <span className="text-[9px] font-mono font-bold text-inst-accent uppercase tracking-widest block">Original Design</span>
              <p className="text-xs font-bold text-inst-ink">{innovation.comparison.then.label}</p>
              <p className="text-[10px] text-inst-muted leading-relaxed">{innovation.comparison.then.description}</p>
            </div>
            
            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-inst-line" />
              <ArrowDown size={12} className="text-inst-accent" />
              <div className="h-px flex-1 bg-inst-line" />
            </div>

            <div className="space-y-2">
              <span className="text-[9px] font-mono font-bold text-inst-accent uppercase tracking-widest block">Modern Application</span>
              <p className="text-xs font-bold text-inst-ink">{innovation.comparison.now.label}</p>
              <p className="text-[10px] text-inst-muted leading-relaxed">{innovation.comparison.now.description}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
