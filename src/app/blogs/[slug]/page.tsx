import { PortableText, type SanityDocument } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { notFound } from "next/navigation";
import { client } from '../../../sanity/client'
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { portableTextToPlainText, getPostSeoTitle } from "@/src/lib/seo";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  _createdAt,
  image,
  body
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch<SanityDocument | null>(
    POST_QUERY,
    { slug },
    options
  );

  if (!post) {
    return {
      title: "Post not found",
      robots: { index: false, follow: false },
    };
  }

  const title = getPostSeoTitle(post);
  const description =
    portableTextToPlainText(post.body, 160) ||
    "Read this post on Learn With Mugdho — insights for HSC & medical admission aspirants.";

  const ogImage =
    post.image && urlFor(post.image)
      ? urlFor(post.image)?.width(1200).height(630).fit("crop").url()
      : "/image.png";

  const publishedTime = (post.publishedAt || post._createdAt) as string | undefined;

  return {
    title,
    description,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `/blogs/${slug}`,
      title,
      description,
      images: [
        typeof ogImage === "string"
          ? {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            }
          : {
              url: "/image.png",
              width: 1200,
              height: 630,
              alt: title,
            },
      ],
      publishedTime,
      authors: ["Mugdho"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [typeof ogImage === "string" ? ogImage : "/image.png"],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument | null>(POST_QUERY, await params, options);

  if (!post) {
    return notFound();
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:underline hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blogs" className="hover:underline hover:text-slate-900">
              Blogs
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{post.title || "Post"}</span>
          </nav>

          <Link
            href="/blogs"
            className="inline-block text-blue-600 hover:underline mb-6 font-medium"
          >
            ← Back to posts
          </Link>

          {/* Header card */}
          <header className="bg-slate-50 rounded-2xl border border-slate-200 p-7 sm:p-10">
            <p className="text-sm font-semibold text-blue-600">
              {new Date(post.publishedAt || post._createdAt).toLocaleDateString()}
            </p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
              {post.title}
            </h1>
          </header>

          {postImageUrl && (
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <Image
                src={postImageUrl}
                alt={post.title || "Blog post image"}
                className="w-full aspect-video object-cover"
                width={1100}
                height={620}
                priority
              />
            </div>
          )}

          {/* 
            Blog body:
            - Use Tailwind Typography for sane defaults
            - Force readable slate colors since page background is white even in system dark mode
          */}
          <article className="prose prose-slate prose-lg max-w-none mt-10 text-slate-900 prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-slate-900 prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline">
            {Array.isArray(post.body) && <PortableText value={post.body} />}
          </article>
        </div>
      </main>
    </div>
  );
}
