'use client'

import { Search, Star } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function CommandersPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Infantry', 'Cavalry', 'Archer'];

  const commanders = [
    { name: "Alexander the Great", type: "Infantry", role: "Field Battle", tier: "S", f2pStars: 3, whaleStars: 5, image: "https://images.unsplash.com/photo-1733578873713-6a07116bcd60?w=300&h=300&fit=crop" },
    { name: "Yi Seong-Gye", type: "Archer", role: "Field Battle / Garrison", tier: "S", f2pStars: 4, whaleStars: 5, image: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=300&h=300&fit=crop" },
    { name: "Sun Tzu", type: "Infantry", role: "Support / Garrison", tier: "A", f2pStars: 5, whaleStars: 4, image: "https://images.unsplash.com/photo-1542779283-429940ce8336?w=300&h=300&fit=crop" },
    { name: "Saladin", type: "Cavalry", role: "Field Battle", tier: "S", f2pStars: 2, whaleStars: 5, image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=300&h=300&fit=crop" },
    { name: "Charles Martel", type: "Infantry", role: "Garrison / Tank", tier: "A", f2pStars: 3, whaleStars: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    { name: "Cao Cao", type: "Cavalry", role: "Field Battle / Mobility", tier: "A", f2pStars: 4, whaleStars: 5, image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&h=300&fit=crop" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--deep-night)' }}>
      {/* Cover Banner */}
      <div className="w-full h-64 flex items-center justify-center" style={{ backgroundColor: 'var(--charcoal-panel)', borderBottom: '2px solid var(--war-bronze)' }}>
        <span className="text-8xl">👑</span>
      </div>

      <div className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl mb-6" style={{ color: 'var(--primary-text)', fontFamily: "'Playfair Display', serif" }}>Commanders</h1>
        <p className="text-xl mb-12" style={{ color: 'var(--secondary-text)' }}>Find the best commanders for your play style and spending tier</p>

        <div className="flex gap-4 mb-8">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className="px-6 py-2 rounded-lg transition-all duration-300" style={{ backgroundColor: activeFilter === filter ? 'var(--ember-gold)' : 'var(--smoke-grey)', color: activeFilter === filter ? 'var(--deep-night)' : 'var(--secondary-text)' }}>
              {filter}
            </button>
          ))}
        </div>

        <div className="mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={20} style={{ color: 'var(--secondary-text)' }} />
          <input type="text" placeholder="Search commander..." className="w-full pl-12 pr-4 py-3 rounded-lg" style={{ backgroundColor: 'var(--smoke-grey)', color: 'var(--primary-text)', border: '1px solid var(--war-bronze)' }} />
        </div>

        <div className="grid grid-cols-3 gap-8">
          {commanders.map((commander, index) => (
            <div key={index} className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer" style={{ backgroundColor: 'var(--charcoal-panel)', border: '1px solid var(--war-bronze)' }}>
              <div className="w-full h-64 flex items-center justify-center" style={{ backgroundColor: 'var(--smoke-grey)' }}>
                <span className="text-6xl" style={{ color: 'var(--ember-gold)' }}>👑</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl" style={{ color: 'var(--primary-text)' }}>{commander.name}</h3>
                  <span className="px-2 py-1 rounded text-sm font-semibold" style={{ backgroundColor: commander.tier === 'S' ? 'var(--ember-gold)' : 'var(--royal-flame)', color: 'var(--deep-night)' }}>{commander.tier} Tier</span>
                </div>
                <p className="text-sm mb-1" style={{ color: 'var(--secondary-text)' }}>{commander.type} • {commander.role}</p>
                <div className="flex gap-4 mt-4">
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'var(--secondary-text)' }}>F2P</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < commander.f2pStars ? 'var(--victory-gold)' : 'none'} style={{ color: 'var(--victory-gold)' }} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'var(--secondary-text)' }}>Whale</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < commander.whaleStars ? 'var(--victory-gold)' : 'none'} style={{ color: 'var(--victory-gold)' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}