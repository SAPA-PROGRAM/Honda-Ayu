/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle, Calculator } from 'lucide-react';

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-charcoal/40 backdrop-blur-2xl border-t border-white/5 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] safe-area-bottom">
      <div className="grid grid-cols-4 gap-2 items-center">
        <a 
          href="tel:+6281234567890" 
          className="flex flex-col items-center justify-center gap-1 text-white/40 hover:text-white transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
            <Phone size={18} />
          </div>
          <span className="text-[8px] uppercase tracking-widest font-black">Call</span>
        </a>
        <a 
          href="#finance" 
          className="flex flex-col items-center justify-center gap-1 text-white/40 hover:text-white transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
            <Calculator size={18} />
          </div>
          <span className="text-[8px] uppercase tracking-widest font-black">Budget</span>
        </a>
        <a 
          href="https://wa.me/6281234567890" 
          className="col-span-2 bg-honda-red text-white py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 font-black text-xs shadow-xl shadow-honda-red/20 uppercase tracking-tighter"
        >
          <MessageCircle size={18} />
          WHATSAPP AYU
        </a>
      </div>
    </div>
  );
}
