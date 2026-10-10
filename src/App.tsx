import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-purple-500/30 selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* Footer */}
      <footer className="w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 z-20 relative">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-[#8A95A1] uppercase tracking-wider">
          <span className="font-medium text-[#D7E2EA]">Prakruti · 3D Creator</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} All Rights Reserved</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="text-xs uppercase tracking-widest text-[#D7E2EA] hover:text-white transition-colors"
          >
            prakruti@3dcreator.design
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#D7E2EA] transition-colors"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </div>
  );
}
