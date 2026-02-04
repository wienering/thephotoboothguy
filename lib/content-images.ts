/**
 * Shared pool of event/print photos for use across the site.
 * Used for hero images and inline content images (not full galleries).
 * Different pages get different subsets so the site has character without repetition.
 */

export interface ContentImage {
  src: string;
  alt: string;
}

/** Event/booth photos (good for hero and in-content on service/equipment/contact pages). */
const EVENT_PHOTOS: ContentImage[] = [
  { src: '/photos/20251209_125620936.jpg', alt: 'Professional photo booth rental at a Toronto area event with guests and custom backdrop' },
  { src: '/photos/20251209_125627091.jpg', alt: 'Guests enjoying instant prints and props at a GTA photo booth rental' },
  { src: '/photos/20251211_191242154.jpg', alt: 'Photo booth setup and equipment at a Greater Toronto Area wedding or event' },
  { src: '/photos/20251218_200721527.jpg', alt: 'Wedding photo booth moment – couple and guests at a Toronto area wedding' },
  { src: '/photos/20260123_203236491.jpg', alt: 'Photo booth in action at a corporate or private event in the GTA' },
  { src: '/photos/20241210_171353533.jpg', alt: 'Event photo booth rental with prints and backdrop in the Greater Toronto Area' },
  { src: '/photos/220233130.jpg', alt: 'Photo booth rental at a Toronto or GTA venue with guests and backdrop' },
  { src: '/photos/20231215173222-1 copy.jpg', alt: 'Photo booth experience at a Greater Toronto Area event with prints and props' },
];

/** Print/template samples (good for templates page and inline “sample” sections). */
const PRINT_SAMPLES: ContentImage[] = [
  { src: '/photos/Sample 1.jpg', alt: 'Sample of custom 4x6 or 2x6 photo booth print template for Toronto events' },
  { src: '/photos/Sample 2.jpg', alt: 'Custom photo booth print template design for weddings and events' },
  { src: '/photos/Sample 3.JPG', alt: 'Photo booth print sample with custom design for GTA weddings and parties' },
  { src: '/photos/Sample 4.jpg', alt: 'Instant photo booth print sample from a Toronto area event' },
  { src: '/photos/Sample 5.jpeg', alt: 'Photo booth print sample on custom template for Toronto photo booth rental' },
];

const ALL_PHOTOS = [...EVENT_PHOTOS, ...PRINT_SAMPLES];

/** Simple numeric hash from a string for deterministic but varied picks. */
function hashKey(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Returns a hero image and up to 2 content images for a service-location page.
 * Same (serviceSlug, city) always gets the same set; different pages get different photos.
 */
export function getImagesForServicePage(serviceSlug: string, city: string): {
  heroImage: ContentImage | null;
  contentImages: ContentImage[];
} {
  const key = `${serviceSlug}-${city}`;
  const h = hashKey(key);
  const heroImage = EVENT_PHOTOS[h % EVENT_PHOTOS.length] ?? null;
  const i1 = (h + 2) % ALL_PHOTOS.length;
  const i2 = (h + 7) % ALL_PHOTOS.length;
  const contentImages = [
    ALL_PHOTOS[i1],
    ALL_PHOTOS[i2],
  ].filter(Boolean);
  return { heroImage, contentImages };
}

/**
 * Returns a hero image and one content image for standalone pages (equipment, templates, contact, etc.).
 * pageKey should be unique per page, e.g. 'equipment', 'templates', 'contact', 'quote', 'book'.
 */
export function getImagesForPage(pageKey: string): {
  heroImage: ContentImage | null;
  contentImage: ContentImage | null;
} {
  const h = hashKey(pageKey);
  const heroImage = EVENT_PHOTOS[h % EVENT_PHOTOS.length] ?? null;
  const contentImage = ALL_PHOTOS[(h + 3) % ALL_PHOTOS.length] ?? null;
  return { heroImage, contentImage };
}

/** For templates page: hero can be event, content should be a print sample. */
export function getImagesForTemplatesPage(): {
  heroImage: ContentImage | null;
  contentImage: ContentImage | null;
} {
  return {
    heroImage: EVENT_PHOTOS[2] ?? null,
    contentImage: PRINT_SAMPLES[1] ?? null,
  };
}

/** Contact page: hand-picked images that work well for hero and one content image below the form. */
export function getImagesForContactPage(): {
  heroImage: ContentImage | null;
  contentImage: ContentImage | null;
} {
  return {
    heroImage: EVENT_PHOTOS[3] ?? null,  // wedding moment
    contentImage: PRINT_SAMPLES[2] ?? null,  // print sample
  };
}
