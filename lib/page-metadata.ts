import type { Metadata } from "next";

export const SITE_OG_NAME = "The Photobooth Guy";

/** Matches `app/opengraph-image.tsx` (1200×630 PNG). */
export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Photo Booth Rental Toronto & GTA | The Photobooth Guy",
  type: "image/png",
} as const;

type PageMetaInput = {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
};

/**
 * Per-page metadata with a complete Open Graph + Twitter block.
 * Child routes must not use `openGraph: { url }` alone — Next.js replaces the
 * entire parent openGraph, which drops images, type, and site name.
 */
export function definePageMetadata(input: PageMetaInput): Metadata {
  const { title, description, keywords, canonicalUrl } = input;
  return {
    title,
    description,
    ...(keywords !== undefined ? { keywords } : {}),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_OG_NAME,
      type: "website",
      images: [{ ...DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
