'use client';

import { motion } from 'framer-motion';

export default function JourneySection() {
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
              I remember feeling lost, overwhelmed, and wondering if I was doing things right. There was so much noise—conflicting advice, unrealistic expectations, and very few honest stories from people who had just been through it.
            </p>
            <p className="text-lg leading-relaxed">
              That&apos;s why I&apos;m building this space. Not as an expert or a teacher, but as someone who recently walked this path and wants to share what actually worked, what didn&apos;t, and what I wish someone had told me.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600">
              <p className="text-lg text-slate-700 font-medium italic">
                &ldquo;This isn&apos;t about showing off achievements. It&apos;s about showing you that it&apos;s possible, even when it feels impossible.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
