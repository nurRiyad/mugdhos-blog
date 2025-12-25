'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Stethoscope, BookOpen, Heart, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  heroTitle: string
  heroSubtitle: string
  heroContent: string
}

export default function HeroSection({ heroTitle, heroSubtitle, heroContent }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Main grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-20" />
        
        {/* Floating orbs */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-[10%] w-96 h-96 bg-linear-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-[5%] w-125 h-125 bg-linear-to-tr from-purple-400 to-pink-400 rounded-full blur-3xl"
        />
        
        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/50" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200"
            >
              <Heart className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Welcome to my journey</span>
            </motion.div>

            {/* Main Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-slate-900">
                Hi, I&apos;m <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mugdho</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-lg">
                { heroSubtitle }
              </p>
            </motion.div>

            {/* Short Intro Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg text-slate-600 space-y-4 max-w-lg"
            >
              <p className="text-lg leading-relaxed">
                { heroContent}
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
            >
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Read my story
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#story"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl font-semibold border-2 border-slate-200 hover:border-slate-300 transition-all"
              >
                Explore journey
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements behind image */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full opacity-20 blur-2xl"
              />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Placeholder with medical theme illustration */}
                <Image
                  src="/image.png"
                  alt="Mugdho"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                  className="object-cover rounded-3xl"
                  priority
                />
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-slate-200"
                >
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border border-slate-200"
                >
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
