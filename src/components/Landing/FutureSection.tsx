'use client';

import { motion } from 'framer-motion';
import { BookOpen, Brain, Microscope, Heart, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const FUTURE_ITEMS = [
  {
    icon: BookOpen,
    title: "Study Resources",
    description: "Notes, strategies, and materials that actually helped me succeed"
  },
  {
    icon: Brain,
    title: "Honest Insights",
    description: "Real experiences, honest advice, and lessons learned the hard way"
  },
  {
    icon: Microscope,
    title: "Medical Journey Logs",
    description: "What medical college is really like, beyond the stereotypes"
  },
  {
    icon: Heart,
    title: "Community Space",
    description: "A place where aspirants can connect, share, and grow together"
  }
];

export default function FutureSection() {
  return (
    <section id="future" className="py-20 px-4 sm:px-6 bg-linear-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold">
              What&apos;s Next on This Platform
            </h2>
            <p className="text-lg text-slate-300">
              Building something meaningful, one piece at a time
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {FUTURE_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
              >
                <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-slate-300 mb-6">
              This is just the beginning. Stay tuned for updates, stories, and resources.
            </p>
            <Link href={"/blogs"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold inline-flex items-center gap-2"
            >
              Follow the Story
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
