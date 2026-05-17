/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FAQS } from '../constants';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navLinks = [
    { name: 'Showroom', href: '#showroom' },
    { name: 'Promo', href: '#promo' },
    { name: 'Simulasi Kredit', href: '#finance' },
    { name: 'Test Drive', href: '#test-drive' },
    { name: 'Konsultan', href: '#consultants' }
  ];

  return (
    <footer className="bg-transparent text-white overflow-hidden relative">
      {/* Final CTA Section */}
      <div className="relative py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="glass-dark border border-white/10 rounded-[60px] p-12 md:p-20 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-honda-red/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-honda-red/10 rounded-full blur-[80px] -ml-24 -mb-24"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">
                KENDARAI <br />
                <span className="text-stroke">MOBIL IMPIAN</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://wa.me/6281234567890" 
                  className="w-full sm:w-auto bg-honda-red text-white px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-honda-red/30 uppercase tracking-tighter"
                >
                  CHAT WHATSAPP
                </a>
                <a 
                  href="#test-drive" 
                  className="w-full sm:w-auto bg-white/5 border border-white/10 backdrop-blur-md text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all uppercase tracking-tighter"
                >
                  BOOKING TEST DRIVE
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-honda-red p-2 rounded-sm -rotate-3">
                <span className="font-display font-black text-white text-2xl">H</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-black tracking-tighter uppercase text-white leading-none">Ayu Honda</span>
                <span className="text-[10px] tracking-widest text-honda-red uppercase font-bold">Fatmawati Dealer</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Main Dealer Honda wilayah Fatmawati, Jakarta Selatan. Melayani penjualan Cash & Credit dengan promo terbaik dan pelayanan purna jual unggulan.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white">Menu Utama</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-honda-red transition-colors text-sm flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all text-honda-red -ml-4 group-hover:ml-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="lg:col-span-6 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white">Pertanyaan Umum (FAQ)</h4>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-white/5 rounded-2xl overflow-hidden bg-white/5">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-sm tracking-wide">{faq.question}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/5 animate-in fade-in slide-in-from-top-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location & Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 pt-20 border-t border-white/10">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <MapPin size={24} className="text-honda-red" />
            </div>
            <div>
              <h5 className="font-bold mb-2">Showroom Lokasi</h5>
              <p className="text-sm text-gray-400">Jl. RS. Fatmawati Raya No. 40, Jakarta Selatan 12430</p>
              <a href="https://maps.google.com" className="text-honda-red text-xs font-bold mt-2 inline-flex items-center gap-1 hover:underline">
                Buka di Maps <ExternalLink size={10} />
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Clock size={24} className="text-honda-red" />
            </div>
            <div>
              <h5 className="font-bold mb-2">Jam Operasional</h5>
              <div className="text-sm text-gray-400">
                <p>Senin - Sabtu: 08:30 - 19:00</p>
                <p>Minggu: 09:00 - 15:00</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Phone size={24} className="text-honda-red" />
            </div>
            <div>
              <h5 className="font-bold mb-2">Hubungi Langsung</h5>
              <p className="text-sm text-gray-400">Sales Hotline: 021-1234567</p>
              <p className="text-sm text-gray-400">WhatsApp: +62 812 3456 7890</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© 2024 AYU HONDA FATMAWATI. HAK CIPTA DILINDUNGI.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
