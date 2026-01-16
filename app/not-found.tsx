'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--deep-night)' }}>
      <Navbar />
      
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--deep-night) 0%, rgba(15,14,13,0.8) 50%, var(--deep-night) 100%)' }} />
        
        {/* Ambient Glows */}
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--ember-gold) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, var(--royal-flame) 0%, transparent 70%)', filter: 'blur(100px)' }} />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl">
          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold mb-4" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif", textShadow: '0 0 40px rgba(245,178,58,0.5)' }}>
            404
          </h1>
          
          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--primary-text)', fontFamily: "'Cinzel', serif" }}>
            Territory Not Found
          </h2>
          <p className="text-base md:text-lg mb-8" style={{ color: 'var(--secondary-text)' }}>
            This path leads nowhere, Governor. The territory you seek does not exist in our kingdom.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, var(--ember-gold), var(--royal-flame))',
              color: 'var(--deep-night)',
              boxShadow: '0 4px 20px rgba(245,178,58,0.4)'
            }}
          >
            <Home className="h-5 w-5" />
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
