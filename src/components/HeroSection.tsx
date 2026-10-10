import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [imgError, setImgError] = useState(false);

  const portraitUrl = '/src/assets/images/prakruti_3d_portrait_1791636639867.jpg';

  const handleNavClick = (targetId: string) => {
    if (targetId === 'contact') {
      onOpenContact();
      return;
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip w-full select-none">
      {/* 1. Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        <button
          type="button"
          onClick={() => handleNavClick('about')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          About
        </button>
        <button
          type="button"
          onClick={() => handleNavClick('services')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          Price
        </button>
        <button
          type="button"
          onClick={() => handleNavClick('projects')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => handleNavClick('contact')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          Contact
        </button>
      </motion.nav>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden flex justify-center items-center z-10 px-2 sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center mt-6 sm:mt-4 md:-mt-5 text-[10vw] sm:text-[11vw] md:text-[12.5vw] lg:text-[13.5vw]"
        >
          HI I&apos;AM PRAKRUTI
        </motion.h1>
      </div>

      {/* 3. Hero Portrait with Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full pointer-events-auto"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center items-end"
          >
            {!imgError ? (
              <img
                src={portraitUrl}
                alt="Prakruti -- 3D Creator portrait"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-auto max-h-[82vh] rounded-3xl object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105"
              />
            ) : (
              <div className="w-full aspect-[3/4] rounded-t-3xl bg-gradient-to-t from-purple-900/40 to-transparent border-t border-purple-500/20 flex items-center justify-center text-[#D7E2EA] font-light">
                <span className="text-xl uppercase tracking-widest font-mono">PRAKRUTI 3D</span>
              </div>
            )}
          </Magnet>
        </motion.div>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
        {/* Left: paragraph text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[200px] sm:max-w-[280px] md:max-w-[360px]"
          style={{
            fontSize: 'clamp(0.75rem, 1.3vw, 1.35rem)',
          }}
        >
          An CSE(AIML) student and software developer bridging the gap between core code and data models
        </motion.p>

        {/* Right: ContactButton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onOpenContact} />
        </motion.div>
      </div>
    </section>
  );
};
