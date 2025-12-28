// Timezone utilities for Eastern Time (EST/EDT)

/**
 * Get the current date/time components in Eastern Time
 */
function getEasternTimeComponents(): { year: number; month: number; day: number; hours: number; minutes: number; seconds: number; dayOfWeek: number } {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long',
    hour12: false
  });
  
  const parts = formatter.formatToParts(now);
  const getPart = (type: string) => {
    const part = parts.find(p => p.type === type);
    return part ? parseInt(part.value, 10) : 0;
  };
  
  const weekdayMap: { [key: string]: number } = {
    'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
    'Thursday': 4, 'Friday': 5, 'Saturday': 6
  };
  
  const weekdayPart = parts.find(p => p.type === 'weekday');
  const dayOfWeek = weekdayPart ? weekdayMap[weekdayPart.value] : 0;
  
  return {
    year: getPart('year'),
    month: getPart('month'),
    day: getPart('day'),
    hours: getPart('hour'),
    minutes: getPart('minute'),
    seconds: getPart('second'),
    dayOfWeek
  };
}

/**
 * Get the current day of week (0-6) in Eastern Time
 * 0 = Sunday, 1 = Monday, etc.
 */
export function getEasternDayOfWeek(): number {
  return getEasternTimeComponents().dayOfWeek;
}

/**
 * Get the current year in Eastern Time
 */
export function getEasternYear(): number {
  return getEasternTimeComponents().year;
}

/**
 * Get a Date object representing the current time in Eastern Timezone
 * Note: This creates a Date object, but JavaScript Date objects are always in UTC internally
 * Use the component functions (getEasternDayOfWeek, etc.) for timezone-aware operations
 */
export function getEasternDate(): Date {
  const components = getEasternTimeComponents();
  // Create a date in UTC that represents the Eastern time
  // This is a workaround since JS Date doesn't support timezones directly
  return new Date(Date.UTC(
    components.year,
    components.month - 1,
    components.day,
    components.hours,
    components.minutes,
    components.seconds
  ));
}

/**
 * Format a date string to Eastern Time ISO format
 */
export function formatEasternDate(date: Date): string {
  return date.toLocaleString('en-CA', { 
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

/**
 * Format current date and time in Eastern Time for emails
 * Returns a formatted string like "January 15, 2024 at 2:30 PM EST"
 */
export function formatEasternDateTime(): string {
  const now = new Date();
  return now.toLocaleString('en-US', {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  });
}

/**
 * Format a date/time string in Eastern Time
 * Returns a formatted string like "January 15, 2024 at 2:30 PM EST"
 */
export function formatEasternDateTimeString(date: Date): string {
  return date.toLocaleString('en-US', {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZoneName: 'short'
  });
}

