'use client'

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Waitlist", href: "#waitlist" },
    { label: "Discord", href: "#discord" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg' : 'bg-transparent'
      }`}
      style={isScrolled ? { background: 'rgba(15,14,13,0.8)', borderBottom: '1px solid rgba(184,180,171,0.2)' } : {}}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between sm:h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-lg font-bold sm:text-xl md:text-2xl" style={{ fontFamily: "'Cinzel', serif" }}>
            <span style={{ color: 'var(--ember-gold)' }}>RoK</span> <span style={{ color: 'var(--primary-text)' }} className="hidden sm:inline">Strategy Hub</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-xs font-medium transition-colors lg:text-sm"
                style={{ color: 'var(--secondary-text)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ember-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--secondary-text)'}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={(e) => handleSmoothScroll(e, '#waitlist')}
              className="px-4 py-2 rounded-lg font-bold text-xs transition-all hover:scale-105 lg:px-6 lg:text-sm"
              style={{ background: 'linear-gradient(135deg, var(--ember-gold), var(--victory-gold))', color: 'var(--deep-night)' }}
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
            style={{ background: 'rgba(60,58,56,0.5)' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" style={{ color: 'var(--primary-text)' }} />
            ) : (
              <Menu className="h-5 w-5" style={{ color: 'var(--primary-text)' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="pb-4 pt-2 backdrop-blur-lg md:hidden" style={{ background: 'rgba(15,14,13,0.95)', borderTop: '1px solid rgba(184,180,171,0.2)' }}>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { handleSmoothScroll(e, link.href); setIsMobileMenuOpen(false); }}
                  className="text-sm font-medium transition-colors py-1"
                  style={{ color: 'var(--secondary-text)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ember-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--secondary-text)'}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={(e) => { handleSmoothScroll(e, '#waitlist'); setIsMobileMenuOpen(false); }}
                className="mt-1 px-4 py-2.5 rounded-lg font-bold text-sm text-center"
                style={{ background: 'linear-gradient(135deg, var(--ember-gold), var(--victory-gold))', color: 'var(--deep-night)' }}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
