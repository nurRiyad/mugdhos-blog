import type { SanityDocument } from "next-sanity";

/**
 * Extract plain text from Sanity Portable Text blocks for meta descriptions.
 * Keeps it defensive because content can be various shapes.
 */
export function portableTextToPlainText(value: unknown, maxLength = 160): string {
  if (!Array.isArray(value)) return "";

  const parts: string[] = [];

  for (const block of value) {
    if (!block || typeof block !== "object") continue;
    // Common PortableText block: {_type: 'block', children: [{_type:'span', text:'...'}]}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyBlock = block as any;
    if (anyBlock._type !== "block" || !Array.isArray(anyBlock.children)) continue;

    for (const child of anyBlock.children) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyChild = child as any;
      if (typeof anyChild?.text === "string") parts.push(anyChild.text);
    }

    if (parts.join(" ").length >= maxLength) break;
  }

  const text = parts.join(" ").replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trimEnd()}…` : text;
}

export function getPostSeoTitle(post: SanityDocument | null | undefined): string {
  const title = typeof post?.title === "string" ? post.title.trim() : "";
  return title || "Blog post";
}


