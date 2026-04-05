type FeatureRow = {
  icon: string;
  title: string;
  description: string;
};

const COPY: Record<string, Record<string, string>> = {
  'photo-booth-rental': {
    'Professional DSLR Camera':
      'Crisp, flattering images using a DSLR and controlled lighting—built for dim ballrooms, LED-heavy stages, and mixed daylight.',
    'Instant Prints':
      'True dye-sublimation strips in seconds so guests walk away with a tangible keepsake and your line keeps moving.',
    'Custom Templates':
      'Print layouts tailored to your fonts, colours, monogram, or sponsor logos—designed before your event, refined until you approve.',
    'Backdrop & Props':
      'A curated prop table and backdrop options that match your theme, plus guidance so groups look balanced in-frame.',
    'Professional Attendant':
      'Setup, crowd flow, reprints, and small fixes handled for you—hosts stay present for guests instead of troubleshooting gear.',
    'Digital Copies':
      'Guests get shares by SMS or email on site, plus an organized online gallery shortly after the event.',
  },
  'glam-booth': {
    'Kardashian Aesthetic':
      'High-contrast black-and-white treatment that stays elegant on skin tones—made for formalwear and statement décor.',
    'Professional Lighting':
      'Beauty-style key and fill so cheekbones pop without harsh shadows, even beside dance-floor LEDs or spotlighting.',
    'Premium Backdrop':
      'Minimal, luxe backdrops that disappear behind the subject so the look stays editorial, not busy.',
    'High-Quality Prints':
      'Dense monochrome prints on quality media—meant for guest books, parent albums, and framed takeaways.',
    'Professional Attendant':
      'Posing cues, queue management, and equipment babysitting so every guest gets a flattering moment.',
    'Digital Copies':
      'Digital glam files delivered quickly for sharing, with consistent treatment across the whole gallery.',
  },
  'audio-guest-book': {
    'Vintage Telephone':
      'A tactile, nostalgic handset that invites guests to slow down and speak from the heart—no app download required.',
    'Custom Greeting':
      'A short recorded prompt in your voice (or ours) so everyone knows what to do and how long to speak.',
    'Unlimited Messages':
      'Let every guest take a turn—no arbitrary caps during peak cocktail or late-night emotional wins.',
    'Easy Self-Service':
      'Pick up, hear the prompt, hang up—simple for grandparents, multilingual families, and kids with help.',
    'High-Quality Audio':
      'Clean capture with levels suited to noisy ballrooms; voices stay intelligible in the final mix.',
    'Digital Delivery':
      'Organized files delivered after the event so you can archive, edit, or share highlights safely.',
  },
  '360-booth': {
    'Professional Camera Arm':
      'Smooth, speed-controlled rotation for cinematic slow-mo without wobble—built for repeat rides all night.',
    'Premium Platform':
      'Stable footing and safety guidance so groups know how to step on, pose, and step off confidently.',
    'Professional Lighting':
      'Balanced highlights on faces and outfits under venue wash—reduces banding when videos compression kicks in.',
    'Instant Video Delivery':
      'Sharable clips routed to phones fast so guests post while the energy is still high.',
    'Professional Attendant':
      'Coached posing, timing on the arm, and crowd control so throughput stays safe and fun.',
    'Props & Accessories':
      'Handheld items that read well on camera without hiding faces—refreshed and tidied between waves.',
  },
};

export function resolveServiceFeatures<T extends FeatureRow>(features: T[], serviceSlug: string): T[] {
  const byTitle = COPY[serviceSlug];
  if (!byTitle) return features;
  return features.map((f) => {
    const next = byTitle[f.title];
    return next ? ({ ...f, description: next } as T) : f;
  });
}
