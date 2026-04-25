// City-specific supporting copy for service-location pages (unique per city, reused across services for that city).

export type SilLocalBlock = {
  heading: string;
  body: string;
  links?: { href: string; label: string }[];
};

const blocks: Record<string, SilLocalBlock> = {
  Toronto: {
    heading: 'Toronto Events and Your Timeline',
    body:
      'Toronto bookings often mean tight load-ins at downtown venues, diverse guest lists, and timelines that do not leave room for tech surprises. We arrive early, coordinate with your planner or venue, and keep the booth line moving so your night stays on schedule.',
    links: [
      { href: '/photo-booth-rental-north-york', label: 'North York rental' },
      { href: '/photo-booth-rental-scarborough', label: 'Scarborough rental' },
      { href: '/photo-booth-rental-etobicoke', label: 'Etobicoke rental' },
    ],
  },
  Mississauga: {
    heading: 'Mississauga Venues and Logistics',
    body:
      'From Pearson-area hotels to banquet halls along Hurontario, we are used to union or security check-ins, loading dock access, and mixed indoor lighting. We calibrate the booth for your room so skin tones and prints look consistent all night.',
    links: [
      { href: '/photo-booth-rental-brampton', label: 'Brampton rental' },
      { href: '/photo-booth-rental-oakville', label: 'Oakville rental' },
    ],
  },
  Brampton: {
    heading: 'Brampton Celebrations',
    body:
      'Large families and high guest counts are common here. We bring enough media and supplies for busy peaks, keep reprints quick, and help guests who want both prints and instant digital sharing.',
    links: [
      { href: '/photo-booth-rental-mississauga', label: 'Mississauga rental' },
      { href: '/photo-booth-rental-vaughan', label: 'Vaughan rental' },
    ],
  },
  Vaughan: {
    heading: 'Vaughan Weddings and Corporate Events',
    body:
      'Woodbridge, Maple, and Thornhill venues often mix modern ballrooms with bright LED décor. We balance lighting so backgrounds stay punchy without harsh shadows—especially important for glam-style and classic booth setups.',
    links: [
      { href: '/photo-booth-rental-markham', label: 'Markham rental' },
      { href: '/photo-booth-rental-richmond-hill', label: 'Richmond Hill rental' },
    ],
  },
  Markham: {
    heading: 'Markham Events',
    body:
      'Cultural celebrations and multi-course timelines are the norm. We respect your MC and photographer, stay flexible through speeches, and keep the booth friendly for every generation at your reception.',
    links: [
      { href: '/photo-booth-rental-scarborough', label: 'Scarborough rental' },
      { href: '/photo-booth-rental-toronto', label: 'Toronto rental' },
    ],
  },
  'Richmond Hill': {
    heading: 'Richmond Hill Details',
    body:
      'Suburban halls and golf clubs mean wider rooms and mixed daylight-to-evening light. We watch white balance as the sun drops so your strip prints stay true to your theme colors.',
    links: [
      { href: '/photo-booth-rental-vaughan', label: 'Vaughan rental' },
      { href: '/photo-booth-rental-markham', label: 'Markham rental' },
    ],
  },
  Oakville: {
    heading: 'Oakville Lakefront and Ballroom Events',
    body:
      'Waterfront and boutique venues often have elegant but reflective surfaces. We position lighting to reduce glare and keep lines organized when cocktail hour flows straight into dancing.',
    links: [
      { href: '/photo-booth-rental-burlington', label: 'Burlington rental' },
      { href: '/photo-booth-rental-mississauga', label: 'Mississauga rental' },
    ],
  },
  Burlington: {
    heading: 'Burlington Gatherings',
    body:
      'Corporate galas and weddings along the lake benefit from a polished guest experience. We dress professionally, communicate with your team on timing, and pack down quietly when the night wraps.',
    links: [
      { href: '/photo-booth-rental-oakville', label: 'Oakville rental' },
      { href: '/photo-booth-rental-mississauga', label: 'Mississauga rental' },
    ],
  },
  Etobicoke: {
    heading: 'Etobicoke Access and Timing',
    body:
      'Gardiner and highway timing matter for delivery windows. We plan buffer for traffic, stage gear efficiently, and stay ready for early guest arrivals.',
    links: [
      { href: '/photo-booth-rental-toronto', label: 'Toronto rental' },
      { href: '/photo-booth-rental-mississauga', label: 'Mississauga rental' },
    ],
  },
  Scarborough: {
    heading: 'Scarborough Venues',
    body:
      'Larger halls and cultural events need confident crowd flow. We guide guests quickly, help with poses when asked, and keep the prop table tidy during busy waves.',
    links: [
      { href: '/photo-booth-rental-markham', label: 'Markham rental' },
      { href: '/photo-booth-rental-toronto', label: 'Toronto rental' },
    ],
  },
  'North York': {
    heading: 'North York and Midtown',
    body:
      'Condos, hotels, and hybrid venues are common here. We fit smaller footprints when needed and still deliver full print quality with clean cable management.',
    links: [
      { href: '/photo-booth-rental-toronto', label: 'Toronto rental' },
      { href: '/photo-booth-rental-vaughan', label: 'Vaughan rental' },
    ],
  },
  Ajax: {
    heading: 'Durham Region Events',
    body:
      'Community centres and newer banquet spaces in Ajax often book full weekends—we arrive prepared for back-to-back Saturday timelines and clear teardown expectations.',
    links: [
      { href: '/photo-booth-rental-pickering', label: 'Pickering rental' },
      { href: '/photo-booth-rental-whitby', label: 'Whitby rental' },
    ],
  },
  Pickering: {
    heading: 'Pickering Celebrations',
    body:
      'Waterfront and casino-adjacent venues draw guests from across the east GTA. We help you position the booth near natural gathering points so participation stays high.',
    links: [
      { href: '/photo-booth-rental-ajax', label: 'Ajax rental' },
      { href: '/photo-booth-rental-oshawa', label: 'Oshawa rental' },
    ],
  },
  Whitby: {
    heading: 'Whitby Events',
    body:
      'From heritage sites to modern halls, we adjust setup to venue rules and photography schedules so your booth complements—not competes with—your official photos.',
    links: [
      { href: '/photo-booth-rental-oshawa', label: 'Oshawa rental' },
      { href: '/photo-booth-rental-pickering', label: 'Pickering rental' },
    ],
  },
  Oshawa: {
    heading: 'Oshawa and East GTA',
    body:
      'Durham events often mean longer travel for vendors; we build that into setup time so doors open on schedule, with redundant supplies so the night runs without interruptions.',
    links: [
      { href: '/photo-booth-rental-whitby', label: 'Whitby rental' },
      { href: '/photo-booth-rental-ajax', label: 'Ajax rental' },
    ],
  },
};

function rewriteLinksForService(
  block: SilLocalBlock,
  serviceSlug: string
): SilLocalBlock {
  if (!block.links?.length) return block;
  const next = block.links.map((l) => ({
    ...l,
    href: l.href.replace(/^\/photo-booth-rental-/, `/${serviceSlug}-`),
  }));
  return { ...block, links: next };
}

/** serviceSlug matches URL segments: photo-booth-rental, glam-booth, audio-guest-book, 360-booth */
export function getSilLocalBlock(city: string, serviceSlug: string): SilLocalBlock | null {
  const base = blocks[city];
  if (!base) return null;
  return rewriteLinksForService(base, serviceSlug);
}
