/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Andi Saputra",
    text: "Pelayanan sangat memuaskan! Ayu sangat membantu dari awal pilih unit sampai proses STNK. Mobil HR-V saya sampai tepat waktu.",
    role: "Pengusaha",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=andi"
  },
  {
    name: "Siska Wijaya",
    text: "Promo DP Ringan di sini paling jujur. Tidak ada biaya siluman. Sangat recommended buat yang mau beli Honda pertama kali.",
    role: "Karyawan Swasta",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=siska"
  },
  {
    name: "Budi Pratama",
    text: "Proses trade-in mobil lama saya dihargai sangat tinggi. Jauh lebih baik dibanding showroom lain. Terima kasih Honda Fatmawati!",
    role: "Wiraswasta",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=budi"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-honda-red font-bold tracking-[0.2em] uppercase text-xs">Cerita Pelanggan</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-2 italic">
            APA KATA <span className="text-white/40">MEREKA?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-dark p-10 rounded-[40px] border border-white/5 relative group hover:border-honda-red/20 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-honda-red/5 rounded-full blur-3xl group-hover:bg-honda-red/10 transition-all"></div>
              <Quote size={40} className="absolute top-10 right-10 text-white/5 group-hover:text-honda-red/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="#D6001C" className="text-honda-red" />)}
              </div>

              <p className="text-gray-400 text-lg leading-relaxed italic mb-8 relative z-10 font-sans">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative p-0.5 bg-gradient-to-br from-honda-red to-white/10 rounded-full">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <h4 className="font-bold text-white italic">{t.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
