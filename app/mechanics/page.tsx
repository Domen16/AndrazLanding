'use client'

import Image from 'next/image';

export default function GameMechanicsPage() {
  const mechanics = [
    { title: "Event System", description: "Understanding how events work, reward tiers, and optimal participation strategies", image: "https://images.unsplash.com/photo-1648660095604-4d10cb940e11?w=400&h=300&fit=crop" },
    { title: "Power Growth", description: "Building power efficiently through research, troops, and buildings", image: "https://images.unsplash.com/photo-1621453319203-e9b11259681b?w=400&h=300&fit=crop" },
    { title: "Commander Scaling", description: "How commanders scale with stars, skills, and equipment", image: "https://images.unsplash.com/photo-1733578873713-6a07116bcd60?w=400&h=300&fit=crop" },
    { title: "Gem Economy", description: "Understanding gem value and optimal bundle purchases", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop" },
    { title: "KvK Mechanics", description: "How Kingdom vs Kingdom events impact your progression path", image: "https://images.unsplash.com/photo-1764011643213-1f3b3691f678?w=400&h=300&fit=crop" },
    { title: "Alliance Benefits", description: "Maximizing rewards through alliance technology and gifts", image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=300&fit=crop" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--deep-night)' }}>
      {/* Cover Banner */}
      <div className="w-full h-64 flex items-center justify-center" style={{ backgroundColor: 'var(--charcoal-panel)', borderBottom: '2px solid var(--war-bronze)' }}>
        <span className="text-8xl">⚔️</span>
      </div>

      <div className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl mb-6" style={{ color: 'var(--primary-text)', fontFamily: "'Playfair Display', serif" }}>Game Mechanics</h1>
        <p className="text-xl mb-12" style={{ color: 'var(--secondary-text)' }}>Master the underlying systems that drive success in Rise of Kingdoms</p>

        <div className="grid grid-cols-3 gap-8">
          {mechanics.map((mechanic, index) => (
            <div key={index} className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer" style={{ backgroundColor: 'var(--charcoal-panel)', border: '1px solid var(--war-bronze)' }}>
              <div className="w-full h-48 flex items-center justify-center" style={{ backgroundColor: 'var(--smoke-grey)' }}>
                <span className="text-4xl" style={{ color: 'var(--ember-gold)' }}>⚔️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ color: 'var(--primary-text)' }}>{mechanic.title}</h3>
                <p className="mb-4" style={{ color: 'var(--secondary-text)' }}>{mechanic.description}</p>
                <button className="px-4 py-2 rounded-lg transition-all duration-300" style={{ backgroundColor: 'var(--ember-gold)', color: 'var(--deep-night)' }}>View details</button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}