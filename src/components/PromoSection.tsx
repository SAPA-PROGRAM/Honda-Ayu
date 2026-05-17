/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROMOS } from '../constants';
import { Tag, ArrowRight, Zap } from 'lucide-react';

export default function PromoSection() {
  return (
    <section id="promo" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-honda-red font-bold tracking-[0.2em] uppercase text-xs">Penawaran terbatas</span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mt-2 flex flex-col md:flex-row items-center justify-center gap-4">
               PROMO TERBAIK <span className="text-honda-red bg-honda-red/10 px-6 py-2 rounded-xl border border-honda-red/20">BULAN INI</span>
            </h2>
          </motion.div>
        </div>

        {/* Hero Promo Promo Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden mb-12 min-h-[400px] sm:h-[450px] flex items-center p-6 sm:p-12 bg-black group border border-white/5 shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
             <img 
              src="https://images.unsplash.com/photo-1621935773205-d9cb773b02bb?auto=format&fit=crop&q=80&w=1600" 
              alt="Promo Banner" 
              className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 text-honda-red font-bold mb-4">
              <Zap size={20} className="sm:w-6 sm:h-6" fill="currentColor" />
              <span className="uppercase tracking-[0.4em] text-[10px] sm:text-sm italic font-display">Flash Deal Fatmawati</span>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white mb-6 leading-tight uppercase italic tracking-tighter">
              HONDA HR-V <br />
              <span className="text-honda-red drop-shadow-lg">DP MULAI 15JT!</span>
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-sm">
              Dapatkan unit ready stock sekarang juga sebelum kehabisan.
            </p>
            <a 
              href="https://wa.me/6281234567890" 
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-honda-red text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg hover:bg-honda-red/90 transition-all shadow-xl shadow-honda-red/30"
            >
              AMBIL SEKARANG
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Countdown Placeholder */}
          <div className="hidden lg:flex absolute right-12 bottom-12 items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-3xl font-black text-white">02</div>
              <span className="text-[10px] text-gray-500 uppercase mt-3 font-bold tracking-[0.3em]">Hari</span>
            </div>
            <span className="text-white text-3xl font-black mb-10">:</span>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-3xl font-black text-white">14</div>
              <span className="text-[10px] text-gray-500 uppercase mt-3 font-bold tracking-[0.3em]">Jam</span>
            </div>
          </div>
        </motion.div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMOS.map((promo, idx) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 glass-dark rounded-[32px] border border-white/5 hover:border-honda-red/30 transition-all premium-shadow"
            >
              <div className="w-12 h-12 bg-honda-red/10 rounded-xl flex items-center justify-center text-honda-red mb-6 border border-honda-red/20 shadow-sm">
                <Tag size={24} />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-2 italic">{promo.title}</h4>
              <p className="text-2xl font-display font-black text-honda-red mb-4">{promo.description}</p>
              <p className="text-sm text-gray-500 font-medium">{promo.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
