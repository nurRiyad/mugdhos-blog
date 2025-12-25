'use client';

import { motion } from 'framer-motion';

interface JourneySectionProps {
  storyContent1: string
  storyContent2: string
  storyQuote: string
}

export default function JourneySection({ storyContent1, storyContent2, storyQuote }: JourneySectionProps) {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900">
              Why I&apos;m Sharing This
            </h2>
          </div>

          <div className="prose prose-lg text-slate-600 space-y-6 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              {storyContent1}
            </p>
            <p className="text-lg leading-relaxed">
              {storyContent2}
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600">
              <p className="text-lg text-slate-700 font-medium italic">
                &ldquo;{storyQuote}&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
