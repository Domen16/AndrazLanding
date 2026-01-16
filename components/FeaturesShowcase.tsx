import FeatureCarousel from './FeatureCarousel';

export default function FeaturesShowcase() {
  return (
    <section id="features" className="relative py-20 px-6 overflow-hidden" style={{ background: 'var(--charcoal-panel)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/section-bg-1.jpg)' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--charcoal-panel) 0%, rgba(28,27,25,0.5) 50%, var(--charcoal-panel) 100%)' }} />
      
      {/* Background Decoration */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--ember-gold) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--royal-flame) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="inline-block mb-4 text-xs sm:text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--ember-gold)' }}>
            Platform Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Experience the <span style={{ color: 'var(--ember-gold)' }}>Power</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--secondary-text)' }}>
            See how our AI-driven platform transforms your gameplay with real-time insights and strategic recommendations
          </p>
        </div>
        
        <FeatureCarousel />
      </div>
    </section>
  );
}
