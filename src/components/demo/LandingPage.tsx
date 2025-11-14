import { Navigation } from '../Navigation';
import { HeroSection } from '../HeroSection';
import { StatsSection } from '../StatsSection';
import { ProblemsSection } from '../ProblemsSection';
import { SolutionSection } from '../SolutionSection';
import { DashboardSection } from '../DashboardSection';
import { FeaturesSection } from '../FeaturesSection';
import { CTASection } from '../CTASection';
import { Footer } from '../Footer';
import { TalkWithUs } from '../TalkWithUs';
import { DemoModeSelector } from './DemoModeSelector';
import { Toaster } from '../ui/sonner';
import { useState, useEffect } from 'react';

type ViewMode = 'landing' | 'merchant' | 'buyer';

interface LandingPageProps {
  setViewMode: (mode: ViewMode) => void;
}

export function LandingPage({ setViewMode }: LandingPageProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-[100]">
        <div
          className="h-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#d946ef] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Demo Mode Selector */}
      <DemoModeSelector setViewMode={setViewMode} />

      <Navigation />
      
      <main>
        <HeroSection />
        <StatsSection />
        <ProblemsSection />
        <SolutionSection />
        <DashboardSection />
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
      <TalkWithUs />
      <Toaster />
    </div>
  );
}
