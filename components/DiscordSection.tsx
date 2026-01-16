import { Users, Lightbulb, Gift, MessageCircle, User, Crown, Swords, Zap } from 'lucide-react';

export default function DiscordSection() {
  const features = [
    { icon: Users, title: 'Active Community', description: 'Connect with fellow governors' },
    { icon: Lightbulb, title: 'Shape Development', description: 'Your feedback matters' },
    { icon: Gift, title: 'Exclusive Rewards', description: 'Early supporter benefits' }
  ];

  const channels = [
    { name: '# general-discussion', active: false },
    { name: '# event-analysis', active: false },
    { name: '# strategy-tips', active: false },
    { name: '# feature-requests', active: true }
  ];

  const memberIcons = [User, Crown, Swords, Zap];

  return (
    <section id="discord" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden" style={{ background: 'var(--charcoal-panel)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/section-bg-2.jpg)' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--charcoal-panel), rgba(28,27,25,0.7), var(--charcoal-panel))' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-block text-xs sm:text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--ember-gold)' }}>
                Community
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: 'var(--primary-text)', fontFamily: "'Cinzel', serif" }}>
                Join Our <span style={{ color: 'var(--ember-gold)' }}>Discord</span>
              </h2>
              <p className="max-w-lg text-base sm:text-lg" style={{ color: 'var(--secondary-text)' }}>
                Be part of our growing community. Share strategies, provide feedback, 
                and help us build the perfect tool for Rise of Kingdoms players.
              </p>
            </div>
            
            <div className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="rounded-lg p-3 sm:p-4 text-center backdrop-blur-sm"
                    style={{ background: 'rgba(28,27,25,0.5)', border: '1px solid var(--war-bronze)' }}
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 sm:h-8 sm:w-8" style={{ color: 'var(--ember-gold)' }} />
                    <h4 className="font-semibold text-sm sm:text-base" style={{ color: 'var(--primary-text)' }}>{feature.title}</h4>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--secondary-text)' }}>{feature.description}</p>
                  </div>
                );
              })}
            </div>
            
            <a 
              href="https://discord.gg/VusfRNnY"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-12 sm:h-14 px-6 sm:px-8 rounded-lg font-bold text-base sm:text-lg transition-all hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center" 
              style={{ background: 'linear-gradient(135deg, var(--ember-gold), var(--victory-gold))', color: 'var(--deep-night)', boxShadow: '0 0 30px rgba(245,178,58,0.5)' }}
            >
              <MessageCircle className="inline-block mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
              Join Discord Server
            </a>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(245,178,58,0.2), rgba(184,29,19,0.1), rgba(245,178,58,0.2))' }} />
            <div className="relative rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm" style={{ background: 'rgba(28,27,25,0.5)', border: '1px solid var(--war-bronze)' }}>
              <div className="space-y-4 sm:space-y-6">
                {/* Discord Preview Header */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl" style={{ background: 'rgba(245,178,58,0.2)' }}>
                    <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: 'var(--ember-gold)' }} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--primary-text)' }}>RoK Strategy Hub</h4>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--secondary-text)' }}>Official Community Server</p>
                  </div>
                </div>
                
                {/* Channels Preview */}
                <div className="space-y-2">
                  {channels.map((channel, index) => (
                    <div 
                      key={index}
                      className="rounded-lg p-2 sm:p-3" 
                      style={channel.active 
                        ? { background: 'rgba(245,178,58,0.1)', border: '1px solid rgba(245,178,58,0.3)' }
                        : { background: 'rgba(60,58,56,0.3)' }
                      }
                    >
                      <span 
                        className="text-xs sm:text-sm" 
                        style={{ color: channel.active ? 'var(--ember-gold)' : 'var(--secondary-text)' }}
                      >
                        {channel.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Online Members */}
                <div className="flex items-center gap-2 sm:gap-3 rounded-lg p-3 sm:p-4" style={{ background: 'rgba(60,58,56,0.2)' }}>
                  <div className="flex -space-x-2">
                    {memberIcons.map((Icon, i) => (
                      <div
                        key={i}
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: 'var(--charcoal-panel)', background: 'rgba(245,178,58,0.3)' }}
                      >
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: 'var(--ember-gold)' }} />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--secondary-text)' }}>
                    Governors waiting, join them!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
