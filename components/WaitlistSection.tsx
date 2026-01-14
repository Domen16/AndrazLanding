'use client'

import { useState } from 'react';
import { Sparkles, Users } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailMessage, setEmailMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('loading');

    const { error } = await supabase
      .from('waitlist')
      .insert({ email });

    if (error) {
      if (error.code === '23505') {
        setEmailMessage('Already on waitlist!');
      } else {
        setEmailMessage('Error. Try again.');
      }
      setEmailStatus('error');
    } else {
      setEmailMessage('Success! We\'ll notify you.');
      setEmailStatus('success');
      setEmail('');
    }
  };
  return (
    <section id="waitlist" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden" style={{ background: 'var(--charcoal-panel)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/section-bg-2.jpg)' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--charcoal-panel) 0%, rgba(28,27,25,0.5) 50%, var(--charcoal-panel) 100%)' }} />
      
      {/* Background Decoration */}
      <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--ember-gold) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute right-0 bottom-1/4 h-[300px] w-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--royal-flame) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-6xl relative z-10 mx-auto px-4 sm:px-6">
        {/* Main CTA Card */}
        <div className="relative overflow-visible">
          {/* Glowing border card */}
          <div className="relative rounded-2xl backdrop-blur-sm p-1" style={{ border: '1px solid rgba(245,178,58,0.3)', background: 'linear-gradient(to bottom right, rgba(60,58,56,0.9), rgba(60,58,56,0.8), rgba(60,58,56,0.7))' }}>
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to right, rgba(245,178,58,0.1), transparent, rgba(245,178,58,0.05))' }} />
            
            <div className="relative rounded-xl backdrop-blur-md px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16 lg:pr-80" style={{ background: 'rgba(60,58,56,0.6)' }}>
              {/* Content */}
              <div className="relative z-10 max-w-2xl">
                <span className="mb-3 sm:mb-4 inline-block text-xs sm:text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--ember-gold)' }}>
                  Early Access
                </span>
                
                <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'var(--primary-text)', fontFamily: "'Cinzel', serif" }}>
                  Join the fight and claim your{" "}
                  <span style={{ color: 'var(--ember-gold)' }}>strategic edge!</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="h-12 sm:h-14 w-full sm:flex-1 rounded-lg px-4 text-sm sm:text-base backdrop-blur-sm outline-none"
                    style={{ background: 'rgba(28,27,25,0.5)', border: '1px solid var(--war-bronze)', color: 'var(--primary-text)' }}
                    required
                    disabled={emailStatus === 'loading' || emailStatus === 'success'}
                  />
                  <button 
                    type="submit" 
                    disabled={emailStatus === 'loading' || emailStatus === 'success'}
                    className="h-12 sm:h-14 px-6 sm:px-8 rounded-lg font-bold text-sm sm:text-base whitespace-nowrap transition-all hover:scale-105 w-full sm:w-auto disabled:opacity-50" 
                    style={{ background: 'linear-gradient(135deg, var(--ember-gold), var(--victory-gold))', color: 'var(--deep-night)', boxShadow: '0 0 30px rgba(245,178,58,0.5)' }}
                  >
                    <Sparkles className="inline-block mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    {emailStatus === 'loading' ? 'Joining...' : emailStatus === 'success' ? '✓ Joined!' : 'Join Waitlist'}
                  </button>
                </form>
                
                {emailMessage && (
                  <p className="mt-3 text-sm" style={{ color: emailStatus === 'success' ? 'var(--victory-gold)' : 'var(--royal-flame)' }}>
                    {emailMessage}
                  </p>
                )}
                
                <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm" style={{ color: 'var(--secondary-text)' }}>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: 'var(--ember-gold)' }} />
                    <span>500+ governors already waiting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: 'var(--ember-gold)' }} />
                    <span className="font-semibold" style={{ color: 'var(--ember-gold)' }}>50% OFF first month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Character extending beyond card */}
          <div className="absolute bottom-0 right-0 hidden pointer-events-none lg:block">
            <img 
              src="/king-commander.png" 
              alt="King Commander" 
              className="h-[500px] w-auto object-contain object-bottom xl:h-[450px]"
              style={{ 
                filter: 'drop-shadow(0 0 30px rgba(245,178,58,0.3))'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
