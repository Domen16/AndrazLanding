import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DescriptionSection from '@/components/DescriptionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WaitlistSection from '@/components/WaitlistSection';
import DiscordSection from '@/components/DiscordSection';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--deep-night)' }}>
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <DescriptionSection />
      <SectionDivider />
      <HowItWorksSection />
      <SectionDivider />
      <WaitlistSection />
      <SectionDivider />
      <DiscordSection />
      <SectionDivider />
      <Footer />
    </div>
  );
}
