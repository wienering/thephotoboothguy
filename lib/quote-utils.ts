// Quote payload matches the quote tool: contactInfo, package, addons, total, createdAt

export interface QuoteContactInfo {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
}

export interface QuotePackage {
  hours: number;
  price: number;
}

export interface QuoteAddons {
  unlimitedPrints: boolean;
  glamBooth: boolean;
  waitingTime: boolean;
  waitingHours: number;
}

export interface QuotePayload {
  contactInfo: QuoteContactInfo;
  package: QuotePackage;
  addons: QuoteAddons;
  total: number;
  createdAt: string; // ISO date string
}

const QUOTE_MAX_AGE_DAYS = 30;

function toBase64(json: string): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(json, 'utf-8').toString('base64');
  }
  return btoa(unescape(encodeURIComponent(json)));
}

function fromBase64(encoded: string): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(encoded, 'base64').toString('utf-8');
  }
  return decodeURIComponent(escape(atob(encoded)));
}

/**
 * Encode a quote payload to base64 for use in ?quote= URL param.
 */
export function encodeQuote(payload: Omit<QuotePayload, 'createdAt'>): string {
  const withTimestamp: QuotePayload = {
    ...payload,
    createdAt: new Date().toISOString(),
  };
  return toBase64(JSON.stringify(withTimestamp));
}

/**
 * Decode a base64 quote string. Returns null if invalid.
 */
export function decodeQuote(encoded: string): QuotePayload | null {
  try {
    const json = fromBase64(encoded);
    const parsed = JSON.parse(json) as QuotePayload;
    if (
      !parsed.contactInfo ||
      !parsed.package ||
      !parsed.addons ||
      typeof parsed.total !== 'number' ||
      !parsed.createdAt
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Check if a quote has expired (older than maxAgeDays).
 */
export function isQuoteExpired(
  payload: QuotePayload,
  maxAgeDays: number = QUOTE_MAX_AGE_DAYS
): boolean {
  const created = new Date(payload.createdAt).getTime();
  const now = Date.now();
  const ageMs = now - created;
  const maxAgeMs = maxAgeDays * 24 * 60 * 60 * 1000;
  return ageMs > maxAgeMs;
}

export { QUOTE_MAX_AGE_DAYS };
