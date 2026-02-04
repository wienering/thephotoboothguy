// Shared package and addon pricing (quote tool + booking form)

export const PACKAGES = [
  { hours: 2, price: 550 },
  { hours: 3, price: 750 },
  { hours: 4, price: 950 },
  { hours: 5, price: 1150 },
  { hours: 6, price: 1350 },
] as const;

export const UNLIMITED_PRINTS_SHORT = 60; // per hour for 2-3 hour packages
export const UNLIMITED_PRINTS_LONG = 50;  // per hour for 4-6 hour packages
export const GLAM_BOOTH = 75;
export const WAITING_TIME_PER_HOUR = 50;

export function calculateTotal(
  hours: number,
  price: number,
  addons: { unlimitedPrints: boolean; glamBooth: boolean; waitingTime: boolean; waitingHours: number }
): number {
  let total = price;
  if (addons.unlimitedPrints) {
    const rate = hours <= 3 ? UNLIMITED_PRINTS_SHORT : UNLIMITED_PRINTS_LONG;
    total += rate * hours;
  }
  if (addons.glamBooth) total += GLAM_BOOTH;
  if (addons.waitingTime && addons.waitingHours > 0) total += WAITING_TIME_PER_HOUR * addons.waitingHours;
  return total;
}
