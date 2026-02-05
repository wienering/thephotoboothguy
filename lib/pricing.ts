// Shared package and addon pricing (quote tool + booking form)

export type ServiceType = 'photo-booth' | '360-booth' | 'audio-guest-book';

export const SERVICE_TYPES = [
  { id: 'photo-booth' as const, name: 'Photo Booth' },
  { id: '360-booth' as const, name: '360 Booth' },
  { id: 'audio-guest-book' as const, name: 'Audio Guest Book' },
];

export const PACKAGES = [
  { hours: 2, price: 550 },
  { hours: 3, price: 750 },
  { hours: 4, price: 950 },
  { hours: 5, price: 1150 },
  { hours: 6, price: 1350 },
] as const;

// 360 Booth uses same pricing as Photo Booth
export const PACKAGES_360 = [
  { hours: 2, price: 550 },
  { hours: 3, price: 750 },
  { hours: 4, price: 950 },
  { hours: 5, price: 1150 },
  { hours: 6, price: 1350 },
] as const;

// Audio Guest Book - single package, full event
export const AUDIO_GUEST_BOOK_PACKAGE = {
  hours: 0, // 0 = full event
  price: 450,
  duration: 'Full Event',
};

export const UNLIMITED_PRINTS_SHORT = 60; // per hour for 2-3 hour packages
export const UNLIMITED_PRINTS_LONG = 50;  // per hour for 4-6 hour packages
export const GLAM_BOOTH = 75;
export const WAITING_TIME_PER_HOUR = 50;

export function calculateTotal(
  hours: number,
  price: number,
  addons: { unlimitedPrints: boolean; glamBooth: boolean; waitingTime: boolean; waitingHours: number },
  serviceType: ServiceType = 'photo-booth'
): number {
  let total = price;
  
  // Add-ons only apply to photo booth
  if (serviceType === 'photo-booth') {
    if (addons.unlimitedPrints) {
      const rate = hours <= 3 ? UNLIMITED_PRINTS_SHORT : UNLIMITED_PRINTS_LONG;
      total += rate * hours;
    }
    if (addons.glamBooth) total += GLAM_BOOTH;
    if (addons.waitingTime && addons.waitingHours > 0) total += WAITING_TIME_PER_HOUR * addons.waitingHours;
  }
  
  return total;
}
