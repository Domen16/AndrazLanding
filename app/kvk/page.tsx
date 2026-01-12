'use client'

import { Target, Shield, Swords, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function KvKPage() {
  const [activeTab, setActiveTab] = useState('KvK 1');
  const tabs = ['KvK 1', 'KvK 2', 'KvK 3'];

  const kvkData: Record<string, any> = {
    'KvK 1': {
      commanders: [{ name: 'Sun Tzu', role: 'Support Infantry' }, { name: 'Joan of Arc', role: 'Support/Gather' }],
      marchSetups: ['2 Infantry Marches (Sun Tzu + Scipio primary)', '1 Archer March (Yi Seong-Gye if available)'],
      powerGoals: ['Reach 10M power minimum', 'T4 troops start becoming valuable'],
      focus: ['Join strong alliance immediately', 'Participate in all rallies and flags'],
      avoid: ["Don't fight solo unless absolutely necessary", 'Avoid wasting troops on lost battles'],
      image: 'https://images.unsplash.com/photo-1764011643213-1f3b3691f678?w=1200&h=600&fit=crop'
    },
    'KvK 2': {
      commanders: [{ name: 'Richard I', role: 'Tank Infantry' }, { name: 'Alexander', role: 'Infantry Nuke' }],
      marchSetups: ['2 Infantry Marches (Richard tank + Alex nuke)', '1-2 Archer Marches (YSG focused)'],
      powerGoals: ['Reach 25M power recommended', 'Full T4 armies essential'],
      focus: ['Equipment becomes critical - farm barbarians', 'Participate in strategic objective captures'],
      avoid: ['Avoid fighting without proper equipment', "Don't waste T4 troops on small skirmishes"],
      image: 'https://images.unsplash.com/photo-1621453319203-e9b11259681b?w=1200&h=600&fit=crop'
    },
    'KvK 3': {
      commanders: [{ name: 'Guan Yu', role: 'Infantry Powerhouse' }, { name: 'Saladin', role: 'Cavalry Nuke' }],
      marchSetups: ['3 Meta Infantry Marches (Guan, Alex, Richard)', '2 Archer Marches (Artemisia + YSG)'],
      powerGoals: ['Reach 40M+ power', 'Multiple T5 march queues'],
      focus: ['Join rallies for crystal technology', 'Focus on wonder battles'],
      avoid: ["Don't fight without legendary equipment", 'Never solo against organized opponents'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=600&fit=crop'
    }
  };

  const currentData = kvkData[activeTab];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--deep-night)' }}>
      {/* Cover Banner */}
      <div className="w-full h-64 flex items-center justify-center" style={{ backgroundColor: 'var(--charcoal-panel)', borderBottom: '2px solid var(--war-bronze)' }}>
        <span className="text-8xl">⚔️</span>
      </div>

      <div className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl mb-6" style={{ color: 'var(--primary-text)', fontFamily: "'Playfair Display', serif" }}>KvK Strategy</h1>
        <p className="text-xl mb-12" style={{ color: 'var(--secondary-text)' }}>Master Kingdom vs Kingdom with phase-specific strategies</p>

        <div className="flex gap-4 mb-8">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="px-8 py-3 rounded-lg transition-all duration-300" style={{ backgroundColor: activeTab === tab ? 'var(--ember-gold)' : 'var(--smoke-grey)', color: activeTab === tab ? 'var(--deep-night)' : 'var(--secondary-text)' }}>
              {tab}
            </button>
          ))}
        </div>

        <div className="mb-8 rounded-xl overflow-hidden w-full h-80 flex items-center justify-center" style={{ backgroundColor: 'var(--charcoal-panel)' }}>
          <span className="text-8xl" style={{ color: 'var(--ember-gold)' }}>⚔️</span>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--charcoal-panel)', border: '1px solid var(--war-bronze)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Swords size={32} style={{ color: 'var(--ember-gold)' }} />
              <h3 className="text-2xl" style={{ color: 'var(--primary-text)' }}>Recommended Commanders</h3>
            </div>
            <div className="space-y-3">
              {currentData.commanders.map((cmd: any, index: number) => (
                <div key={index} className="p-4 rounded-lg" style={{ backgroundColor: 'var(--smoke-grey)' }}>
                  <p className="font-semibold" style={{ color: 'var(--primary-text)' }}>{cmd.name}</p>
                  <p className="text-sm" style={{ color: 'var(--secondary-text)' }}>{cmd.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--charcoal-panel)', border: '1px solid var(--war-bronze)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Shield size={32} style={{ color: 'var(--insight-blue)' }} />
              <h3 className="text-2xl" style={{ color: 'var(--primary-text)' }}>March Setups</h3>
            </div>
            <div className="space-y-3">
              {currentData.marchSetups.map((setup: string, index: number) => (
                <div key={index} className="p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: 'var(--smoke-grey)' }}>
                  <span style={{ color: 'var(--insight-blue)' }}>•</span>
                  <p style={{ color: 'var(--primary-text)' }}>{setup}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--charcoal-panel)', border: '1px solid var(--war-bronze)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Target size={32} style={{ color: 'var(--victory-gold)' }} />
              <h3 className="text-2xl" style={{ color: 'var(--primary-text)' }}>Power Goals</h3>
            </div>
            <div className="space-y-3">
              {currentData.powerGoals.map((goal: string, index: number) => (
                <div key={index} className="p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: 'var(--smoke-grey)' }}>
                  <span style={{ color: 'var(--victory-gold)' }}>✓</span>
                  <p style={{ color: 'var(--primary-text)' }}>{goal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--charcoal-panel)', border: '1px solid var(--war-bronze)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Target size={32} style={{ color: 'var(--ember-gold)' }} />
              <h3 className="text-2xl" style={{ color: 'var(--primary-text)' }}>What to Focus On</h3>
            </div>
            <div className="space-y-3">
              {currentData.focus.map((item: string, index: number) => (
                <div key={index} className="p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: 'var(--smoke-grey)' }}>
                  <span style={{ color: 'var(--ember-gold)' }}>→</span>
                  <p style={{ color: 'var(--primary-text)' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl p-8 mt-8" style={{ backgroundColor: 'var(--charcoal-panel)', border: '2px solid var(--crimson-ember)' }}>
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle size={32} style={{ color: 'var(--crimson-ember)' }} />
            <h3 className="text-2xl" style={{ color: 'var(--crimson-ember)' }}>What to Avoid</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {currentData.avoid.map((item: string, index: number) => (
              <div key={index} className="p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: 'var(--smoke-grey)' }}>
                <span style={{ color: 'var(--crimson-ember)' }}>✗</span>
                <p style={{ color: 'var(--primary-text)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}