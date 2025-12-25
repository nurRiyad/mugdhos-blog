'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="font-bold text-2xl text-slate-900">Mugdho</span>
              <Stethoscope className="w-5 h-5 text-blue-600" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              My Story
            </Link>
            <Link
              href="/#journey"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              The Journey
            </Link>
            <Link
              href="/#future"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              What&apos;s Next
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
            <Link
              href="/"
              className="block py-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="block py-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Story
            </Link>
            <Link
              href="/#journey"
              className="block py-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Journey
            </Link>
            <Link
              href="/#future"
              className="block py-2 text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              What&apos;s Next
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
