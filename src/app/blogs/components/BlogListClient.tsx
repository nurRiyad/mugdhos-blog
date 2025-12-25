"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export type BlogListItem = {
  id: string;
  title: string;
  slug: string;
  dateLabel: string;
  imageUrl?: string | null;
};

export default function BlogListClient({ posts }: { posts: BlogListItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {posts.map((post, idx) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.25) }}
          className="h-full"
        >
          <Link
            href={`/blogs/${post.slug}`}
            className="group block h-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all overflow-hidden"
          >
            {post.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.imageUrl}
                alt=""
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-video bg-linear-to-br from-blue-50 via-white to-indigo-50" />
            )}

            <div className="p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-blue-600 uppercase">
                {post.dateLabel}
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Read the full post →
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}



