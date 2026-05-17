/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CONSULTANTS } from '../constants';
import { MessageCircle, PhoneCall, Award, MapPin } from 'lucide-react';

export default function Consultants() {
  return (
    <section className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <span className="text-honda-red font-bold tracking-[0.2em] uppercase text-xs">Konsultan Ahli</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-2 italic">
              KONSULTASI <span className="text-white/40">DENGAN AHLINYA</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm font-sans">Dapatkan panduan terbaik dalam memilih unit dan paket kredit yang sesuai dengan kebutuhan Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {CONSULTANTS.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative glass-dark rounded-[40px] overflow-hidden p-8 flex flex-col sm:flex-row items-center gap-8 border border-white/5 hover:border-honda-red/30 transition-all shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-honda-red/10 rounded-full blur-3xl -ml-16 -mt-16 group-hover:bg-honda-red/20 transition-all"></div>
              
              <div className="relative w-44 h-44 shrink-0">
                <div className="absolute inset-0 bg-honda-red/10 border border-honda-red/20 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform" />
                <img src={c.image} alt={c.name} className="relative w-full h-full object-cover rounded-3xl shadow-2xl" />
                <div className={`absolute -bottom-2 -right-2 px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] ${c.status === 'Online' ? 'bg-green-500' : 'bg-gray-500'} shadow-lg`}>
                  {c.status}
                </div>
              </div>

              <div className="text-center sm:text-left flex-grow relative z-10">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                  <div className="bg-honda-red p-1 rounded-sm">
                    <Award size={12} className="text-white" />
                  </div>
                  <span className="text-[10px] text-honda-red font-black uppercase tracking-[0.3em]">Senior Advisor</span>
                </div>
                <h4 className="text-3xl font-display font-black text-white mb-2 italic tracking-tighter uppercase">{c.name}</h4>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-500 text-[10px] mb-8 font-black uppercase tracking-widest">
                  <MapPin size={12} />
                  <span>Honda Fatmawati Official</span>
                </div>

                <div className="flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/${c.phone}`}
                    className="flex items-center justify-center gap-2 bg-honda-red text-white py-4 rounded-xl text-xs font-bold hover:bg-honda-red/90 transition-all shadow-lg shadow-honda-red/20 uppercase tracking-tighter"
                  >
                    <MessageCircle size={14} />
                    WHATSAPP RESPON CEPAT
                  </a>
                  <a 
                    href={`tel:+${c.phone}`}
                    className="flex items-center justify-center gap-2 bg-white/5 text-white py-4 rounded-xl text-xs font-bold hover:bg-white/10 transition-all border border-white/10 uppercase tracking-tighter"
                  >
                    <PhoneCall size={14} />
                    PANGGIL SEKARANG
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
