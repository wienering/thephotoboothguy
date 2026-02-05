import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { encodeQuote } from '@/lib/quote-utils';

const resend = new Resend(process.env.RESEND_API_KEY);

const BASE_URL = 'https://thephotoboothguy.ca';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { contactInfo, serviceType = 'photo-booth', package: pkg, addons, total } = body;

    if (!contactInfo?.email || !pkg || typeof total !== 'number') {
      return NextResponse.json(
        { error: 'Missing contact info, package, or total' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Get service name for display
    const getServiceName = (type: string) => {
      switch (type) {
        case '360-booth': return '360 Booth';
        case 'audio-guest-book': return 'Audio Guest Book';
        default: return 'Photo Booth';
      }
    };
    const serviceName = getServiceName(serviceType);

    const payload = {
      contactInfo: {
        name: contactInfo.name || '',
        email: contactInfo.email,
        phone: contactInfo.phone || '',
        eventDate: contactInfo.eventDate || '',
      },
      serviceType,
      package: { hours: pkg.hours, price: pkg.price },
      addons: serviceType === 'photo-booth' ? (addons || {
        unlimitedPrints: false,
        glamBooth: false,
        waitingTime: false,
        waitingHours: 0,
      }) : {
        unlimitedPrints: false,
        glamBooth: false,
        waitingTime: false,
        waitingHours: 0,
      },
      total,
    };

    const encoded = encodeQuote(payload);
    const bookUrl = `${BASE_URL}/book?quote=${encodeURIComponent(encoded)}`;

    // Add-ons only apply to photo booth
    const addonsList: string[] = [];
    if (serviceType === 'photo-booth' && addons) {
      if (addons.unlimitedPrints) {
        const rate = pkg.hours <= 3 ? 60 : 50;
        addonsList.push(`Unlimited Prints — $${rate * pkg.hours}`);
      }
      if (addons.glamBooth) addonsList.push('Glam Booth — $75');
      if (addons.waitingTime && addons.waitingHours > 0) {
        addonsList.push(`Waiting Time (${addons.waitingHours}h) — $${50 * addons.waitingHours}`);
      }
    }

    // Package display - handle "Full Event" for audio guest book
    const packageDisplay = serviceType === 'audio-guest-book'
      ? `Full Event — $${Number(pkg.price).toLocaleString()}`
      : `${pkg.hours} hours — $${Number(pkg.price).toLocaleString()}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="padding: 30px;">
          <h1 style="color: #000; font-size: 24px; font-weight: 300; margin-top: 0;">The Photobooth Guy — Your Quote</h1>
          <p style="color: #666;">Hi ${(contactInfo.name || '').trim() || 'there'},</p>
          <p style="color: #333;">Here's your ${serviceName.toLowerCase()} quote.</p>
          <div style="background-color: #f9f9f9; border-left: 3px solid #000; padding: 20px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0;"><strong>Service:</strong> ${serviceName}</p>
            <p style="margin: 0 0 8px 0;"><strong>Event date:</strong> ${contactInfo.eventDate || '—'}</p>
            <p style="margin: 0 0 8px 0;"><strong>Package:</strong> ${packageDisplay}</p>
            ${addonsList.length ? `<p style="margin: 0 0 8px 0;"><strong>Add-ons:</strong> ${addonsList.join(' · ')}</p>` : ''}
            <p style="margin: 12px 0 0 0; font-size: 18px;"><strong>Total: $${total.toLocaleString()}</strong></p>
          </div>
          <p style="color: #333; margin-top: 24px;">The link below will bring you back to your booking details so you can complete your reservation when you&apos;re ready.</p>
          <p style="margin: 20px 0;"><a href="${bookUrl}" style="display: inline-block; background: #000; color: #fff; padding: 14px 28px; text-decoration: none; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Book now</a></p>
          <p style="color: #666; font-size: 14px;">All quotes are valid for 30 days. Quotes based on inaccurate or changed event details may not apply.</p>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">The Photobooth Guy · 647-378-5332 · contact@thephotoboothguy.ca</p>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: 'The Photobooth Guy <contact@thephotoboothguy.ca>',
      to: [contactInfo.email],
      subject: `Your ${serviceName} Quote — The Photobooth Guy`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Send quote email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
