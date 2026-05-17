/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, Wallet, Calendar, Percent, CheckCircle2 } from 'lucide-react';
import { CAR_MODELS } from '../constants';

export default function FinanceSimulator() {
  const [selectedCarId, setSelectedCarId] = useState(CAR_MODELS[0].id);
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(60); // In months

  const selectedCar = useMemo(() => 
    CAR_MODELS.find(c => c.id === selectedCarId) || CAR_MODELS[0], 
  [selectedCarId]);

  const numericPrice = useMemo(() => 
    parseInt(selectedCar.price.replace(/\./g, '')), 
  [selectedCar]);

  const dpAmount = useMemo(() => (numericPrice * dpPercent) / 100, [numericPrice, dpPercent]);
  const loanAmount = useMemo(() => numericPrice - dpAmount, [numericPrice, dpAmount]);
  
  // Very basic installment formula (Interest 6% flat/year for demo)
  const monthlyInstallment = useMemo(() => {
    const interestTotal = (loanAmount * 0.06 * (tenor / 12));
    return (loanAmount + interestTotal) / tenor;
  }, [loanAmount, tenor]);

  return (
    <section id="finance" className="py-24 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-honda-red font-bold tracking-[0.2em] uppercase text-xs">Kalkulator Cicilan</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mt-2 mb-8">
              SIMULASI <span className="text-white/40 italic">KREDIT INSTAN</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed">
              Hitung estimasi cicilan bulanan mobil Honda impian Anda dengan mudah. Sesuaikan budget dan tenor Anda.
            </p>

            <div className="space-y-8">
              {/* Car Selection */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Model Honda</label>
                <select 
                  value={selectedCarId}
                  onChange={(e) => setSelectedCarId(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-honda-red transition-all shadow-inner"
                >
                  {CAR_MODELS.map(car => (
                    <option key={car.id} value={car.id} className="bg-charcoal">{car.name}</option>
                  ))}
                </select>
              </div>

              {/* DP and Tenor Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">DP (%)</label>
                    <span className="text-honda-red font-display font-bold">{dpPercent}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="50" 
                    step="5"
                    value={dpPercent}
                    onChange={(e) => setDpPercent(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-honda-red"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Tenor (Bulan)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[12, 36, 60].map((t) => (
                      <button 
                        key={t}
                        onClick={() => setTenor(t)}
                        className={`py-2.5 rounded-lg font-bold text-xs transition-all border ${
                          tenor === t 
                          ? 'bg-honda-red border-honda-red text-white' 
                          : 'bg-white/5 border-white/10 text-gray-400'
                        }`}
                      >
                        {t/12} Th
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 backdrop-blur-2xl p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-honda-red/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-honda-red rounded-full"></span>
              Hasil Estimasi
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 sm:p-5 rounded-2xl bg-black/20 border border-white/5">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Total DP</span>
                <span className="text-lg sm:text-xl font-display font-black">Rp {Math.round(dpAmount).toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center p-4 sm:p-5 rounded-2xl bg-black/20 border border-white/5">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Tenor</span>
                <span className="text-lg sm:text-xl font-display font-black">{tenor} Bulan</span>
              </div>
            </div>

            <div className="bg-honda-red/5 p-6 sm:p-8 rounded-3xl border border-honda-red/10 text-center mb-8">
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-2">Cicilan / Bulan</p>
              <p className="text-3xl sm:text-5xl font-display font-black text-white">
                Rp {Math.round(monthlyInstallment).toLocaleString('id-ID')}
              </p>
            </div>

            <a 
              href={`https://wa.me/6281234567890?text=Halo Ayu, saya ingin mengajukan simulasi kredit ${selectedCar.name} dengan DP Rp ${Math.round(dpAmount).toLocaleString('id-ID')} dan tenor ${tenor} bulan.`}
              className="w-full flex items-center justify-center gap-3 bg-honda-red text-white py-5 rounded-xl font-bold text-lg hover:bg-honda-red/90 transition-all shadow-xl shadow-honda-red/30 uppercase tracking-tighter"
            >
              AJUKAN SEKARANG
            </a>
            <p className="text-center text-[10px] text-gray-500 italic mt-4 uppercase tracking-[0.2em] font-bold">
              *Syarat & ketentuan berlaku. Data diawasi oleh OJK.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
