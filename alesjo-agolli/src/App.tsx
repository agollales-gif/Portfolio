import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CvPreviewModal } from './components/CvPreviewModal';
import { ContactFooter } from './components/ContactFooter';
import { PageLoader, ScrollProgressBar, UnyoJourneyProvider } from './components/Reveal';

export function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCvModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#060708] text-[#F4F5F7] relative selection:bg-[#00F0FF] selection:text-[#060708]">
      {/* Top Scroll Progress Line */}
      <ScrollProgressBar />

      {/* Architectural Intro Curtain */}
      <PageLoader />

      {/* Master Lenis + GSAP ScrollTrigger Journey Engine */}
      <UnyoJourneyProvider>
        <main>
          <HeroSection onOpenCV={() => setCvModalOpen(true)} />
          <ProjectsSection />
          <ContactFooter onOpenCV={() => setCvModalOpen(true)} />
        </main>
      </UnyoJourneyProvider>

      <CvPreviewModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

export default App;
