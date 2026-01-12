import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/Navigation";

export const metadata: Metadata = {
  title: "ROK Strategy Engine",
  description: "Master your Rise of Kingdoms strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ backgroundColor: 'var(--deep-night)' }}>
        <Navigation />
        
        <div className="pt-20">
          {children}
        </div>

        <div className="px-8 pb-8">
          <footer 
            className="py-16 px-8 rounded-2xl"
            style={{ 
              backgroundColor: 'var(--charcoal-panel)',
              border: '2px solid var(--war-bronze)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
            }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--ember-gold)', fontFamily: "'Cinzel', serif" }}>ROK Strategy</h3>
                  <p style={{ color: 'var(--secondary-text)' }}>Master your Rise of Kingdoms strategy with weekly updates and expert guidance.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-text)' }}>Product</h4>
                  <ul className="space-y-2">
                    <li><a href="/events" style={{ color: 'var(--secondary-text)' }} className="hover:text-[var(--ember-gold)] transition-colors">Events</a></li>
                    <li><a href="#" style={{ color: 'var(--secondary-text)' }} className="hover:text-[var(--ember-gold)] transition-colors">Commanders</a></li>
                    <li><a href="#" style={{ color: 'var(--secondary-text)' }} className="hover:text-[var(--ember-gold)] transition-colors">Pricing</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-text)' }}>Community</h4>
                  <ul className="space-y-2">
                    <li><a href="#" style={{ color: 'var(--secondary-text)' }} className="hover:text-[var(--ember-gold)] transition-colors">Discord</a></li>
                    <li><a href="#" style={{ color: 'var(--secondary-text)' }} className="hover:text-[var(--ember-gold)] transition-colors">Twitter</a></li>
                    <li><a href="#" style={{ color: 'var(--secondary-text)' }} className="hover:text-[var(--ember-gold)] transition-colors">YouTube</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-text)' }}>Legal</h4>
                  <ul className="space-y-2">
                    <li><a href="#" style={{ color: 'var(--secondary-text)' }} className="hover:text-[var(--ember-gold)] transition-colors">Privacy</a></li>
                    <li><a href="#" style={{ color: 'var(--secondary-text)' }} className="hover:text-[var(--ember-gold)] transition-colors">Terms</a></li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 text-center" style={{ borderTop: '1px solid var(--war-bronze)' }}>
                <p style={{ color: 'var(--secondary-text)' }}>© 2024 ROK Strategy Engine. Master your kingdom.</p>
              </div>
            </div>
          </footer>
          
          <div className="text-center py-8">
            <h2 
              className="text-9xl font-black"
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
      </body>
    </html>
  );
}
