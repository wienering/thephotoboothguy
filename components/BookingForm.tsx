'use client';

import { useState, useEffect } from 'react';
import type { QuotePayload, QuotePackage, QuoteAddons } from '@/lib/quote-utils';
import {
  PACKAGES,
  PACKAGES_360,
  AUDIO_GUEST_BOOK_PACKAGE,
  SERVICE_TYPES,
  UNLIMITED_PRINTS_SHORT,
  UNLIMITED_PRINTS_LONG,
  GLAM_BOOTH,
  calculateTotal,
  type ServiceType,
} from '@/lib/pricing';

const REFERRAL_OPTIONS = [
  { value: '', label: 'Select...' },
  { value: 'Google', label: 'Google' },
  { value: 'Social media', label: 'Social media' },
  { value: 'Referral', label: 'Referral' },
  { value: 'Other', label: 'Other' },
] as const;

interface BookingFormProps {
  initialData?: QuotePayload | null;
}

const defaultAddons: QuoteAddons = {
  unlimitedPrints: false,
  glamBooth: false,
  waitingTime: false,
  waitingHours: 0,
};

export default function BookingForm({ initialData }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventVenue: '',
    boothStartTime: '',
    referralSource: '',
    notes: '',
  });
  const [serviceType, setServiceType] = useState<ServiceType>('photo-booth');
  const [selectedPackage, setSelectedPackage] = useState<QuotePackage | null>(initialData?.package ?? null);
  const [addons, setAddons] = useState<QuoteAddons>(initialData?.addons ?? defaultAddons);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const fromQuote = !!initialData?.package;
  const pkg = selectedPackage ?? initialData?.package;
  const total = pkg
    ? calculateTotal(pkg.hours, pkg.price, addons, serviceType)
    : (initialData?.total ?? 0);

  // Get packages for current service type
  const getPackagesForService = () => {
    switch (serviceType) {
      case '360-booth':
        return PACKAGES_360;
      case 'audio-guest-book':
        return null; // Single package, handled separately
      default:
        return PACKAGES;
    }
  };

  // Auto-select audio guest book package when that service is chosen
  useEffect(() => {
    if (serviceType === 'audio-guest-book') {
      setSelectedPackage({
        hours: AUDIO_GUEST_BOOK_PACKAGE.hours,
        price: AUDIO_GUEST_BOOK_PACKAGE.price,
      });
      // Reset add-ons since they don't apply
      setAddons(defaultAddons);
    } else if (!fromQuote) {
      // Reset package when switching services (unless from quote)
      setSelectedPackage(null);
    }
  }, [serviceType, fromQuote]);

  useEffect(() => {
    if (initialData?.contactInfo) {
      const c = initialData.contactInfo;
      setFormData((prev) => ({
        ...prev,
        name: c.name || prev.name,
        email: c.email || prev.email,
        phone: c.phone || prev.phone,
        eventDate: c.eventDate || prev.eventDate,
      }));
    }
    if (initialData?.serviceType) setServiceType(initialData.serviceType);
    if (initialData?.package) setSelectedPackage(initialData.package);
    if (initialData?.addons) setAddons(initialData.addons);
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Parse boothStartTime into hour and minute
  const parseTime = (timeStr: string): { hour: string; minute: string } => {
    if (!timeStr) return { hour: '', minute: '' };
    const [hour, minute] = timeStr.split(':');
    return { hour: hour || '', minute: minute || '' };
  };

  const { hour: timeHour, minute: timeMinute } = parseTime(formData.boothStartTime);

  const handleTimeChange = (field: 'hour' | 'minute', value: string) => {
    const current = parseTime(formData.boothStartTime);
    const newHour = field === 'hour' ? value : current.hour;
    const newMinute = field === 'minute' ? value : current.minute;
    const newTime = newHour && newMinute ? `${newHour.padStart(2, '0')}:${newMinute.padStart(2, '0')}` : '';
    setFormData({
      ...formData,
      boothStartTime: newTime,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pkg) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const body = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.eventDate,
        eventVenue: formData.eventVenue || undefined,
        boothStartTime: formData.boothStartTime || undefined,
        referralSource: formData.referralSource,
        notes: formData.notes || undefined,
        serviceType,
        package: pkg,
        addons: serviceType === 'photo-booth' ? addons : defaultAddons,
        total,
      };

      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          eventVenue: '',
          boothStartTime: '',
          referralSource: '',
          notes: '',
        });
        if (!fromQuote) {
          setServiceType('photo-booth');
          setSelectedPackage(null);
          setAddons(defaultAddons);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass = 'block text-sm uppercase tracking-wider text-gray-700 mb-2 font-medium';
  const inputClass =
    'w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white';

  const packages = getPackagesForService();
  const showAddons = serviceType === 'photo-booth';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="(647) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="eventDate" className={labelClass}>Event Date *</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Event location and start time */}
      <div>
        <label htmlFor="eventVenue" className={labelClass}>
          Where is the event? *
        </label>
        <input
          type="text"
          id="eventVenue"
          name="eventVenue"
          required
          value={formData.eventVenue}
          onChange={handleChange}
          className={inputClass}
          placeholder="Venue name and address (e.g. Liberty Grand, 25 British Columbia Rd, Toronto)"
        />
      </div>
      <div>
        <label className={labelClass}>
          What time should the {serviceType === 'audio-guest-book' ? 'audio guest book' : serviceType === '360-booth' ? '360 booth' : 'photo booth'} open? *
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="boothStartHour" className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
              Hour
            </label>
            <select
              id="boothStartHour"
              required
              value={timeHour}
              onChange={(e) => handleTimeChange('hour', e.target.value)}
              className={inputClass}
            >
              <option value="">Select...</option>
              {Array.from({ length: 16 }, (_, i) => {
                const hour = i + 8; // Start at 8 AM (hour 8)
                return (
                  <option key={hour} value={hour.toString().padStart(2, '0')}>
                    {hour === 12 ? '12 PM' : hour < 12 ? `${hour} AM` : `${hour - 12} PM`}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="boothStartMinute" className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
              Minute
            </label>
            <select
              id="boothStartMinute"
              required
              value={timeMinute}
              onChange={(e) => handleTimeChange('minute', e.target.value)}
              className={inputClass}
            >
              <option value="">Select...</option>
              <option value="00">:00</option>
              <option value="15">:15</option>
              <option value="30">:30</option>
              <option value="45">:45</option>
            </select>
          </div>
        </div>
      </div>

      {/* Service and Package selection (when not from quote) */}
      {!fromQuote && (
        <>
          {/* Service Type Selection */}
          <div>
            <p className={`${labelClass} mb-3`}>Service *</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SERVICE_TYPES.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setServiceType(service.id)}
                  className={`border p-4 text-center transition-colors ${
                    serviceType === service.id 
                      ? 'border-black bg-gray-50 font-medium' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Package Selection - varies by service */}
          <div>
            <p className={`${labelClass} mb-3`}>
              {serviceType === 'audio-guest-book' ? 'Package' : 'Duration *'}
            </p>
            
            {serviceType === 'audio-guest-book' ? (
              // Audio Guest Book - single fixed package
              <div className="border border-black bg-gray-50 p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">Full Event</span>
                    <span className="block text-lg font-light">${AUDIO_GUEST_BOOK_PACKAGE.price}</span>
                  </div>
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Audio Guest Book will be available until midnight.
                </p>
              </div>
            ) : (
              // Photo Booth or 360 Booth - multiple packages
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {packages?.map((p) => (
                  <button
                    key={p.hours}
                    type="button"
                    onClick={() => setSelectedPackage(p)}
                    className={`border p-4 text-left transition-colors ${
                      selectedPackage?.hours === p.hours 
                        ? 'border-black bg-gray-50' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <span className="font-medium">{p.hours} hours</span>
                    <span className="block text-lg font-light">${p.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Add-ons - only for Photo Booth */}
          {showAddons && (
            <div>
              <p className={`${labelClass} mb-3`}>Add-ons</p>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addons.unlimitedPrints}
                    onChange={(e) => setAddons((a) => ({ ...a, unlimitedPrints: e.target.checked }))}
                    className="w-4 h-4"
                  />
                  <span>Unlimited Prints</span>
                  {pkg && (
                    <span className="text-gray-600">
                      ${(pkg.hours <= 3 ? UNLIMITED_PRINTS_SHORT : UNLIMITED_PRINTS_LONG) * pkg.hours}
                    </span>
                  )}
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addons.glamBooth}
                    onChange={(e) => setAddons((a) => ({ ...a, glamBooth: e.target.checked }))}
                    className="w-4 h-4"
                  />
                  <span>Glam Booth — ${GLAM_BOOTH}</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addons.waitingTime}
                    onChange={(e) =>
                      setAddons((a) => ({ ...a, waitingTime: e.target.checked, waitingHours: e.target.checked ? 1 : 0 }))
                    }
                    className="w-4 h-4 mt-1"
                  />
                  <div>
                    <span>Waiting Time — $50/hr</span>
                    {addons.waitingTime && (
                      <select
                        value={addons.waitingHours}
                        onChange={(e) => setAddons((a) => ({ ...a, waitingHours: Number(e.target.value) }))}
                        className="ml-3 px-2 py-1 border border-gray-300 bg-white"
                      >
                        {[1, 2, 3, 4].map((h) => (
                          <option key={h} value={h}>{h} hour{h > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    )}
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Total */}
          {pkg && (
            <div className="bg-gray-50 border border-gray-200 p-4">
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-1">Total</p>
              <p className="text-2xl font-light">${total.toLocaleString()}</p>
            </div>
          )}
        </>
      )}

      {/* Package summary (when from quote) */}
      {fromQuote && pkg && (
        <div className="bg-gray-50 border border-gray-200 p-4">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2 font-medium">Package (from quote)</p>
          <p className="text-gray-800 font-light">
            {pkg.hours} hour photo booth — ${pkg.price.toLocaleString()}
            {addons.unlimitedPrints && ' · Unlimited Prints'}
            {addons.glamBooth && ' · Glam Booth'}
            {addons.waitingTime && addons.waitingHours > 0 && ` · Waiting Time (${addons.waitingHours}h)`}
            {' · '}Total ${total.toLocaleString()}
          </p>
        </div>
      )}

      <div>
        <label htmlFor="referralSource" className={labelClass}>How did you find us? *</label>
        <select
          id="referralSource"
          name="referralSource"
          required
          value={formData.referralSource}
          onChange={handleChange}
          className={inputClass}
        >
          {REFERRAL_OPTIONS.map((opt) => (
            <option key={opt.value || 'empty'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>Notes (optional)</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Any special requests or details..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-gray-50 border border-gray-200 p-4">
          <p className="text-gray-700 font-light">Thank you! We&apos;ll confirm your booking and pricing shortly.</p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-gray-50 border border-red-200 p-4">
          <p className="text-red-700 font-light">Something went wrong. Please try again or call us at 647-378-5332.</p>
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting || !pkg}
        className="w-full bg-black text-white py-4 px-6 font-medium text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
      </button>
    </form>
  );
}
