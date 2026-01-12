'use client'

import { Crown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Game Mechanics', path: '/mechanics' },
    { name: 'Commanders', path: '/commanders' },
    { name: 'Events', path: '/events' },
    { name: 'KvK', path: '/kvk' }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 px-8 py-4"
      style={{ 
        backgroundColor: 'var(--deep-night)',
        borderBottom: '1px solid var(--war-bronze)'
      }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Crown size={32} style={{ color: 'var(--ember-gold)' }} />
          <span 
            className="text-2xl font-bold"
            style={{ 
              color: 'var(--primary-text)',
              fontFamily: "'Cinzel', serif"
            }}
          >
            ROK Strategy
          </span>
        </Link>

        <div className="flex items-center gap-8">
          {menuItems.slice(1).map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="transition-all duration-300"
              style={{ 
                color: isActive(item.path) ? 'var(--ember-gold)' : 'var(--secondary-text)',
                textShadow: isActive(item.path) ? '0 0 20px rgba(245,178,58,0.5)' : 'none'
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="px-6 py-2 rounded-lg transition-all duration-300 hover:bg-opacity-80"
            style={{ 
              color: 'var(--primary-text)',
              backgroundColor: 'transparent',
              border: '1px solid var(--war-bronze)'
            }}
          >
            Log in
          </button>
          
          <button 
            className="px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: 'var(--ember-gold)',
              color: 'var(--deep-night)',
              boxShadow: '0 0 15px rgba(245,178,58,0.3)'
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}