import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Activity } from 'lucide-react';
import { Era } from '../types';

interface Metric {
  value: number;
  label: string;
  suffix?: string;
}

interface Props {
  metrics: Metric[];
  theme: Era;
}

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0</span>;
}

export default function ImpactMetrics({ metrics, theme }: Props) {
  return (
    <div className="bg-white border border-inst-line p-10">
      <h3 className="text-[10px] font-mono font-bold text-inst-accent uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
        <Activity size={14} />
        Impact Analytics
      </h3>

      <div className="grid grid-cols-2 gap-x-12 gap-y-10">
        {metrics.map((metric, idx) => (
          <div key={idx} className="group">
            <span className="text-[9px] font-mono font-bold text-inst-accent uppercase tracking-widest block mb-2">{metric.label}</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-serif font-black text-inst-ink group-hover:text-inst-accent transition-colors">
                <Counter value={metric.value} suffix={metric.suffix} />
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-inst-line">
        <p className="text-[9px] font-mono text-inst-muted leading-relaxed uppercase tracking-wider">
          Data verified through multiple historical sources and contemporary engineering analysis.
        </p>
      </div>
    </div>
  );
}
