'use client'

import Image from 'next/image';

export default function Footer() {
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
    } else {
      window.location.href = `/${href}`;
    }
  };

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Waitlist', href: '#waitlist' }
      ]
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord', href: 'https://discord.gg/VusfRNnY' }
      ]
    },
    {
      title: 'Mobile App',
      links: [
        { label: 'iOS (Coming Soon)', href: '#' },
        { label: 'Android (Coming Soon)', href: '#' }
      ]
    }
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-12 sm:pt-16">
      <footer 
        className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl"
        style={{ 
          backgroundColor: 'var(--charcoal-panel)',
          border: '2px solid var(--war-bronze)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Brand Column with Logo and Text as subcolumns - Spans 2 columns */}
            <div className="grid grid-cols-2 gap-6 sm:col-span-2 lg:col-span-2">
              {/* Logo Subcolumn */}
              <div className="flex justify-center items-start">
                <Image src="/logo.png" alt="ROK STRATEGIST" width={150} height={150} className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40" />
              </div>
              
              {/* Text Subcolumn */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>
                  ROK STRATEGIST
                </h3>
                <p className="text-sm sm:text-base" style={{ color: 'var(--secondary-text)' }}>
                  Master your Rise of Kingdoms strategy with weekly updates.
                </p>
              </div>
            </div>
            
            {/* Other Columns */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: 'var(--primary-text)' }}>
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  {section.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        onClick={(e) => link.href.startsWith('#') ? handleSmoothScroll(e, link.href) : undefined}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ color: 'var(--secondary-text)' }} 
                        className="hover:text-[var(--ember-gold)] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 sm:pt-8 text-center" style={{ borderTop: '1px solid var(--war-bronze)' }}>
            <p className="text-xs sm:text-sm md:text-base flex items-center justify-center gap-2" style={{ color: 'var(--secondary-text)' }}>
              <span>© {new Date().getFullYear()} ROK STRATEGIST | Powered by</span>
              <a 
                href="https://primiton.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
                style={{ color: 'var(--ember-gold)', textShadow: '0 0 10px rgba(245, 178, 58, 0.6), 0 0 20px rgba(245, 178, 58, 0.4)' }}
              >
                <Image src="/logoPrimiton-gold.svg" alt="Primiton" width={20} height={20} className="w-5 h-5" style={{ filter: 'drop-shadow(0 0 10px rgba(245, 178, 58, 0.6)) drop-shadow(0 0 20px rgba(245, 178, 58, 0.4))' }} />
                Primiton
              </a>
            </p>
          </div>
        </div>
      </footer>
      
      <div className="text-center py-6 sm:py-8">
        <h2 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black"
          style={{ 
            fontFamily: "'Cinzel', serif",
            background: 'linear-gradient(to bottom, rgba(184,180,171,0.15) 0%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          ROK STRATEGIST
        </h2>
      </div>
    </div>
  );
}
