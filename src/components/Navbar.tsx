/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Car } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showroom', href: '#showroom' },
    { name: 'Promo', href: '#promo' },
    { name: 'Simulasi Kredit', href: '#finance' },
    { name: 'Test Drive', href: '#test-drive' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 glass-dark ${
        isScrolled ? 'py-4 shadow-2xl' : 'py-6 bg-black/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-honda-red p-2 rounded-sm rotate-3 group-hover:rotate-0 transition-transform">
            <Car size={24} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-black tracking-tighter uppercase text-white leading-none">Honda Ayu</span>
            <span className="text-[10px] tracking-widest text-honda-red uppercase font-bold">Fatmawati Dealer</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-honda-red transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://wa.me/6281234567890" 
            className="flex items-center gap-2 bg-honda-red hover:bg-honda-red/90 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all premium-shadow"
          >
            <Phone size={16} />
            KONSULTASI GRATIS
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-charcoal z-50 md:hidden shadow-2xl border-l border-white/5"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                <button 
                  className="absolute top-8 right-8 text-white p-2 hover:bg-white/5 rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={32} />
                </button>

                <div className="flex flex-col gap-8">
                  {navLinks.map((link, idx) => (
                    <motion.a 
                      key={link.name} 
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-display font-black text-white hover:text-honda-red transition-colors uppercase tracking-tighter"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto">
                  <motion.a 
                    href="https://wa.me/6281234567890" 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-3 bg-honda-red text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-honda-red/20 uppercase tracking-tighter"
                  >
                    <Phone size={20} />
                    Konsultasi Gratis
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
