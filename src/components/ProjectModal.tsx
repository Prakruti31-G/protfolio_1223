import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  if (!project) return null;

  const images = [project.col1Image1, project.col1Image2, project.col2Image];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#101012] border border-[#2B2E33] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl z-10 text-[#D7E2EA] my-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#D7E2EA] transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Top header info */}
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider mb-2">
            <span className="font-mono text-purple-400 font-bold">{project.number}</span>
            <span>·</span>
            <span className="text-[#8A95A1]">{project.category} Commission</span>
            <span>·</span>
            <span className="text-[#8A95A1]">Year {project.year || '2026'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
            {project.name}
          </h2>

          {/* Main Showcase Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-black/50 border border-white/10 mb-5">
            <img
              src={images[activeImageIndex]}
              alt={`${project.name} preview ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Thumbnail Selector */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx ? 'border-purple-400 scale-[1.02]' : 'border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumb ${idx + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <Sparkles size={18} className="text-purple-400" />
                Creative Direction & Craft
              </h3>
              <p className="text-sm sm:text-base text-[#A0ACB8] font-light leading-relaxed">
                {project.description ||
                  'Crafted with procedural shaders, dynamic camera choreography, and bespoke lighting setups. Every asset was sculpted and simulated to deliver visceral texture and cinematic immersion.'}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {(project.deliverables || ['3D CGI Environments', 'Photorealistic Textures', 'Motion Keyframes', 'Art Direction']).map(
                  (item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white/5 border border-white/10 text-[#D7E2EA]"
                    >
                      <CheckCircle size={12} className="text-purple-400" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="space-y-4 bg-white/5 p-5 rounded-2xl border border-white/10">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#8A95A1] mb-1 font-mono">Software Stack</div>
                <div className="flex flex-wrap gap-1.5 text-xs font-medium text-[#D7E2EA]">
                  {(project.tools || ['Blender 4.2', 'Cinema 4D', 'Octane Render', 'Figma', 'After Effects']).map((tool, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-black/40 border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-[#8A95A1] mb-1 font-mono">Commission Type</div>
                <div className="text-sm font-medium text-white flex items-center gap-1.5">
                  <Layers size={14} className="text-purple-400" />
                  {project.category} Portfolio Release
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-white/90 transition-colors flex items-center justify-center gap-1.5"
                >
                  <ExternalLink size={14} />
                  Inquire Similar Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
