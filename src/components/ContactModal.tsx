import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, Copy, Send, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling & Rendering',
    message: '',
  });

  const email = 'prakruti@3dcreator.design';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', service: '3D Modeling & Rendering', message: '' });
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#141416] border border-[#2E3238] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-[#D7E2EA] my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#D7E2EA] transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase font-medium tracking-widest text-purple-400">
                Let&apos;s Collaborate
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#D7E2EA] tracking-tight mt-1">
                Start a Project
              </h2>
              <p className="text-sm text-[#A0ACB8] mt-2 font-light">
                Have an ambitious idea in 3D modeling, photorealistic rendering, or motion design? Let&apos;s make it unforgettable.
              </p>
            </div>

            {/* Quick Email Copy Bar */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-xs text-[#8A95A1] uppercase tracking-wider">Direct Email</div>
                  <div className="text-sm font-medium text-[#D7E2EA]">{email}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/15 text-[#D7E2EA] transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center rounded-2xl bg-purple-950/20 border border-purple-500/30"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold text-white uppercase">Inquiry Received!</h3>
                <p className="text-sm text-[#A0ACB8] mt-2">
                  Thanks for reaching out, {formData.name}. Prakruti will review your project brief and reply within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A0ACB8] mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#2E3238] focus:border-purple-500 focus:outline-none text-sm text-[#D7E2EA] placeholder-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A0ACB8] mb-1.5 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#2E3238] focus:border-purple-500 focus:outline-none text-sm text-[#D7E2EA] placeholder-white/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A0ACB8] mb-1.5 font-medium">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0C0C0C] border border-[#2E3238] focus:border-purple-500 focus:outline-none text-sm text-[#D7E2EA] transition-colors"
                  >
                    <option value="3D Modeling & Rendering">3D Modeling & Rendering</option>
                    <option value="Motion Design & Graphics">Motion Design & Graphics</option>
                    <option value="Brand Identity System">Brand Identity System</option>
                    <option value="Interactive Web 3D">Interactive Web 3D</option>
                    <option value="Complete Creative Direction">Complete Creative Direction</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A0ACB8] mb-1.5 font-medium">
                    Project Overview
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell Jack about your deliverables, timeline, or vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-[#2E3238] focus:border-purple-500 focus:outline-none text-sm text-[#D7E2EA] placeholder-white/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                  }}
                  className="w-full py-3.5 rounded-full text-white font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer mt-2"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
