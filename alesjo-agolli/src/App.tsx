import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
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

      {/* UnyoCorp [data-loader] Architectural Intro Curtain */}
      <PageLoader />

      {/* Fixed Navigation (01 HOME · 02 MAIN · 03 CLOSED) */}
      <Navbar onOpenCV={() => setCvModalOpen(true)} />

      {/* UnyoCorp Master Lenis + GSAP ScrollTrigger 3-Page Journey Engine */}
      <UnyoJourneyProvider>
        <main>
          {/* Page 01: HOME */}
          <HeroSection onOpenCV={() => setCvModalOpen(true)} />

          {/* Page 02: MAIN (Selected Works Scene Wipes + Stack Ticker) */}
          <ProjectsSection />

          {/* Page 03: CLOSED (Footer & Direct Contact) */}
          <ContactFooter onOpenCV={() => setCvModalOpen(true)} />
        </main>
      </UnyoJourneyProvider>

      <CvPreviewModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

export default App;
