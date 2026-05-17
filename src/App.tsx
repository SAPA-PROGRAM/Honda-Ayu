/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarSection from './components/CarSection';
import PromoSection from './components/PromoSection';
import FinanceSimulator from './components/FinanceSimulator';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Consultants from './components/Consultants';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileStickyCTA from './components/MobileStickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-honda-red selection:text-white overflow-x-hidden relative">
      {/* Background Ambient Elements from Theme */}
      <div className="fixed top-[-100px] right-[-100px] w-[600px] h-[600px] bg-honda-red/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Gallery Section - Small Showcase */}
        <section className="py-12 bg-charcoal border-y border-white/5">
          <div className="flex overflow-hidden gap-4 px-4">
            <div className="flex animate-marquee whitespace-nowrap gap-4">
              {[1, 2, 3, 4, 5, 2, 3].map((i, idx) => (
                <div key={idx} className="w-72 h-48 rounded-2xl overflow-hidden shrink-0 group grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      '1567818735868-e71b99932e29',
                      '1533473359331-0135ef1b58bf',
                      '1549317661-bd32c8ce0db2',
                      '1494905998402-395d579af36f',
                      '1583121274602-3e2820c69888'
                    ][i-1]}?auto=format&fit=crop&q=80&w=600`} 
                    alt="Honda Gallery" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CarSection />
        <PromoSection />
        <FinanceSimulator />
        <BookingForm />
        
        {/* Floating CTA Card for Mobile/Desktop Middle Scroll */}
        <section className="py-24 bg-soft-gray overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 md:px-8">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-charcoal rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
             >
               <div className="absolute top-0 right-0 w-64 h-64 bg-honda-red opacity-10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-4">INGIN TUKAR TAMBAH?</h3>
                  <p className="text-gray-400 text-lg">Mobil lama Anda kami hargai lebih tinggi untuk ditukarkan dengan Honda baru.</p>
               </div>
               <div className="relative z-10 shrink-0">
                  <a href="https://wa.me/6281234567890" className="px-10 py-5 bg-honda-red text-white rounded-full font-bold text-lg inline-block premium-shadow hover:scale-105 transition-transform">
                    CEK HARGA SEKARANG
                  </a>
               </div>
             </motion.div>
           </div>
        </section>

        <Testimonials />
        <Consultants />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}
