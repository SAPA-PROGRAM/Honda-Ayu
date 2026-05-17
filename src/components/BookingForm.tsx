/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CAR_MODELS } from '../constants';
import { ShieldCheck, Truck, Clock, Handshake, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: CAR_MODELS[0].name,
    date: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Halo Ayu, saya ${formData.name}. Saya ingin booking Test Drive untuk unit ${formData.model} pada tanggal ${formData.date}.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  const reasons = [
    { icon: <ShieldCheck className="text-honda-red" />, title: 'Dealer Resmi', desc: 'Jaminan unit baru & Bergaransi resmi Honda.' },
    { icon: <Clock className="text-honda-red" />, title: 'Approval Cepat', desc: 'Proses kredit cepat & dibantu sampai ACC.' },
    { icon: <Handshake className="text-honda-red" />, title: 'Sales Terpercaya', desc: 'Konsultasi ramah & transparan tanpa biaya.' },
    { icon: <Truck className="text-honda-red" />, title: 'Layanan Home Service', desc: 'Service rutin bisa dikerjakan di rumah Anda.' }
  ];

  return (
    <section id="test-drive" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Why Choose Us */}
          <div>
            <span className="text-honda-red font-bold tracking-[0.2em] uppercase text-xs">Benefit & Keunggulan</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-2 mb-10 italic">
              MENGAPA <span className="text-white/40">MEMILIH KAMI?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-honda-red/20 transition-colors">
                    {reason.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-dark p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] shadow-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-honda-red/10 rounded-full blur-3xl -ml-16 -mt-16"></div>
            
            <div className="mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-honda-red rounded-full"></span>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">Booking Test Drive</h3>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Rasakan Sensasi Berkendara</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Nama Lengkap</label>
                <input 
                  required
                  type="text" 
                  placeholder="Masukkan nama Anda"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 sm:px-6 sm:py-4 text-white focus:outline-none focus:border-honda-red transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Nomor WhatsApp</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="Contoh: 0812..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 sm:px-6 sm:py-4 text-white focus:outline-none focus:border-honda-red transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Model Pilihan</label>
                  <select 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 sm:px-6 sm:py-4 text-white appearance-none focus:outline-none focus:border-honda-red transition-all shadow-xl"
                    value={formData.model}
                    onChange={e => setFormData({...formData, model: e.target.value})}
                  >
                    {CAR_MODELS.map(car => <option key={car.id} value={car.name} className="bg-charcoal text-white">{car.name}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Tanggal Preference</label>
                <input 
                  required
                  type="date" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 sm:px-6 sm:py-4 text-white focus:outline-none focus:border-honda-red transition-all"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full group mt-4 flex items-center justify-center gap-3 bg-honda-red text-white py-4 sm:py-5 rounded-xl font-bold text-lg hover:bg-honda-red/90 transition-all shadow-xl shadow-honda-red/30"
              >
                KIRIM PERMINTAAN
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
