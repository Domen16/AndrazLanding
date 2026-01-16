import { Target, TrendingUp, Shield, Brain } from 'lucide-react';

export default function DescriptionSection() {
  const features = [
    {
      icon: Target,
      title: 'Precision Analysis',
      description: 'Every recommendation is based on calculations, opportunity cost, and long-term account growth.'
    },
    {
      icon: TrendingUp,
      title: 'Meta Intelligence',
      description: 'Strategy updated weekly to reflect game changes and meta shifts — guidance stays relevant.'
    },
    {
      icon: Shield,
      title: 'All Spending Tiers',
      description: 'From low spenders to Krakens — personalized insights tailored to your playstyle.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Advisor',
      description: 'Coming soon: Ask questions and receive strategic advice based on your specific goals.'
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background: 'var(--charcoal-panel)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--charcoal-panel) 0%, rgba(28,27,25,0.5) 50%, var(--charcoal-panel) 100%)' }} />
      
      {/* Background Decoration */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--royal-flame) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--ember-gold) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block text-xs sm:text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--ember-gold)' }}>
            Why Choose Us
          </span>
          <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
            Strategic Intelligence,<br />
            <span style={{ color: 'var(--ember-gold)' }}>Not Generic Advice</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl" style={{ color: 'var(--secondary-text)' }}>
            In a game where information is everywhere but clarity is rare, 
            we focus on evaluating choices through efficiency and long-term impact modeling.
          </p>
        </div>
        
        {/* Features Grid - Background-Anchored Callouts */}
        <div className="max-w-4xl mx-auto">
          {/* Top Row */}
          <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 pb-10">
            {features.slice(0, 2).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group flex gap-4 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-12 w-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(245,178,58,0.15)', border: '1px solid rgba(245,178,58,0.3)' }}>
                      <Icon className="h-6 w-6 transition-colors duration-300" style={{ color: 'var(--ember-gold)' }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-[var(--victory-gold)]" style={{ color: 'var(--ember-gold)' }}>
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--secondary-text)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Separator Line with Glow */}
          <div className="relative w-full h-px mb-10">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent, rgba(245,178,58,0.4), transparent)' }} />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full" style={{ background: 'var(--ember-gold)', boxShadow: '0 0 20px rgba(245,178,58,0.6)' }} />
          </div>
          
          {/* Bottom Row */}
          <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
            {features.slice(2, 4).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group flex gap-4 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-12 w-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(245,178,58,0.15)', border: '1px solid rgba(245,178,58,0.3)' }}>
                      <Icon className="h-6 w-6 transition-colors duration-300" style={{ color: 'var(--ember-gold)' }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-[var(--victory-gold)]" style={{ color: 'var(--ember-gold)' }}>
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--secondary-text)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
