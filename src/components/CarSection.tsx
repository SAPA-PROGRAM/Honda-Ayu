/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CAR_MODELS } from '../constants';
import { ChevronRight, MessageCircle, Eye, Fuel } from 'lucide-react';

export default function CarSection() {
  return (
    <section id="showroom" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-honda-red font-bold tracking-[0.2em] uppercase text-xs">Honda Showroom</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-2">
                PILIH MOBIL <span className="text-white/40 italic">IMPIAN ANDA</span>
              </h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              {['Semua', 'SUV', 'Hatchback', 'Sedan'].map((filter) => (
                <button 
                  key={filter}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all border whitespace-nowrap ${
                    filter === 'Semua' 
                    ? 'bg-honda-red border-honda-red text-white' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CAR_MODELS.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-dark rounded-[32px] overflow-hidden border border-white/5 hover:border-honda-red/30 transition-all duration-500 premium-shadow"
            >
              <div className="relative h-64 overflow-hidden bg-black/40">
                <img 
                  src={car.id === 'hr-v' ? '/src/assets/images/honda_hrv_studio_1779043252625.png' : car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-honda-red text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest shadow-lg">
                    {car.tag}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white italic">{car.name}</h3>
                    <p className="text-gray-500 text-sm">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-tighter">Mulai Dari</p>
                    <p className="text-xl font-display font-black text-honda-red">Rp {car.price}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Fuel size={14} className="text-honda-red" />
                    <span className="text-xs font-medium">EcoBoost</span>
                  </div>
                  <div className="flex items-center gap-2 text-white bg-honda-red/10 px-3 py-1.5 rounded-lg border border-honda-red/20">
                    <span className="text-[10px] font-bold uppercase tracking-wide opacity-60">Cicilan</span>
                    <span className="text-sm font-black text-honda-red">{car.installment}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {car.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-honda-red rounded-full" />
                      <span className="text-xs text-gray-400">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={`https://wa.me/6281234567890?text=Halo Ayu, saya tertarik dengan ${car.name}`}
                    className="flex items-center justify-center gap-2 bg-honda-red text-white py-4 rounded-xl text-xs font-bold hover:bg-honda-red/90 transition-all shadow-lg shadow-honda-red/20"
                  >
                    <MessageCircle size={14} />
                    HUBUNGI SALES
                  </a>
                  <button className="flex items-center justify-center gap-2 bg-white/5 text-white py-4 rounded-xl text-xs font-bold border border-white/10 hover:bg-white/10 transition-all">
                    <Eye size={14} />
                    LIHAT DETAIL
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-lg font-bold hover:bg-white hover:text-black transition-all">
            LIHAT SEMUA MODEL HONDA
          </button>
        </motion.div>
      </div>
    </section>
  );
}
