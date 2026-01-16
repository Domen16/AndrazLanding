'use client';

import { useState, useEffect } from 'react';
import { ChartBar, Brain, Trophy, TrendingUp, Target } from 'lucide-react';

const featureCards = [
  {
    title: 'AI Strategy Assistant',
    icon: Brain,
    content: (
      <div className="space-y-3">
        <div className="rounded-lg border border-[var(--ember-gold)]/30 bg-[var(--card-bg)]/50 p-3 text-sm">
          Focus on Sun Tzu and Joan of Arc for your tier
        </div>
        <div className="ml-auto w-fit rounded-lg border border-gray-700 bg-gray-800/30 p-3 text-sm text-gray-400">
          What about events?
        </div>
        <div className="rounded-lg border border-[var(--ember-gold)]/30 bg-[var(--card-bg)]/50 p-3 text-sm">
          Prioritize Mightiest Governor this week for maximum rewards
        </div>
        <div className="flex items-center gap-2 pt-2">
          <div className="h-2 w-2 rounded-full bg-[var(--ember-gold)] animate-pulse" />
          <div className="h-2 w-2 rounded-full bg-[var(--ember-gold)]/60 animate-pulse" style={{ animationDelay: '100ms' }} />
          <div className="h-2 w-2 rounded-full bg-[var(--ember-gold)]/30 animate-pulse" style={{ animationDelay: '200ms' }} />
        </div>
      </div>
    ),
  },
  {
    title: 'Event Analysis',
    icon: ChartBar,
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Mightiest Governor</span>
          <span className="text-[var(--ember-gold)] font-semibold">Live Now</span>
        </div>
        <div className="flex items-end justify-between gap-1.5 h-24">
          {[
            { value: 65, label: 'Day 1' },
            { value: 85, label: 'Day 2' },
            { value: 45, label: 'Day 3' },
            { value: 92, label: 'Day 4' },
            { value: 70, label: 'Day 5' },
            { value: 88, label: 'Day 6' },
          ].map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[10px] text-[var(--ember-gold)] font-medium">{bar.value}%</span>
              <div 
                className="w-full rounded-t bg-gradient-to-t from-[var(--ember-gold)] to-[var(--royal-flame)]" 
                style={{ height: `${bar.value}%` }}
              />
              <span className="text-[9px] text-gray-500">{bar.label}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="rounded border border-[var(--ember-gold)]/20 bg-[var(--card-bg)]/30 p-2 text-center">
            <div className="text-lg font-bold text-[var(--ember-gold)]">12.4M</div>
            <div className="text-[10px] text-gray-400">Optimal Points</div>
          </div>
          <div className="rounded border border-[var(--royal-flame)]/20 bg-[var(--card-bg)]/30 p-2 text-center">
            <div className="text-lg font-bold text-[var(--royal-flame)]">Top 5%</div>
            <div className="text-[10px] text-gray-400">Expected Rank</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Meta Insights',
    icon: Trophy,
    content: (
      <div className="space-y-3">
        {[
          { name: 'Infantry March', score: 92 },
          { name: 'Cavalry Rally', score: 87 },
          { name: 'Archer Garrison', score: 78 },
        ].map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span className="text-[var(--ember-gold)]">{item.score}%</span>
            </div>
            <div className="h-2 rounded-full bg-gray-800/50">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[var(--ember-gold)] to-[var(--royal-flame)]"
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Account Optimizer',
    icon: Target,
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-[var(--ember-gold)]/20 bg-[var(--card-bg)]/30 p-3 text-center">
            <div className="text-2xl font-bold text-[var(--ember-gold)]">94%</div>
            <div className="text-xs text-gray-400">Efficiency</div>
          </div>
          <div className="rounded-lg border border-[var(--royal-flame)]/20 bg-[var(--card-bg)]/30 p-3 text-center">
            <div className="text-2xl font-bold text-[var(--royal-flame)]">+15M</div>
            <div className="text-xs text-gray-400">Power Gain</div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-700/30 bg-gray-800/20 p-3 text-sm text-center">
          Next milestone: VIP 14 in 23 days
        </div>
      </div>
    ),
  },
  {
    title: 'Weekly Updates',
    icon: TrendingUp,
    content: (
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg border border-[var(--ember-gold)]/20 bg-[var(--card-bg)]/30 p-3">
          <div className="h-10 w-10 rounded-full bg-[var(--ember-gold)]/20 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-[var(--ember-gold)]" />
          </div>
          <div>
            <div className="text-sm font-medium">Meta Shift Detected</div>
            <div className="text-xs text-gray-400">Infantry rising in S4</div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-[var(--royal-flame)]/20 bg-[var(--card-bg)]/30 p-3">
          <div className="h-10 w-10 rounded-full bg-[var(--royal-flame)]/20 flex items-center justify-center">
            <Target className="h-5 w-5 text-[var(--royal-flame)]" />
          </div>
          <div>
            <div className="text-sm font-medium">New Event Guide</div>
            <div className="text-xs text-gray-400">Zenith of Power analysis</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featureCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff % featureCards.length) + featureCards.length) % featureCards.length;
    
    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        opacity: 1,
        zIndex: 30,
        filter: 'blur(0px)',
      };
    } else if (normalizedDiff === 1 || normalizedDiff === featureCards.length - 1) {
      const direction = normalizedDiff === 1 ? 1 : -1;
      return {
        transform: `translateX(${direction * 60}%) scale(0.85)`,
        opacity: 0.4,
        zIndex: 20,
        filter: 'blur(3px)',
      };
    } else if (normalizedDiff === 2 || normalizedDiff === featureCards.length - 2) {
      const direction = normalizedDiff === 2 ? 1 : -1;
      return {
        transform: `translateX(${direction * 100}%) scale(0.7)`,
        opacity: 0.15,
        zIndex: 10,
        filter: 'blur(6px)',
      };
    }
    return {
      transform: 'translateX(150%) scale(0.5)',
      opacity: 0,
      zIndex: 0,
      filter: 'blur(8px)',
    };
  };

  return (
    <div className="relative h-[400px] lg:h-[450px]">
      <div className="absolute inset-0 flex items-center justify-center">
        {featureCards.map((card, index) => {
          const style = getCardStyle(index);
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="absolute w-[320px] lg:w-[380px] rounded-2xl border border-[var(--ember-gold)]/30 bg-[var(--card-bg)]/90 backdrop-blur-sm p-6 transition-all duration-700 ease-in-out"
              style={{
                transform: style.transform,
                opacity: style.opacity,
                zIndex: style.zIndex,
                filter: style.filter,
                boxShadow: style.zIndex === 30 
                  ? '0 0 40px rgba(245, 178, 58, 0.2), 0 0 80px rgba(245, 178, 58, 0.1)' 
                  : 'none',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[var(--ember-gold)]/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[var(--ember-gold)]" />
                </div>
                <h3 className="text-lg font-semibold tracking-wide uppercase">
                  {card.title}
                </h3>
              </div>
              {card.content}
            </div>
          );
        })}
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {featureCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'w-8 bg-[var(--ember-gold)]' 
                : 'w-2 bg-[var(--ember-gold)]/30 hover:bg-[var(--ember-gold)]/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
