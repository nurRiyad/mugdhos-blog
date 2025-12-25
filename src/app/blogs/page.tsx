import { type SanityDocument } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { client } from '../../sanity/client'
import Navigation from "@/src/components/Landing/Navigation";
import FooterSection from "@/src/components/Landing/FooterSection";
import BlogListClient, { type BlogListItem } from "./components/BlogListClient";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...50]{_id, title, slug, publishedAt, _createdAt, image}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset ? createImageUrlBuilder({ projectId, dataset }).image(source) : null;

  const items: BlogListItem[] = posts
    .filter((p) => Boolean(p?.slug?.current))
    .map((post) => {
      const date = new Date(post.publishedAt || post._createdAt);
      const dateLabel = isNaN(date.getTime()) ? "New" : date.toLocaleDateString();
      const imageUrl =
        post.image && urlFor(post.image)
          ? urlFor(post.image)?.width(1200).height(675).fit("crop").url()
          : null;

      return {
        id: String(post._id),
        title: post.title || "Untitled post",
        slug: String(post.slug.current),
        dateLabel,
        imageUrl,
      };
    });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      <main className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="bg-slate-50 rounded-3xl border border-slate-200 p-7 sm:p-10 mb-10">
            <p className="text-sm font-semibold text-blue-600">Our Story</p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Blogs, notes, and real-life lessons
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-2xl">
              Honest insights from the journey — built for HSC students, medical admission
              aspirants, and junior med students.
            </p>
          </section>

          <BlogListClient posts={items} />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}