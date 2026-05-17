/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/6281234567890"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-40 w-16 h-16 bg-honda-red text-white rounded-full flex items-center justify-center shadow-2xl shadow-honda-red/30"
    >
      <div className="absolute -top-12 right-0 glass-dark text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-lg border border-white/10 hidden md:block">
        Tanya Ayu Sekarang!
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-black/40 rotate-45 border-r border-b border-white/10" />
      </div>
      <MessageCircle size={32} fill="currentColor" className="text-white" />
      <span className="absolute inset-0 rounded-full border-4 border-honda-red/20 animate-ping" />
    </motion.a>
  );
}
