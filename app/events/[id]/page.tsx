'use client'

import { Clock, TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function EventDetailPage() {
  const params = useParams();
  const eventId = params.id;
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  const eventData: Record<string, any> = {
    'mightiest-governor': {
      name: "Mightiest Governor",
      timeLeft: "2d 14h",
      value: "High",
      type: "Power Growth",
      description: "Focus on training troops and upgrading buildings to maximize points",
      strategy: "Train T4 troops continuously, upgrade buildings during speedup events, and focus on research that gives the most power."
    },
    'lohars-trial': {
      name: "Lohar's Trial",
      timeLeft: "5d 8h",
      value: "Medium",
      type: "Barbarian Hunt",
      description: "Farm barbarians for rewards. Best with cavalry marches",
      strategy: "Use cavalry commanders with gathering speed bonuses. Farm level 3-5 barbarians for best efficiency."
    },
    'more-than-gems': {
      name: "More Than Gems",
      timeLeft: "7d 2h",
      value: "Very High",
      type: "Spending Event",
      description: "Save gems for this event. Best ROI for spenders",
      strategy: "Save all gems for this event. Buy VIP points, speedups, and legendary commander sculptures for maximum value."
    },
    'realm-of-mystique': {
      name: "Realm Of Mystique",
      timeLeft: "4d 6h",
      value: "Very High",
      type: "Combat Event",
      description: "Realm of Mystique is an event featuring 12 stages to complete and 3 Chieftains that grant valuable rewards.",
      coverImage: "/realmofmystic.png",
      hasSkills: true,
      overview: [
        "12 stages",
        "3 Chieftains",
        "Skill-based progression"
      ],
      skills: [
        {
          category: "TANK",
          color: "var(--victory-gold)",
          icon: "🛡️",
          best: "High Morale",
          backup: "Shatter Armor"
        },
        {
          category: "HEALER",
          color: "var(--insight-blue)",
          icon: "❤️",
          best: "Dazzling Land",
          backup: "Healing Light"
        },
        {
          category: "DPS",
          color: "var(--crimson-ember)",
          icon: "⚔️",
          best: "Meteor Strike",
          backup: "Primal Rage"
        }
      ],
      upgradePriority: [
        "Energy regen",
        "Defense",
        "Attack",
        "Skill manuals"
      ],
      spendingStrategy: "Do not buy troop attack upgrades early. Always buy Energy Recovery Speed first, then Defense, then Attack. Only buy Skill Manuals if you have extra coins after everything else."
    }
  };

  const event = eventData[eventId as string] || eventData['mightiest-governor'];

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
      {event.coverImage ? (
        <div className="w-full h-64 relative" style={{ borderBottom: '2px solid var(--war-bronze)' }}>
          <Image src={event.coverImage} alt={event.name} fill className="object-cover" priority />
        </div>
      ) : (
        <div className="w-full h-64 flex items-center justify-center" style={{ backgroundColor: 'var(--charcoal-panel)', borderBottom: '2px solid var(--war-bronze)' }}>
          <span className="text-8xl">🏆</span>
        </div>
      )}

      <div className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/events" className="flex items-center gap-2 mb-8 transition-colors" style={{ color: 'var(--ember-gold)' }}>
            <ArrowLeft size={20} />
            Back to Events
          </Link>

          <div className="mb-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-5xl mb-4" style={{ color: 'var(--primary-text)', fontFamily: "'Cinzel', serif" }}>{event.name}</h1>
                <p className="text-xl" style={{ color: 'var(--secondary-text)' }}>{event.type}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock size={24} style={{ color: 'var(--royal-flame)' }} />
                  <span className="text-xl" style={{ color: 'var(--royal-flame)' }}>{event.timeLeft}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={24} style={{ color: getValueColor(event.value) }} />
                  <span className="text-xl" style={{ color: getValueColor(event.value) }}>{event.value}</span>
                </div>
              </div>
            </div>

            <p className="text-lg mb-8" style={{ color: 'var(--secondary-text)' }}>{event.description}</p>

            {event.hasSkills && (
              <>
                {/* Recommended Build */}
                <h2 className="text-3xl mb-6 mt-12" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>Recommended Build</h2>
                
                <div className="grid grid-cols-3 gap-8 mb-12">
                  {event.skills.map((skillCategory: any, index: number) => (
                    <div key={index}>
                      <div className="text-center mb-4">
                        <span className="text-5xl mb-3 block">{skillCategory.icon}</span>
                        <h3 className="text-2xl font-bold mb-4" style={{ color: skillCategory.color }}>{skillCategory.category}</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm mb-2" style={{ color: 'var(--secondary-text)' }}>Best skill</p>
                          <p className="text-xl font-semibold" style={{ color: 'var(--primary-text)' }}>{skillCategory.best}</p>
                        </div>
                        <div>
                          <p className="text-sm mb-2" style={{ color: 'var(--secondary-text)' }}>Backup</p>
                          <p className="text-lg" style={{ color: 'var(--primary-text)' }}>{skillCategory.backup}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upgrade Priority */}
                <h2 className="text-3xl mb-6" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>Upgrade Priority</h2>
                <div className="flex gap-6 mb-12">
                  {event.upgradePriority.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-2xl font-bold" style={{ color: 'var(--ember-gold)' }}>{idx + 1}.</span>
                      <span className="text-xl" style={{ color: 'var(--primary-text)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Spending Strategy */}
                <h2 className="text-3xl mb-6" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>Spending Strategy</h2>
                <p className="text-xl leading-relaxed" style={{ color: 'var(--primary-text)' }}>{event.spendingStrategy}</p>
              </>
            )}

            {!event.hasSkills && event.strategy && (
              <div className="mt-12">
                <h2 className="text-3xl mb-6" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>Strategy</h2>
                <p className="text-xl leading-relaxed" style={{ color: 'var(--primary-text)' }}>{event.strategy}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}