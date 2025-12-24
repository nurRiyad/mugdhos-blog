'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="font-bold text-2xl text-slate-900">Mugdho</span>
            <Stethoscope className="w-5 h-5 text-blue-600" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-slate-600 hover:text-slate-900 transition-colors">My Story</a>
            <a href="#journey" className="text-slate-600 hover:text-slate-900 transition-colors">The Journey</a>
            <a href="#future" className="text-slate-600 hover:text-slate-900 transition-colors">What&apos;s Next</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100"
        >
          <div className="px-4 py-4 space-y-3">
            <a href="#story" className="block py-2 text-slate-600">My Story</a>
            <a href="#journey" className="block py-2 text-slate-600">The Journey</a>
            <a href="#future" className="block py-2 text-slate-600">What&apos;s Next</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
