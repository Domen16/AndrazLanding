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

  const stats = [
    { value: 'Weekly', label: 'Strategy Updates' },
    { value: 'All', label: 'Spending Tiers' },
    { value: '100%', label: 'Data-Driven' },
    { value: 'AI', label: 'Assistant Coming' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ background: 'var(--deep-night)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url(/section-bg-1.jpg)' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--deep-night) 0%, rgba(15,14,13,0.6) 50%, var(--deep-night) 100%)' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--ember-gold)' }}>
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4" style={{ color: 'var(--primary-text)', fontFamily: "'Cinzel', serif" }}>
            Strategic Intelligence,<br />
            <span style={{ color: 'var(--ember-gold)' }}>Not Generic Advice</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ color: 'var(--secondary-text)' }}>
            In a game where information is everywhere but clarity is rare, 
            we focus on evaluating choices through efficiency and long-term impact modeling.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12 md:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(28,27,25,0.6)', border: '2px solid var(--war-bronze)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(245,178,58,0.1), transparent)' }} />
                <div className="relative z-10">
                  <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg" style={{ background: 'rgba(245,178,58,0.2)' }}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: 'var(--ember-gold)' }} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--primary-text)' }}>{feature.title}</h3>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--secondary-text)' }}>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm md:grid-cols-4" style={{ background: 'rgba(28,27,25,0.4)', border: '2px solid var(--war-bronze)' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--ember-gold)' }}>{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm" style={{ color: 'var(--secondary-text)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
