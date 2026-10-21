import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrixSection } from './components/SkillsMatrixSection';
import { CvPreviewModal } from './components/CvPreviewModal';
import { ContactFooter } from './components/ContactFooter';
import { PageLoader, UnyoJourneyProvider } from './components/Reveal';

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
    <div className="min-h-screen bg-[#060708] text-[#F2F6F8] relative selection:bg-[#00F0FF] selection:text-[#060708]">
      {/* UnyoCorp [data-loader] Architectural Intro Curtain */}
      <PageLoader />

      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* UnyoCorp Master ScrollTrigger Journey Engine */}
      <UnyoJourneyProvider>
        <main>
          <HeroSection onOpenCvModal={() => setCvModalOpen(true)} />
          <AboutSection />
          <ProjectsSection />
          <SkillsMatrixSection />
          <ContactFooter onOpenCvModal={() => setCvModalOpen(true)} />
        </main>
      </UnyoJourneyProvider>

      <CvPreviewModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

export default App;
