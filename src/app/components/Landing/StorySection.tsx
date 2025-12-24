'use client';

import { motion } from 'framer-motion';
import { BookOpen, Brain, Trophy } from 'lucide-react';

const COLOR_MAP = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  indigo: {
    bg: "bg-indigo-100",
    text: "text-indigo-600",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
} as const;

const STORY_ITEMS = [
  {
    icon: BookOpen,
    phase: "The Beginning",
    title: "HSC Preparation: Finding My Way",
    description: "Navigating the overwhelming world of HSC prep, discovering what works and what doesn&apos;t, and learning to study smarter, not just harder.",
    color: "blue" as const
  },
  {
    icon: Brain,
    phase: "The Challenge",
    title: "Medical Admission: The Real Test",
    description: "Facing one of the toughest exams of my life. The strategies, the struggles, the late nights, and the unwavering determination that got me through.",
    color: "indigo" as const
  },
  {
    icon: Trophy,
    phase: "The Milestone",
    title: "Medical College: Living the Dream",
    description: "Finally here, but the journey doesn&apos;t end. Every day brings new lessons, challenges, and reasons to be grateful for this path.",
    color: "purple" as const
  }
];

export default function StorySection() {
  return (
    <section id="story" className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900">
              The Journey That Changed Everything
            </h2>
            <p className="text-lg text-slate-600">
              From confusion to confidence, one step at a time
            </p>
          </div>

          {/* Story Timeline */}
          <div className="space-y-8 mt-16">
            {STORY_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${COLOR_MAP[item.color].bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-6 h-6 ${COLOR_MAP[item.color].text}`} />
                  </div>
                  <div className="space-y-2">
                    <div className={`text-sm font-semibold ${COLOR_MAP[item.color].text} uppercase tracking-wide`}>
                      {item.phase}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
