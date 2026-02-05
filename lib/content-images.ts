/**
 * Shared pool of event/print photos for use across the site.
 * Hero images use the New hero images set; each page gets a different hero.
 */

export interface ContentImage {
  src: string;
  alt: string;
}

/** New hero images (landscape) – each page uses a different one. Home = hero1, Holiday Party = hero4, Audio Guestbook = hero3, Glam Booth = hero10. */
const NEW_HERO_IMAGES: ContentImage[] = [
  { src: '/photos/hero1webp.webp', alt: 'Photo booth hero' },
  { src: '/photos/hero2webp.webp', alt: 'Photo booth hero' },
  { src: '/photos/hero3webp.webp', alt: 'Audio guestbook hero' },
  { src: '/photos/hero4webp.webp', alt: 'Holiday party photo booth hero' },
  { src: '/photos/hero5webp.webp', alt: 'Photo booth hero' },
  { src: '/photos/hero6webp.webp', alt: 'Photo booth hero' },
  { src: '/photos/hero7webp.webp', alt: 'Photo booth hero' },
  { src: '/photos/hero8webp.webp', alt: 'Photo booth hero' },
  { src: '/photos/hero9webp.webp', alt: 'Photo booth hero' },
  { src: '/photos/hero10webp.webp', alt: 'Glam booth hero' },
];

/** Event/booth photos (used for in-content images only, not heroes). */
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

/** 360 booth photos for 360-booth service pages. */
const PHOTOS_360: ContentImage[] = [
  { src: '/photos/72243.jpg', alt: 'Guests enjoying a 360 video booth experience at a Toronto event' },
  { src: '/photos/99232.jpg', alt: '360 photo booth platform with guests at a GTA wedding or party' },
  { src: '/photos/IMG_7399.jpeg', alt: '360 spin booth capturing video at a Greater Toronto Area event' },
  { src: '/photos/IMG_8375.jpeg', alt: 'Fun 360 video booth moment at a Toronto area celebration' },
];

/** Holiday party photos for holiday party page. */
const HOLIDAY_PHOTOS: ContentImage[] = [
  // Event photos
  { src: '/photos/holiday/20241210_171353533.jpg', alt: 'Holiday party photo booth rental with festive backdrop in Toronto' },
  { src: '/photos/holiday/20251205_231148030.jpg', alt: 'Holiday event photo booth prints and festive decorations' },
  { src: '/photos/holiday/20251211_191236880.jpg', alt: 'Festive photo booth setup at a corporate Christmas event' },
  // Print templates group 1
  { src: '/photos/holiday/20251130_133809784.jpg', alt: 'Corporate holiday party photo booth experience in the GTA' },
  { src: '/photos/holiday/20251209_125620936.jpg', alt: 'Christmas photo booth moment at a Toronto holiday party' },
  { src: '/photos/holiday/20251209_125627091.jpg', alt: 'Holiday celebration with photo booth and custom prints' },
  // Print templates group 2
  { src: '/photos/holiday/20251204_220531049.jpg', alt: 'Guests enjoying Christmas party photo booth with props' },
  { src: '/photos/holiday/20251212_212432887.jpg', alt: 'Holiday party guests with photo booth props in the GTA' },
  { src: '/photos/holiday/20260123_204526147.jpg', alt: 'Photo booth fun at a seasonal celebration in Toronto' },
];

/** Holiday party video. */
export const HOLIDAY_VIDEO = '/photos/holiday/20251219_210938437webm.webm';

const ALL_PHOTOS = [...EVENT_PHOTOS, ...PRINT_SAMPLES];

/** Simple numeric hash from a string for deterministic but varied picks. */
function hashKey(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Returns a hero image and up to 2 content images for a service-location page.
 * Hero from NEW_HERO_IMAGES. Special cases: audio-guest-book = hero3, glam-booth = hero10.
 */
export function getImagesForServicePage(serviceSlug: string, city: string): {
  heroImage: ContentImage | null;
  contentImages: ContentImage[];
} {
  const key = `${serviceSlug}-${city}`;
  const h = hashKey(key);

  // Specific hero images for certain service types
  let heroImage: ContentImage | null;
  if (serviceSlug === 'audio-guest-book') {
    heroImage = NEW_HERO_IMAGES[2] ?? null; // hero3webp
  } else if (serviceSlug === 'glam-booth') {
    heroImage = NEW_HERO_IMAGES[9] ?? null; // hero10webp
  } else {
    // Other services use varied heroes (excluding 0=home, 2=audio, 3=holiday, 9=glam)
    const heroIndices = [1, 4, 5, 6, 7, 8];
    heroImage = NEW_HERO_IMAGES[heroIndices[h % heroIndices.length]] ?? null;
  }

  // 360 booth pages use 360-specific content images
  let contentImages: ContentImage[];
  if (serviceSlug === '360-booth') {
    const i1 = h % PHOTOS_360.length;
    const i2 = (h + 2) % PHOTOS_360.length;
    contentImages = [PHOTOS_360[i1], PHOTOS_360[i2]].filter(Boolean);
  } else {
    const i1 = (h + 2) % ALL_PHOTOS.length;
    const i2 = (h + 7) % ALL_PHOTOS.length;
    contentImages = [ALL_PHOTOS[i1], ALL_PHOTOS[i2]].filter(Boolean);
  }

  return { heroImage, contentImages };
}

/**
 * Returns a hero image and one content image for standalone pages.
 * Each page gets a different hero from NEW_HERO_IMAGES.
 */
export function getImagesForPage(pageKey: string): {
  heroImage: ContentImage | null;
  contentImage: ContentImage | null;
} {
  const map: Record<string, number> = {
    equipment: 4,
    templates: 5,
    contact: 6,
    backdrops: 7,
    quote: 8,
    book: 1,
  };
  const heroIndex = map[pageKey] ?? 2;
  const heroImage = NEW_HERO_IMAGES[heroIndex] ?? null;
  const h = hashKey(pageKey);
  const contentImage = ALL_PHOTOS[(h + 3) % ALL_PHOTOS.length] ?? null;
  return { heroImage, contentImage };
}

/** For templates page. */
export function getImagesForTemplatesPage(): {
  heroImage: ContentImage | null;
  contentImage: ContentImage | null;
} {
  return {
    heroImage: NEW_HERO_IMAGES[5] ?? null,
    contentImage: PRINT_SAMPLES[1] ?? null,
  };
}

/** Contact page. */
export function getImagesForContactPage(): {
  heroImage: ContentImage | null;
  contentImage: ContentImage | null;
} {
  return {
    heroImage: NEW_HERO_IMAGES[6] ?? null,
    contentImage: PRINT_SAMPLES[2] ?? null,
  };
}

/** Book page. */
export function getImagesForBookPage(): {
  heroImage: ContentImage | null;
} {
  return {
    heroImage: NEW_HERO_IMAGES[1] ?? null,
  };
}

/** Home page uses hero1 (index 0). */
export function getHeroForHome(): ContentImage | null {
  return NEW_HERO_IMAGES[0] ?? null;
}

/** Holiday Party / Corporate Holiday Party page uses hero4. */
export function getHeroForHolidayPartyPage(): ContentImage | null {
  return NEW_HERO_IMAGES[3] ?? null;
}

/** Get holiday party content photos (not hero). */
export function getHolidayPartyPhotos(): ContentImage[] {
  return HOLIDAY_PHOTOS;
}
