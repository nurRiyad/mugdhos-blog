import { PortableText, type SanityDocument } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from '../../../sanity/client'
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

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
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/blogs" className="hover:underline text-blue-600 mb-4 inline-block">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title || "Blog post image"}
          className="aspect-video rounded-xl object-cover"
          width={550}
          height={310}
          priority
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex flex-col gap-2 mb-8">
        <p className="text-slate-500 italic">
          Published: {new Date(post.publishedAt || post._createdAt).toLocaleDateString()}
        </p>
      </div>
      <article className="prose prose-blue prose-lg max-w-none dark:prose-invert">
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </article>
    </main>
  );
}
