'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
import ProfileModal from './ProfileModal';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function HeroSection() {
  const [showText, setShowText] = useState(false);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailMessage, setEmailMessage] = useState('');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('loading');

    // Check if email already exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('waitlist')
      .select('email, spending_tier, kvk_stage')
      .eq('email', email)
      .single();

    if (existingUser) {
      // User exists - check if profile is complete
      if (!existingUser.spending_tier || !existingUser.kvk_stage) {
        setEmailMessage('Already on waitlist, Governor!');
        setEmailStatus('error');
        setSubmittedEmail(email);
        setShowProfileModal(true);
      } else {
        setEmailMessage('Already on waitlist, Governor!');
        setEmailStatus('error');
      }
      return;
    }

    // New user - insert
    const { error } = await supabase
      .from('waitlist')
      .insert({ email });

    if (error) {
      setEmailMessage('Error. Try again.');
      setEmailStatus('error');
    } else {
      setEmailMessage('Success, Governor! You will be notified.');
      setEmailStatus('success');
      setSubmittedEmail(email);
      setEmail('');
      setShowProfileModal(true);
      
      // Send welcome email
      fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      }).catch(err => console.error('Failed to send welcome email:', err));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--deep-night)' }}>
      <div className="absolute inset-0 z-0">
        <Image src="/hero5.png" alt="ROK Strategy" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--deep-night) 0%, transparent 50%, var(--deep-night) 100%)' }}></div>
      </div>

      <div className="absolute inset-0 z-5" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(15,14,13,0.5) 100%)' }}></div>

      {/* AI Strategy Assistant - Top Left */}
      <div className="absolute left-8 top-20 z-0 hidden lg:left-16 lg:top-24 lg:block">
        <div className="backdrop-blur-md rounded-xl overflow-hidden opacity-75" style={{ background: 'rgba(15,14,13,0.9)', border: '2px solid var(--ember-gold)', boxShadow: '0 0 30px rgba(245,178,58,0.4)', animation: 'gentleFloat 6s ease-in-out infinite', width: '240px' }}>
          <div className="px-4 py-3" style={{ background: 'rgba(28,27,25,0.8)', borderBottom: '1px solid rgba(245,178,58,0.3)' }}>
            <h3 className="text-sm font-bold" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>AI Strategy Assistant</h3>
          </div>
          <div className="p-3 space-y-2" style={{ minHeight: '180px' }}>
            <div className="flex justify-end">
              <div className="px-3 py-2 rounded-lg max-w-[85%]" style={{ background: 'rgba(60,58,56,0.8)' }}>
                <p className="text-xs" style={{ color: 'var(--secondary-text)' }}>What Commander should I invest in?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="px-3 py-2 rounded-lg max-w-[85%]" style={{ background: 'linear-gradient(135deg, rgba(245,178,58,0.2), rgba(245,178,58,0.1))', border: '1px solid rgba(245,178,58,0.3)', boxShadow: '0 0 10px rgba(245,178,58,0.2)' }}>
                <p className="text-xs" style={{ color: 'var(--primary-text)' }}>Since you are a Free-to-Play going to KvK 1, Sun Tzu Aethfled is the best march for you right now.</p>
              </div>
            </div>
          </div>
          <div className="px-3 pb-3 pt-4">
            <div className="mb-2">
              <p className="text-[10px]" style={{ color: 'rgba(184,180,171,0.6)' }}>Source: Weekly Event Guide • KvK Meta • Commander Tier List</p>
            </div>
            <div className="flex gap-2 p-2 rounded-lg" style={{ background: 'rgba(28,27,25,0.6)', border: '1px solid rgba(245,178,58,0.2)' }}>
              <input type="text" placeholder="Ask your strategist…" className="flex-1 bg-transparent text-xs outline-none pt-0.5" style={{ color: 'var(--primary-text)' }} disabled />
              <button className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'var(--ember-gold)', boxShadow: '0 0 10px rgba(245,178,58,0.5)' }}>
                <span className="text-xs" style={{ color: 'var(--deep-night)' }}>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Commander Progress - Top Right */}
      <div className="absolute right-8 top-32 z-0 hidden lg:right-16 lg:top-40 lg:block">
        <div className="backdrop-blur-md rounded-xl p-4 opacity-75" style={{ background: 'rgba(28,27,25,0.7)', border: '2px solid var(--ember-gold)', boxShadow: '0 0 30px rgba(245,178,58,0.4)', animation: 'gentleFloat 8s ease-in-out infinite', animationDelay: '2s', width: '200px' }}>
          <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--ember-gold)' }}>Commander Progress</h3>
          <div className="space-y-2">
            {['Qin Shi Huang', 'Liu Che', 'Achilles'].map((commander, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--primary-text)' }}>
                  <span>{commander}</span>
                  <span>{100 - idx * 15}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(245,178,58,0.2)' }}>
                  <div className="h-full rounded-full" style={{ width: `${100 - idx * 15}%`, background: 'var(--ember-gold)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kill Points - Bottom Right */}
      <div className="absolute right-32 bottom-32 z-0 hidden lg:right-56 lg:bottom-40 xl:block">
        <div className="backdrop-blur-md rounded-xl p-3 opacity-75" style={{ background: 'rgba(28,27,25,0.7)', border: '2px solid var(--ember-gold)', boxShadow: '0 0 30px rgba(245,178,58,0.4)', animation: 'gentleFloat 7s ease-in-out infinite', animationDelay: '1s', width: '200px' }}>
          <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--ember-gold)' }}>Kill Points</h3>
          <div className="flex items-end justify-between gap-2" style={{ height: '64px' }}>
            {[
              { label: 'T1', value: '2M', height: 25 },
              { label: 'T2', value: '18M', height: 40 },
              { label: 'T3', value: '30M', height: 55 },
              { label: 'T4', value: '700M', height: 100 },
              { label: 'T5', value: '250M', height: 75 }
            ].map((tier, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center" style={{ height: '100%' }}>
                <div className="w-full flex flex-col justify-end" style={{ height: '48px' }}>
                  <div className="w-full rounded-t relative flex items-center justify-center" style={{ height: `${tier.height}%`, background: idx % 2 === 0 ? 'var(--ember-gold)' : 'var(--insight-blue)' }}>
                    <span className="text-[7px] font-bold" style={{ color: 'var(--deep-night)' }}>{tier.value}</span>
                  </div>
                </div>
                <span className="text-[8px] mt-1" style={{ color: 'var(--secondary-text)' }}>{tier.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Alerts - Bottom Left */}
      <div className="absolute left-32 bottom-32 z-0 hidden lg:left-56 lg:bottom-40 xl:block">
        <div className="backdrop-blur-md rounded-xl p-3 opacity-75" style={{ background: 'rgba(28,27,25,0.7)', border: '2px solid var(--ember-gold)', boxShadow: '0 0 30px rgba(245,178,58,0.4)', animation: 'gentleFloat 9s ease-in-out infinite', animationDelay: '3s', width: '180px' }}>
          <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--ember-gold)' }}>Event Alerts</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded" style={{ background: 'rgba(245,178,58,0.1)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--ember-gold)' }}></div>
              <span className="text-xs" style={{ color: 'var(--primary-text)' }}>Mightiest Governor</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded" style={{ background: 'rgba(245,178,58,0.1)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--victory-gold)' }}></div>
              <span className="text-xs" style={{ color: 'var(--primary-text)' }}>Wheel of Fortune</span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showText && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center py-12 sm:py-16 md:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif", textShadow: '0 0 40px rgba(245,178,58,0.5)', lineHeight: '1.2' }}>
              Master Rise of Kingdoms
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-4" style={{ color: 'var(--primary-text)', textShadow: '0 2px 10px rgba(0,0,0,0.8)', lineHeight: '1.6' }}>
              Stop wasting gems on bad advice. Get personalized strategies from a top-tier player, powered by AI that understands your spending tier.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4 sm:mb-6 px-4">
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email to join the waitlist" 
                required 
                disabled={emailStatus === 'loading' || emailStatus === 'success'} 
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg outline-none transition-all text-base sm:text-lg" 
                style={{ background: 'rgba(28,27,25,0.9)', border: '2px solid var(--ember-gold)', color: 'var(--primary-text)' }} 
              />
              <button 
                type="submit" 
                disabled={emailStatus === 'loading' || emailStatus === 'success'} 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 disabled:opacity-50" 
                style={{ background: 'linear-gradient(135deg, var(--ember-gold), var(--victory-gold))', color: 'var(--deep-night)', boxShadow: '0 0 30px rgba(245,178,58,0.5)' }}
              >
                {emailStatus === 'loading' ? 'Joining...' : emailStatus === 'success' ? '✓ Joined!' : 'Join Waitlist'}
              </button>
            </form>
            
            {emailMessage && <p className="text-sm mb-4 sm:mb-6 px-4" style={{ color: emailStatus === 'success' ? 'var(--victory-gold)' : 'var(--royal-flame)' }}>{emailMessage}</p>}

            {/* Clinking Swords Animation */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                <div className="absolute" style={{ width: '6px', height: '80px', background: 'linear-gradient(to bottom, #E8E8E8 0%, #B8B8B8 10%, #D4D4D4 30%, #A8A8A8 70%, #707070 90%, #4A4A4A 100%)', transform: 'rotate(-45deg)', transformOrigin: 'center center', animation: 'swordClash1 3s ease-in-out forwards', boxShadow: '2px 0 4px rgba(0,0,0,0.4), inset 1px 0 2px rgba(255,255,255,0.5)', borderRadius: '1px' }}>
                  <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '16px solid #C0C0C0', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))' }}></div>
                  <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '28px', height: '4px', background: 'linear-gradient(to right, #8B7355 0%, #A0826D 50%, #8B7355 100%)', borderRadius: '2px', boxShadow: '0 2px 3px rgba(0,0,0,0.5)' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '16px', background: 'linear-gradient(to bottom, #654321 0%, #8B4513 50%, #654321 100%)', borderRadius: '2px' }}></div>
                  <div style={{ position: 'absolute', bottom: '-26px', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '6px', background: '#8B7355', borderRadius: '50%' }}></div>
                </div>
                <div className="absolute" style={{ width: '6px', height: '80px', background: 'linear-gradient(to bottom, #E8E8E8 0%, #B8B8B8 10%, #D4D4D4 30%, #A8A8A8 70%, #707070 90%, #4A4A4A 100%)', transform: 'rotate(45deg)', transformOrigin: 'center center', animation: 'swordClash2 3s ease-in-out forwards', boxShadow: '-2px 0 4px rgba(0,0,0,0.4), inset -1px 0 2px rgba(255,255,255,0.5)', borderRadius: '1px' }}>
                  <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '16px solid #C0C0C0', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))' }}></div>
                  <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '28px', height: '4px', background: 'linear-gradient(to right, #8B7355 0%, #A0826D 50%, #8B7355 100%)', borderRadius: '2px', boxShadow: '0 2px 3px rgba(0,0,0,0.5)' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '16px', background: 'linear-gradient(to bottom, #654321 0%, #8B4513 50%, #654321 100%)', borderRadius: '2px' }}></div>
                  <div style={{ position: 'absolute', bottom: '-26px', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '6px', background: '#8B7355', borderRadius: '50%' }}></div>
                </div>
                {[...Array(20)].map((_, i) => {
                  const angle = (i * 18 + Math.random() * 10) * (Math.PI / 180);
                  const distance = 30 + Math.random() * 35;
                  const size = 2 + Math.random() * 2;
                  return (
                    <div key={i} className="absolute top-1/2 left-1/2" style={{ width: `${size}px`, height: `${size}px`, background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,215,0,1) 40%, rgba(255,140,0,0.8) 70%, transparent 100%)', borderRadius: '50%', animation: `sparkFly 3s ease-out forwards`, animationDelay: '0s', boxShadow: '0 0 6px rgba(255,215,0,1)', '--spark-x': `${Math.cos(angle) * distance}px`, '--spark-y': `${Math.sin(angle) * distance}px` } as React.CSSProperties}></div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{ width: Math.random() * 4 + 2 + 'px', height: Math.random() * 4 + 2 + 'px', background: 'radial-gradient(circle, rgba(245,178,58,0.8) 0%, rgba(245,178,58,0) 70%)', left: Math.random() * 100 + '%', top: Math.random() * 100 + '%', animation: `float ${Math.random() * 10 + 15}s linear infinite`, animationDelay: Math.random() * 5 + 's', boxShadow: '0 0 10px rgba(245,178,58,0.6)' }} />
        ))}
      </div>

      {showProfileModal && (
        <ProfileModal email={submittedEmail} onClose={() => setShowProfileModal(false)} />
      )}
    </section>
  );
}
