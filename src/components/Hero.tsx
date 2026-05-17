/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, ChevronRight, MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-charcoal py-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/honda_hero_cinematic_1779043224611.png" 
          alt="Honda Hero" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-3 py-1 bg-honda-red/20 border border-honda-red/40 text-honda-red text-[10px] font-bold uppercase tracking-widest rounded mb-6">
              Honda Ayu Fatmawati - Dealer Resmi
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-display font-extrabold text-white leading-[0.85] tracking-tighter mb-8 italic">
              RAIH MOBIL <br />
              <span className="text-stroke">IMPIANMU</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 font-sans leading-relaxed mb-10 max-w-md">
              Promo Honda Ayu Fatmawati Terbaik. DP mulai <span className="text-white font-semibold">10 Juta</span>, Cicilan Ringan, & Proses Instant.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a 
              href="https://wa.me/6281234567890" 
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-honda-red hover:bg-honda-red/90 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all shadow-xl shadow-honda-red/20"
            >
              LIHAT PROMO TERBARU
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#test-drive" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
            >
              BOOKING TEST DRIVE
            </a>
          </motion.div>

          {/* Floating Stats */}
          <motion.div 
            className="mt-16 flex flex-wrap gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { label: 'Terjual', value: '500+' },
              { label: 'Proses Approval', value: '24 Jam' },
              { label: 'Kepuasan', value: '4.9/5' }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-display font-bold text-white">{stat.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full relative">
          <div className="w-1 h-2 bg-honda-red rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll" />
        </div>
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Gulir Bawah</span>
      </div>
    </section>
  );
}
