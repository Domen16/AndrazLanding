'use client'

import { Clock, TrendingUp, Search } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('This week');
  const filters = ['This week', 'Upcoming', 'High value', 'Skip'];

  const events = [
    { id: 'realm-of-mystique', name: "Realm Of Mystique", timeLeft: "4d 6h", value: "Very High", type: "Combat Event", description: "12 stages featuring 3 Chieftains with powerful skill upgrades", image: "/realmofmystic.png" },
    { id: 'mightiest-governor', name: "Mightiest Governor", timeLeft: "2d 14h", value: "High", type: "Power Growth", description: "Focus on training troops and upgrading buildings to maximize points" },
    { id: 'lohars-trial', name: "Lohar's Trial", timeLeft: "5d 8h", value: "Medium", type: "Barbarian Hunt", description: "Farm barbarians for rewards. Best with cavalry marches" },
    { id: 'more-than-gems', name: "More Than Gems", timeLeft: "7d 2h", value: "Very High", type: "Spending Event", description: "Save gems for this event. Best ROI for spenders" }
  ];

  const getValueColor = (value: string) => {
    switch (value) {
      case 'Very High': return 'var(--ember-gold)';
      case 'High': return 'var(--victory-gold)';
      case 'Medium': return 'var(--royal-flame)';
      default: return 'var(--secondary-text)';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--deep-night)' }}>
      {/* Cover Banner */}
      <div className="relative w-full h-64" style={{ borderBottom: '2px solid var(--war-bronze)' }}>
        <Image src="/events.png" alt="Events" fill className="object-cover" priority />
      </div>

      <div className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl mb-6" style={{ color: 'var(--primary-text)', fontFamily: "'Playfair Display', serif" }}>Events</h1>
        <p className="text-xl mb-12" style={{ color: 'var(--secondary-text)' }}>Track upcoming events and optimize your strategy for maximum rewards</p>

        <div className="flex gap-4 mb-8">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className="px-6 py-2 rounded-lg transition-all duration-300" style={{ backgroundColor: activeFilter === filter ? 'var(--ember-gold)' : 'var(--smoke-grey)', color: activeFilter === filter ? 'var(--deep-night)' : 'var(--secondary-text)' }}>
              {filter}
            </button>
          ))}
        </div>

        <div className="mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={20} style={{ color: 'var(--secondary-text)' }} />
          <input type="text" placeholder="Search events..." className="w-full pl-12 pr-4 py-3 rounded-lg" style={{ backgroundColor: 'var(--smoke-grey)', color: 'var(--primary-text)', border: '1px solid var(--war-bronze)' }} />
        </div>

        <div className="grid grid-cols-4 gap-8">
          {events.map((event, index) => (
            <Link key={index} href={`/events/${event.id}`}>
              <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
                {/* Circle with frame */}
                <div className="w-full aspect-square flex items-center justify-center p-6 mb-4" style={{ backgroundColor: 'transparent' }}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Outer magical glow */}
                    <div className="absolute inset-0 rounded-full" style={{ 
                      background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(218,165,32,0.2) 40%, transparent 70%)',
                      filter: 'blur(25px)',
                      animation: 'pulse 3s ease-in-out infinite'
                    }}></div>
                    
                    {/* Main legendary medallion frame */}
                    <div className="relative w-full h-full rounded-full flex items-center justify-center" style={{ 
                      border: '16px solid transparent',
                      borderRadius: '50%',
                      boxShadow: `
                        0 0 30px rgba(255,215,0,0.8),
                        inset 0 6px 16px rgba(0,0,0,0.7),
                        inset 0 -6px 16px rgba(255,255,255,0.15),
                        0 12px 32px rgba(218,165,32,0.6),
                        inset 2px 2px 4px rgba(139,69,19,0.3)
                      `,
                      background: `
                        linear-gradient(135deg, 
                          #8B4513 0%, 
                          #B8860B 10%, 
                          #FFD700 25%, 
                          #FFA500 40%, 
                          #FFD700 50%, 
                          #DAA520 60%, 
                          #FFD700 75%, 
                          #B8860B 90%, 
                          #8B4513 100%
                        )
                      `,
                      padding: '6px',
                      transform: 'rotate(-8deg)',
                      position: 'relative'
                    }}>
                      {/* Runic engraving effect */}
                      <div className="absolute inset-0 rounded-full" style={{
                        background: 'repeating-conic-gradient(from 0deg, transparent 0deg, rgba(139,69,19,0.4) 2deg, transparent 4deg)',
                        opacity: 0.6
                      }}></div>
                      
                      {/* Battle wear cracks */}
                      <div className="absolute inset-0 rounded-full" style={{
                        background: 'radial-gradient(circle at 30% 20%, rgba(0,0,0,0.3) 0%, transparent 2%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.2) 0%, transparent 3%)',
                        mixBlendMode: 'multiply'
                      }}></div>

                      {/* Inner glowing edge */}
                      <div className="w-full h-full rounded-full flex items-center justify-center" style={{
                        border: '4px solid rgba(255,215,0,0.6)',
                        background: 'radial-gradient(circle, #1a1410 0%, #0a0806 100%)',
                        boxShadow: `
                          inset 0 0 20px rgba(255,215,0,0.3),
                          inset 0 4px 12px rgba(0,0,0,0.8),
                          0 0 15px rgba(255,215,0,0.4)
                        `,
                        transform: 'rotate(8deg)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Subtle inner glow animation */}
                        <div className="absolute inset-0 rounded-full" style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 60%)',
                          animation: 'glow 4s ease-in-out infinite'
                        }}></div>
                        
                        {event.image ? (
                          <div className="relative w-full h-full rounded-full overflow-hidden">
                            <Image src={event.image} alt={event.name} fill className="object-cover" />
                          </div>
                        ) : (
                          <span className="text-5xl relative z-10" style={{ color: 'var(--ember-gold)', filter: 'drop-shadow(0 0 15px rgba(245,178,58,1))' }}>🏆</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Text below */}
                <div className="text-center">
                  <h3 className="text-xl mb-2 font-semibold" style={{ color: 'var(--primary-text)' }}>{event.name}</h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--secondary-text)' }}>{event.type}</p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} style={{ color: 'var(--royal-flame)' }} />
                      <span className="text-sm" style={{ color: 'var(--royal-flame)' }}>{event.timeLeft}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={16} style={{ color: getValueColor(event.value) }} />
                      <span className="text-sm" style={{ color: getValueColor(event.value) }}>{event.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}