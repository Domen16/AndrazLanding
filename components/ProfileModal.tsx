'use client';

import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ProfileModalProps {
  email: string;
  onClose: () => void;
}

export default function ProfileModal({ email, onClose }: ProfileModalProps) {
  const [spendingTier, setSpendingTier] = useState('');
  const [kvkStage, setKvkStage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'spending' | 'kvk' | null>(null);

  const spendingTiers = [
    'Free-to-Play (F2P) - $0',
    'Low Spender / Minnow - $0-100/month',
    'Mid Spender / Dolphin - $100-500/month',
    'High Spender - $500-1,500/month',
    'Whale - $1,500+/month',
    'Kraken - $10k+/year'
  ];

  const kvkStages = [
    'KvK 1',
    'KvK 2',
    'KvK 3',
    'Season of Conquest'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from('waitlist')
      .update({ spending_tier: spendingTier, kvk_stage: kvkStage })
      .eq('email', email);

    if (error) {
      console.error('Error updating profile:', error);
      alert('Error saving profile. Please try again.');
    }

    setIsSubmitting(false);
    onClose();
  };

  const handleSkip = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)' }}>
      <div className="relative w-full max-w-md rounded-xl backdrop-blur-md" style={{ background: 'rgba(28,27,25,0.95)', border: '2px solid var(--ember-gold)', boxShadow: '0 0 40px rgba(245,178,58,0.4)' }}>
        <button onClick={handleSkip} className="absolute right-4 top-4 p-1 rounded-lg transition-colors hover:bg-[rgba(245,178,58,0.2)]">
          <X className="h-5 w-5" style={{ color: 'var(--secondary-text)' }} />
        </button>

        <div className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>
            Thank You, Governor!
          </h3>
          <p className="text-sm mb-6" style={{ color: 'var(--secondary-text)' }}>
            You're on the waitlist! We'll keep you informed with news, free tips, and early access discounts. For better personalization, please share a bit more:
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Spending Tier Dropdown */}
            <div className="relative">
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--primary-text)' }}>
                Spending Tier
              </label>
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'spending' ? null : 'spending')}
                className="w-full px-4 py-3 rounded-lg text-sm text-left flex items-center justify-between transition-all"
                style={{ 
                  background: 'rgba(60,58,56,0.8)', 
                  border: openDropdown === 'spending' ? '2px solid var(--ember-gold)' : '2px solid var(--war-bronze)', 
                  color: spendingTier ? 'var(--primary-text)' : 'var(--secondary-text)'
                }}
              >
                <span>{spendingTier || 'Select your spending tier'}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'spending' ? 'rotate-180' : ''}`} style={{ color: 'var(--ember-gold)' }} />
              </button>
              {openDropdown === 'spending' && (
                <div className="absolute z-10 w-full mt-2 rounded-lg overflow-hidden" style={{ background: 'rgba(28,27,25,0.98)', border: '2px solid var(--ember-gold)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                  {spendingTiers.map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => {
                        setSpendingTier(tier);
                        setOpenDropdown(null);
                      }}
                      className="w-full px-4 py-3 text-sm text-left transition-all"
                      style={{ 
                        background: spendingTier === tier ? 'rgba(245,178,58,0.2)' : 'transparent',
                        color: 'var(--primary-text)',
                        borderBottom: '1px solid rgba(184,180,171,0.1)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245,178,58,0.15)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = spendingTier === tier ? 'rgba(245,178,58,0.2)' : 'transparent'}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* KvK Stage Dropdown */}
            <div className="relative">
              <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--primary-text)' }}>
                KvK Stage
              </label>
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'kvk' ? null : 'kvk')}
                className="w-full px-4 py-3 rounded-lg text-sm text-left flex items-center justify-between transition-all"
                style={{ 
                  background: 'rgba(60,58,56,0.8)', 
                  border: openDropdown === 'kvk' ? '2px solid var(--ember-gold)' : '2px solid var(--war-bronze)', 
                  color: kvkStage ? 'var(--primary-text)' : 'var(--secondary-text)'
                }}
              >
                <span>{kvkStage || 'Select your KvK stage'}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'kvk' ? 'rotate-180' : ''}`} style={{ color: 'var(--ember-gold)' }} />
              </button>
              {openDropdown === 'kvk' && (
                <div className="absolute z-10 w-full mt-2 rounded-lg overflow-hidden" style={{ background: 'rgba(28,27,25,0.98)', border: '2px solid var(--ember-gold)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                  {kvkStages.map((stage) => (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => {
                        setKvkStage(stage);
                        setOpenDropdown(null);
                      }}
                      className="w-full px-4 py-3 text-sm text-left transition-all"
                      style={{ 
                        background: kvkStage === stage ? 'rgba(245,178,58,0.2)' : 'transparent',
                        color: 'var(--primary-text)',
                        borderBottom: '1px solid rgba(184,180,171,0.1)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245,178,58,0.15)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = kvkStage === stage ? 'rgba(245,178,58,0.2)' : 'transparent'}
                    >
                      {stage}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleSkip}
                className="flex-1 px-4 py-3 rounded-lg font-semibold text-sm transition-all hover:bg-[rgba(60,58,56,0.9)]"
                style={{ background: 'rgba(60,58,56,0.8)', border: '1px solid var(--war-bronze)', color: 'var(--secondary-text)' }}
              >
                Skip
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !spendingTier || !kvkStage}
                className="flex-1 px-4 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                style={{ background: 'linear-gradient(135deg, var(--ember-gold), var(--victory-gold))', color: 'var(--deep-night)', boxShadow: '0 0 20px rgba(245,178,58,0.4)' }}
              >
                {isSubmitting ? 'Saving...' : 'Complete'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
