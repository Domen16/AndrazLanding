import { Calendar, Users, BarChart3, Sparkles } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Calendar,
      step: '01',
      title: 'Event Analysis',
      description: 'We analyze each event to determine the most efficient way to play it, how much to invest, and whether it\'s worth participating at all.'
    },
    {
      icon: Users,
      step: '02',
      title: 'Account-Specific Strategy',
      description: 'Personalized analysis tailored to your playstyle, spending tier, and in-game role — whether you\'re a field fighter, rally leader, or garrison leader.'
    },
    {
      icon: BarChart3,
      step: '03',
      title: 'Resource Optimization',
      description: 'Ensure your resources are invested where they create real value for your account, avoiding costly mistakes.'
    },
    {
      icon: Sparkles,
      step: '04',
      title: 'AI-Powered Insights',
      description: 'Ask questions and receive strategic advice based on your specific account and goals — coming soon.'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ background: 'var(--charcoal-panel)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/section-bg-2.jpg)' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--charcoal-panel) 0%, rgba(28,27,25,0.5) 50%, var(--charcoal-panel) 100%)' }} />
      
      {/* Background Decoration */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--royal-flame) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--ember-gold) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--ember-gold)' }}>
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4" style={{ color: 'var(--primary-text)', fontFamily: "'Cinzel', serif" }}>
            Your Path to <span style={{ color: 'var(--ember-gold)' }}>Strategic Excellence</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ color: 'var(--secondary-text)' }}>
            Simple process, powerful results. Here's how we help you consistently choose the smartest path for your account.
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection Line - only on large screens */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block" style={{ background: 'linear-gradient(to bottom, rgba(245,178,58,0.5), rgba(184,29,19,0.5), rgba(245,178,58,0.5))' }} />
          
          {/* Grid layout for mobile/small, timeline for large+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:block lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className={`relative lg:flex lg:flex-col lg:items-center lg:gap-6 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  {/* Card */}
                  <div className="lg:flex-1 lg:w-full">
                    <div className={`rounded-xl p-4 md:p-5 backdrop-blur-sm transition-all duration-300 hover:border-[var(--ember-gold)] ${
                      index % 2 === 0 ? 'lg:ml-auto lg:text-right' : 'lg:mr-auto lg:text-left'
                    }`} style={{ background: 'rgba(28,27,25,0.6)', border: '2px solid var(--war-bronze)', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', maxWidth: '100%' }}>
                      <div className={`flex items-center gap-3 md:gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-lg" style={{ background: 'rgba(245,178,58,0.2)' }}>
                          <Icon className="h-6 w-6 md:h-7 md:w-7" style={{ color: 'var(--ember-gold)' }} />
                        </div>
                        <div>
                          <span className="text-xs md:text-sm font-bold" style={{ color: 'var(--ember-gold)' }}>Step {step.step}</span>
                          <h3 className="text-base md:text-lg lg:text-xl font-semibold" style={{ color: 'var(--primary-text)' }}>{step.title}</h3>
                        </div>
                      </div>
                      <p className="mt-3 md:mt-4 text-sm md:text-base" style={{ color: 'var(--secondary-text)' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center Circle - hidden on mobile/tablet, shown on lg+ */}
                  <div className="hidden lg:flex relative z-10 h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 font-bold shadow-lg text-sm" style={{ borderColor: 'var(--deep-night)', background: 'var(--ember-gold)', color: 'var(--deep-night)' }}>
                    {step.step}
                  </div>
                  
                  {/* Empty Space for Layout - only on lg+ */}
                  <div className="hidden lg:block lg:flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
