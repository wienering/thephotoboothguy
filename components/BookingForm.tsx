'use client';

import { useState, useEffect } from 'react';
import type { QuotePayload } from '@/lib/quote-utils';

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

export default function BookingForm({ initialData }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    referralSource: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const body = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.eventDate,
        referralSource: formData.referralSource,
        notes: formData.notes || undefined,
        ...(initialData && {
          package: initialData.package,
          addons: initialData.addons,
          total: initialData.total,
        }),
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
          referralSource: '',
          notes: '',
        });
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

  const pkg = initialData?.package;
  const addons = initialData?.addons;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm uppercase tracking-wider text-gray-700 mb-2 font-medium">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm uppercase tracking-wider text-gray-700 mb-2 font-medium">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm uppercase tracking-wider text-gray-700 mb-2 font-medium">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
            placeholder="(647) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="eventDate" className="block text-sm uppercase tracking-wider text-gray-700 mb-2 font-medium">
            Event Date *
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
          />
        </div>
      </div>

      {pkg && (
        <div className="bg-gray-50 border border-gray-200 p-4">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2 font-medium">Package (from quote)</p>
          <p className="text-gray-800 font-light">
            {pkg.hours} hour photo booth — ${pkg.price.toLocaleString()}
            {addons?.unlimitedPrints && ' · Unlimited Prints'}
            {addons?.glamBooth && ' · Glam Booth'}
            {addons?.waitingTime && addons.waitingHours > 0 && ` · Waiting Time (${addons.waitingHours}h)`}
            {initialData && ` · Total $${initialData.total.toLocaleString()}`}
          </p>
        </div>
      )}

      <div>
        <label htmlFor="referralSource" className="block text-sm uppercase tracking-wider text-gray-700 mb-2 font-medium">
          How did you find us? *
        </label>
        <select
          id="referralSource"
          name="referralSource"
          required
          value={formData.referralSource}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
        >
          {REFERRAL_OPTIONS.map((opt) => (
            <option key={opt.value || 'empty'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm uppercase tracking-wider text-gray-700 mb-2 font-medium">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none bg-white"
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
        disabled={isSubmitting}
        className="w-full bg-black text-white py-4 px-6 font-medium text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
      </button>
    </form>
  );
}
