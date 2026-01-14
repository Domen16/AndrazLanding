export default function Footer() {
  const footerSections = [
    {
      title: 'ROK Strategy',
      description: 'Master your Rise of Kingdoms strategy with weekly updates and expert guidance.',
      isMain: true
    },
    {
      title: 'Product',
      links: [
        { label: 'Events', href: '/events' },
        { label: 'Commanders', href: '#' },
        { label: 'Pricing', href: '#' }
      ]
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'YouTube', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            {footerSections.map((section, index) => (
              <div key={index}>
                {section.isMain ? (
                  <>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>
                      {section.title}
                    </h3>
                    <p className="text-sm sm:text-base" style={{ color: 'var(--secondary-text)' }}>
                      {section.description}
                    </p>
                  </>
                ) : (
                  <>
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: 'var(--primary-text)' }}>
                      {section.title}
                    </h4>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {section.links?.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a 
                            href={link.href} 
                            style={{ color: 'var(--secondary-text)' }} 
                            className="hover:text-[var(--ember-gold)] transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="pt-6 sm:pt-8 text-center" style={{ borderTop: '1px solid var(--war-bronze)' }}>
            <p className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--secondary-text)' }}>
              © 2024 ROK Strategy Engine. Master your kingdom.
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
          ROK STRATEGY
        </h2>
      </div>
    </div>
  );
}
