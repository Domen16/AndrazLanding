'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Check, Target, Users, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    { title: "Choose how you play", content: "Your strategy depends on how much you spend. Pick your tier to see what you should do this week.", type: "tier-selection" },
    { title: "See your weekly plan", content: "Get a personalized strategy based on your play style.", type: "preview" },
    { title: "Create your account", content: "Save your plan and get weekly updates.", type: "account" },
    { title: "Enter your ROK ID", content: "Track your account and personalize recommendations.", type: "tracking" },
    { title: "Master your Kingdom", content: "Use your plan to dominate every week.", type: "mastery" }
  ];

  const tiers = ["Free-to-Play", "Low Spender", "Mid Spender", "Whale"];

  const pricingPlans = [
    { name: "Weekly Scout", price: "$9", period: "/week", features: ["Weekly priority guide", "Commander recommendations", "Event optimization", "Basic analytics"] },
    { name: "Strategic Advisor", price: "$29", period: "/month", popular: true, features: ["Everything in Weekly Scout", "ROK ID tracking", "Advanced analytics", "Custom notifications", "KvK battle plans", "Priority support"] },
    { name: "War Council", price: "$99", period: "/quarter", features: ["Everything in Strategic Advisor", "Alliance strategy sessions", "1-on-1 coaching calls", "Custom battle simulations", "VIP Discord access", "Early feature access"] }
  ];

  const visualProofCards = [
    { title: "Weekly Priorities", description: "AI-powered priority ranking based on your spending tier and current events", icon: Target, color: "var(--victory-gold)" },
    { title: "Commander Recommendations", description: "Optimal commander pairings and skill upgrades for your play style", icon: Users, color: "var(--insight-blue)" },
    { title: "Event Optimization", description: "Maximize rewards from every event with precision timing", icon: TrendingUp, color: "var(--royal-flame)" },
    { title: "Spending Efficiency", description: "Get the most value from every gem with smart purchase recommendations", icon: Zap, color: "var(--ember-gold)" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--deep-night)' }}>
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--deep-night)' }}>
        
        {/* Full width image with fade */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero5.png" 
            alt="ROK Strategy" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to left, transparent 0%, var(--deep-night) 100%)'
          }}></div>
        </div>
        
        {/* Floating UI Panels */}
        <div className="absolute right-64 top-24 z-5">
          <div className="flex gap-6">
            {/* AI Chat Panel */}
            <div 
              className="backdrop-blur-md rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(15,14,13,0.9)',
                border: '2px solid var(--ember-gold)',
                boxShadow: '0 0 30px rgba(245,178,58,0.4), inset 0 0 20px rgba(245,178,58,0.1)',
                animation: 'gentleFloat 6s ease-in-out infinite',
                width: '280px'
              }}
            >
              {/* Header */}
              <div className="px-4 py-3" style={{ background: 'rgba(28,27,25,0.8)', borderBottom: '1px solid rgba(245,178,58,0.3)' }}>
                <h3 className="text-sm font-bold" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>AI Strategy Assistant</h3>
              </div>
              
              {/* Chat Messages */}
              <div className="p-3 space-y-2" style={{ minHeight: '180px' }}>
                {/* AI message */}
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg max-w-[85%]" style={{ background: 'linear-gradient(135deg, rgba(245,178,58,0.2), rgba(245,178,58,0.1))', border: '1px solid rgba(245,178,58,0.3)', boxShadow: '0 0 10px rgba(245,178,58,0.2)' }}>
                    <p className="text-xs" style={{ color: 'var(--primary-text)' }}>Focus on Sun Tzu and Joan of Arc for your tier</p>
                  </div>
                </div>
                
                {/* User reply */}
                <div className="flex justify-end">
                  <div className="px-3 py-2 rounded-lg max-w-[85%]" style={{ background: 'rgba(60,58,56,0.8)' }}>
                    <p className="text-xs" style={{ color: 'var(--secondary-text)' }}>What about events?</p>
                  </div>
                </div>
                
                {/* AI message */}
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg max-w-[85%]" style={{ background: 'linear-gradient(135deg, rgba(245,178,58,0.2), rgba(245,178,58,0.1))', border: '1px solid rgba(245,178,58,0.3)', boxShadow: '0 0 10px rgba(245,178,58,0.2)' }}>
                    <p className="text-xs" style={{ color: 'var(--primary-text)' }}>Prioritize Mightiest Governor this week for maximum rewards</p>
                  </div>
                </div>
                
                {/* User reply */}
                <div className="flex justify-end">
                  <div className="px-3 py-2 rounded-lg max-w-[85%]" style={{ background: 'rgba(60,58,56,0.8)' }}>
                    <p className="text-xs" style={{ color: 'var(--secondary-text)' }}>How much should I spend?</p>
                  </div>
                </div>
                
                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(245,178,58,0.2), rgba(245,178,58,0.1))', border: '1px solid rgba(245,178,58,0.3)' }}>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--ember-gold)', animation: 'pulse 1.4s ease-in-out infinite' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--ember-gold)', animation: 'pulse 1.4s ease-in-out 0.2s infinite' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--ember-gold)', animation: 'pulse 1.4s ease-in-out 0.4s infinite' }}></span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Input Bar */}
              <div className="px-3 pb-3 pt-4">
                <div className="mb-2">
                  <p className="text-[10px]" style={{ color: 'rgba(184,180,171,0.6)' }}>Source: Weekly Event Guide • KvK Meta • Commander Tier List</p>
                </div>
                <div className="flex gap-2 p-2 rounded-lg" style={{ background: 'rgba(28,27,25,0.6)', border: '1px solid rgba(245,178,58,0.2)' }}>
                  <input 
                    type="text" 
                    placeholder="Ask your strategist…" 
                    className="flex-1 bg-transparent text-xs outline-none pt-0.5" 
                    style={{ color: 'var(--primary-text)' }}
                    disabled
                  />
                  <button className="w-6 h-6 rounded flex items-center justify-center" style={{ background: 'var(--ember-gold)', boxShadow: '0 0 10px rgba(245,178,58,0.5)' }}>
                    <span className="text-xs" style={{ color: 'var(--deep-night)' }}>→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* KvK Stats Panel */}
              <div 
                className="backdrop-blur-md rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(28,27,25,0.7)',
                  border: '2px solid var(--ember-gold)',
                  boxShadow: '0 0 30px rgba(245,178,58,0.4), inset 0 0 20px rgba(245,178,58,0.1)',
                  animation: 'gentleFloat 7s ease-in-out infinite',
                  animationDelay: '1s',
                  width: '280px'
                }}
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>KvK Stats</h3>
                <div className="flex items-end justify-between gap-2 h-16">
                  {[0.6, 0.9, 0.7, 0.85, 0.5, 0.75].map((height, idx) => (
                    <div 
                      key={idx} 
                      className="flex-1 rounded-t transition-all duration-1000"
                      style={{ 
                        height: `${height * 100}%`,
                        background: idx % 2 === 0 ? 'var(--ember-gold)' : 'var(--insight-blue)',
                        animation: `pulse ${3 + idx * 0.5}s ease-in-out infinite`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Global Leaderboard Panel */}
              <div 
                className="backdrop-blur-md rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(28,27,25,0.7)',
                  border: '2px solid var(--ember-gold)',
                  boxShadow: '0 0 30px rgba(245,178,58,0.4), inset 0 0 20px rgba(245,178,58,0.1)',
                  animation: 'gentleFloat 8s ease-in-out infinite',
                  animationDelay: '2s',
                  width: '280px'
                }}
              >
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>Global Leaderboard</h3>
                <div className="space-y-3">
                  {['Northern Kingdom', 'Eastern Kingdom', 'Western Kingdom'].map((kingdom, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded transition-all" style={{ background: 'rgba(245,178,58,0.05)' }}>
                      <span className="text-xl">👑</span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold" style={{ color: 'var(--primary-text)' }}>{kingdom}</p>
                        <div className="w-full h-1 rounded-full mt-1" style={{ background: 'rgba(245,178,58,0.2)' }}>
                          <div className="h-full rounded-full" style={{ width: `${100 - idx * 15}%`, background: 'var(--ember-gold)' }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-5" style={{
          background: 'linear-gradient(to right, var(--deep-night) 30%, transparent 70%)'
        }}></div>

        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute z-10 px-8 left-0 ml-24 max-w-3xl text-left"
            >
              <h1 
                className="text-5xl font-bold mb-8"
                style={{ 
                  color: 'var(--ember-gold)',
                  fontFamily: "'Cinzel', serif",
                  textShadow: '0 0 40px rgba(245,178,58,0.5)',
                  lineHeight: '1.6'
                }}
              >
                The Ultimate Strategy Engine<br />for RoK Players
              </h1>
              <p 
                className="text-lg mb-6"
                style={{ 
                  color: 'var(--primary-text)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                  lineHeight: '1.8'
                }}
              >
                Most guides are static. Rise of Kingdoms changes every week. We follow.
              </p>

              {/* Clinking swords animation */}
              <div className="flex justify-center">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  {/* Left sword (diagonal from top-left to bottom-right) */}
                  <div 
                    className="absolute"
                    style={{
                      width: '6px',
                      height: '80px',
                      background: 'linear-gradient(to bottom, #E8E8E8 0%, #B8B8B8 10%, #D4D4D4 30%, #A8A8A8 70%, #707070 90%, #4A4A4A 100%)',
                      transform: 'rotate(-45deg)',
                      transformOrigin: 'center center',
                      animation: 'swordClash1 3s ease-in-out forwards',
                      boxShadow: '2px 0 4px rgba(0,0,0,0.4), inset 1px 0 2px rgba(255,255,255,0.5)',
                      borderRadius: '1px'
                    }}
                  >
                    <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '16px solid #C0C0C0', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))' }}></div>
                    <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '28px', height: '4px', background: 'linear-gradient(to right, #8B7355 0%, #A0826D 50%, #8B7355 100%)', borderRadius: '2px', boxShadow: '0 2px 3px rgba(0,0,0,0.5)' }}></div>
                    <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '16px', background: 'linear-gradient(to bottom, #654321 0%, #8B4513 50%, #654321 100%)', borderRadius: '2px' }}></div>
                    <div style={{ position: 'absolute', bottom: '-26px', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '6px', background: '#8B7355', borderRadius: '50%' }}></div>
                  </div>

                  {/* Right sword (diagonal from top-right to bottom-left) */}
                  <div 
                    className="absolute"
                    style={{
                      width: '6px',
                      height: '80px',
                      background: 'linear-gradient(to bottom, #E8E8E8 0%, #B8B8B8 10%, #D4D4D4 30%, #A8A8A8 70%, #707070 90%, #4A4A4A 100%)',
                      transform: 'rotate(45deg)',
                      transformOrigin: 'center center',
                      animation: 'swordClash2 3s ease-in-out forwards',
                      boxShadow: '-2px 0 4px rgba(0,0,0,0.4), inset -1px 0 2px rgba(255,255,255,0.5)',
                      borderRadius: '1px'
                    }}
                  >
                    <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '16px solid #C0C0C0', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))' }}></div>
                    <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '28px', height: '4px', background: 'linear-gradient(to right, #8B7355 0%, #A0826D 50%, #8B7355 100%)', borderRadius: '2px', boxShadow: '0 2px 3px rgba(0,0,0,0.5)' }}></div>
                    <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '16px', background: 'linear-gradient(to bottom, #654321 0%, #8B4513 50%, #654321 100%)', borderRadius: '2px' }}></div>
                    <div style={{ position: 'absolute', bottom: '-26px', left: '50%', transform: 'translateX(-50%)', width: '10px', height: '6px', background: '#8B7355', borderRadius: '50%' }}></div>
                  </div>

                  {/* Hard clash spark effect */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,215,0,1) 20%, rgba(255,140,0,0.8) 50%, transparent 70%)',
                      animation: 'hardSpark 3s ease-in-out forwards',
                      filter: 'blur(2px)'
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating golden particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                background: 'radial-gradient(circle, rgba(245,178,58,0.8) 0%, rgba(245,178,58,0) 70%)',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                animationDelay: Math.random() * 5 + 's',
                boxShadow: '0 0 10px rgba(245,178,58,0.6)'
              }}
            />
          ))}
        </div>


      </section>

      <section className="py-24 px-8" style={{ background: 'linear-gradient(to bottom, var(--deep-night) 0%, var(--charcoal-panel) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center mb-20" style={{ color: 'var(--primary-text)', fontFamily: "'Cinzel', serif" }}>How it works</h2>

          <div className="flex items-start justify-between gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <button 
                  onClick={() => setCurrentStep(index)} 
                  className="relative w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 transition-all duration-300"
                  style={{ 
                    backgroundColor: currentStep === index ? 'var(--ember-gold)' : 'var(--smoke-grey)',
                    color: currentStep === index ? 'var(--deep-night)' : 'var(--secondary-text)',
                    border: currentStep === index ? '3px solid var(--victory-gold)' : '2px solid var(--war-bronze)',
                    boxShadow: currentStep === index ? '0 0 30px rgba(245,178,58,0.5)' : 'none',
                    transform: currentStep === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  {index + 1}
                </button>
                <div className="text-center">
                  <h4 className="font-semibold mb-1" style={{ color: currentStep === index ? 'var(--ember-gold)' : 'var(--secondary-text)' }}>
                    {step.title}
                  </h4>
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className="absolute h-0.5 top-8" 
                    style={{ 
                      width: 'calc(100% / 5)',
                      left: `calc(${index * 20}% + 10% + 2rem)`,
                      backgroundColor: index < currentStep ? 'var(--ember-gold)' : 'var(--war-bronze)',
                      transition: 'background-color 0.3s'
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentStep} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }} 
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-12 backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(28,27,25,0.8)',
                  border: '2px solid var(--ember-gold)',
                  boxShadow: '0 8px 32px rgba(245,178,58,0.15)'
                }}
              >
                <div className="flex items-start gap-6 mb-8">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--ember-gold)' }}
                  >
                    <span className="text-2xl font-bold" style={{ color: 'var(--deep-night)' }}>{currentStep + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl mb-3 font-bold" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>
                      {steps[currentStep].title}
                    </h3>
                    <p className="text-lg" style={{ color: 'var(--primary-text)' }}>
                      {steps[currentStep].content}
                    </p>
                  </div>
                </div>

                {steps[currentStep].type === 'tier-selection' && (
                  <div className="grid grid-cols-4 gap-6">
                    {tiers.map((tier, index) => {
                      const isSelected = selectedTier === tier;
                      return (
                        <button key={index} onClick={() => { setSelectedTier(tier); setCurrentStep(1); }} className="flex flex-col items-center p-8 rounded-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--smoke-grey)', border: isSelected ? '2px solid var(--ember-gold)' : '2px solid var(--war-bronze)', boxShadow: isSelected ? '0 0 30px rgba(245,178,58,0.3)' : 'none' }}>
                          <span className="text-center font-semibold" style={{ color: isSelected ? 'var(--ember-gold)' : 'var(--primary-text)' }}>{tier}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {steps[currentStep].type === 'preview' && (
                  <div className="grid grid-cols-3 gap-6">
                    {['Commanders', 'Events', 'Priorities'].map((item, index) => (
                      <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: 'var(--smoke-grey)', border: '1px solid var(--war-bronze)' }}>
                        <Check className="mb-3" size={24} style={{ color: 'var(--ember-gold)' }} />
                        <h4 style={{ color: 'var(--primary-text)' }}>{item}</h4>
                        <p className="mt-2 text-sm" style={{ color: 'var(--secondary-text)' }}>Optimized for your tier</p>
                      </div>
                    ))}
                  </div>
                )}

                {!['tier-selection', 'preview'].includes(steps[currentStep].type) && (
                  <div className="p-8 rounded-lg text-center" style={{ backgroundColor: 'var(--smoke-grey)', border: '1px solid var(--war-bronze)' }}>
                    <p style={{ color: 'var(--secondary-text)' }}>
                      {steps[currentStep].type === 'account' && "Create your free account to continue"}
                      {steps[currentStep].type === 'tracking' && "Link your Rise of Kingdoms account"}
                      {steps[currentStep].type === 'mastery' && "Start receiving weekly strategic updates"}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              <button 
                onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)} 
                disabled={currentStep === 0} 
                className="p-3 rounded-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--smoke-grey)',
                  color: 'var(--primary-text)',
                  border: '2px solid var(--war-bronze)'
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => currentStep < steps.length - 1 && setCurrentStep(currentStep + 1)} 
                disabled={currentStep === steps.length - 1} 
                className="p-3 rounded-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--ember-gold)',
                  color: 'var(--deep-night)',
                  boxShadow: '0 4px 20px rgba(245,178,58,0.3)'
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8" style={{ backgroundColor: 'var(--charcoal-panel)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl text-center mb-16" style={{ color: 'var(--primary-text)', fontFamily: "'Playfair Display', serif" }}>Choose how far you want to go</h2>
          <div className="grid grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="rounded-2xl p-8 relative transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--deep-night)', border: plan.popular ? '2px solid var(--victory-gold)' : '1px solid var(--war-bronze)', boxShadow: plan.popular ? '0 0 40px rgba(255,211,106,0.2)' : 'none' }}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: 'var(--victory-gold)', color: 'var(--deep-night)' }}>Most Popular</div>}
                <h3 className="text-2xl mb-2" style={{ color: 'var(--primary-text)' }}>{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl" style={{ color: 'var(--ember-gold)' }}>{plan.price}</span>
                  <span className="ml-2 text-lg" style={{ color: 'var(--secondary-text)' }}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--ember-gold)' }} />
                      <span style={{ color: 'var(--secondary-text)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--ember-gold)', color: 'var(--deep-night)', boxShadow: '0 0 20px rgba(245,178,58,0.2)' }}>Start</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-16">
            <div className="flex-1">
              <h2 className="text-5xl mb-8 font-black" style={{ color: 'var(--primary-text)', fontFamily: "'Cinzel', serif", letterSpacing: '0.02em' }}>Join the Discord</h2>
              <p className="text-xl mb-12" style={{ color: 'var(--secondary-text)' }}>Connect with other Rise of Kingdoms players, share strategies, and get real-time event updates</p>
              <button className="px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--ember-gold)', color: 'var(--deep-night)', boxShadow: '0 4px 20px rgba(245,178,58,0.3)' }}>
                Join Discord Server
              </button>
            </div>
            <div className="flex-1 relative h-[600px] -mr-32">
              <Image src="/discord2.png" alt="Discord Community" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}