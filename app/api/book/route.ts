import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { formatEasternDateTime } from '@/lib/timezone';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      eventDate,
      eventVenue,
      boothStartTime,
      referralSource,
      notes,
      package: pkg,
      addons,
      total,
    } = body;

    if (!name || !email || !phone || !eventDate || !referralSource) {
      return NextResponse.json(
        { error: 'Name, email, phone, event date, and how you found us are required.' },
        { status: 400 }
      );
    }
    if (!eventVenue || !boothStartTime) {
      return NextResponse.json(
        { error: 'Event venue and photo booth start time are required.' },
        { status: 400 }
      );
    }
    if (!pkg || typeof pkg.hours !== 'number' || typeof pkg.price !== 'number') {
      return NextResponse.json(
        { error: 'Please select a package.' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const timestamp = formatEasternDateTime();
    const subject = `Booking Request from ${name} - ${timestamp}`;

    const formattedDate =
      eventDate &&
      new Date(eventDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    // Format time to 12-hour format (e.g., "19:00" -> "7:00 pm")
    const formatTime = (timeStr: string): string => {
      if (!timeStr) return '';
      const [hours, minutes] = timeStr.split(':');
      const hour = parseInt(hours, 10);
      const ampm = hour >= 12 ? 'pm' : 'am';
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minutes} ${ampm}`;
    };

    const formattedTime = formatTime(boothStartTime);
    
    // Package description
    const packageDesc = `${pkg.hours} Hour${pkg.hours > 1 ? 's' : ''} Photo Booth Rental`;

    let packageSection = '';
    if (pkg && typeof pkg.hours === 'number' && typeof pkg.price === 'number') {
      packageSection = `
        <tr><td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600; text-transform: uppercase;">Package:</td>
        <td style="padding: 8px 0; color: #000000;">${pkg.hours} hours — $${Number(pkg.price).toLocaleString()}</td></tr>
      `;
      if (addons) {
        if (addons.unlimitedPrints) packageSection += `<tr><td></td><td>Unlimited Prints</td></tr>`;
        if (addons.glamBooth) packageSection += `<tr><td></td><td>Glam Booth</td></tr>`;
        if (addons.waitingTime && addons.waitingHours) packageSection += `<tr><td></td><td>Waiting Time ${addons.waitingHours}h</td></tr>`;
      }
      if (typeof total === 'number') {
        packageSection += `<tr><td style="padding: 8px 0; color: #666666; font-weight: 600;">Total:</td><td style="padding: 8px 0; color: #000000; font-weight: 600;">$${total.toLocaleString()}</td></tr>`;
      }
    }

    const html = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="padding: 30px;">
          <h1 style="color: #000; font-size: 24px; font-weight: 300; margin-top: 0;">New Booking Request</h1>
          <p style="color: #666; font-size: 16px;">You received a booking request through thephotoboothguy.ca.</p>
          <div style="background-color: #f9f9f9; border-left: 3px solid #000; padding: 20px; margin: 25px 0; border-radius: 4px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase; width: 140px;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #000; text-decoration: underline;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase;">Phone:</td><td style="padding: 8px 0;"><a href="tel:${phone.replace(/\D/g, '')}" style="color: #000; text-decoration: underline;">${phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase;">Event Date:</td><td style="padding: 8px 0;">${formattedDate || eventDate}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase;">Event Venue:</td><td style="padding: 8px 0;">${eventVenue}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase;">Booth Open Time:</td><td style="padding: 8px 0;">${boothStartTime}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase;">How they found us:</td><td style="padding: 8px 0;">${referralSource}</td></tr>
              ${packageSection}
            </table>
          </div>
          ${notes ? `<p style="color: #666; font-size: 14px;"><strong>Notes:</strong></p><div style="background: #fff; border: 1px solid #e0e0e0; padding: 15px; white-space: pre-wrap;">${notes.replace(/\n/g, '<br>')}</div>` : ''}
          <p style="color: #666; font-size: 14px; margin-top: 25px;">Reply to this email to respond to ${name}.</p>
        </div>
      </body>
      </html>
    `;

    // Send notification to business
    await resend.emails.send({
      from: 'The Photobooth Guy <contact@thephotoboothguy.ca>',
      to: ['contact@thephotoboothguy.ca'],
      replyTo: email,
      subject,
      html,
    });

    // Send confirmation email to client
    const addonsList: string[] = [];
    if (addons?.unlimitedPrints) addonsList.push('Unlimited Prints');
    if (addons?.glamBooth) addonsList.push('Glam Booth');
    if (addons?.waitingTime && addons?.waitingHours > 0) {
      addonsList.push(`Waiting Time (${addons.waitingHours} hour${addons.waitingHours > 1 ? 's' : ''})`);
    }
    const hasAddons = addonsList.length > 0;

    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="padding: 30px;">
          <h1 style="color: #000; font-size: 24px; font-weight: 300; margin-top: 0;">Hello, ${name.split(' ')[0]}!</h1>
          <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
            Here is your confirmation that you have booked a <strong>${packageDesc}</strong>${hasAddons ? ` with ${addonsList.join(' and ')}` : ''}.
          </p>
          <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
            Just to recap, your photo booth reservation is for <strong>${formattedDate || eventDate}</strong>, starting time <strong>${formattedTime}</strong> at <strong>${eventVenue}</strong>. Our attendant will arrive approximately 1 hour early to set up and ensure everything is ready for your guests.
          </p>
          <div style="background-color: #f9f9f9; border-left: 3px solid #000; padding: 20px; margin: 25px 0; border-radius: 4px;">
            <h2 style="color: #000; font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 15px;">Next Steps:</h2>
            <p style="color: #333; font-size: 16px; margin-bottom: 15px;">
              <strong>Custom Print Template:</strong> You can get a head start by visiting our <a href="https://thephotoboothguy.ca/templates" style="color: #000; text-decoration: underline;">Photo Booth Template Chooser</a>. Browse through our available templates, choose one by clicking on it, then fill out the form with your customizations, and our system will email us your choice. We&apos;ll create a sample print design and send it to you for review.
            </p>
            <p style="color: #333; font-size: 16px; margin-bottom: 15px;">
              <strong>Venue Requirements:</strong> Please have a 6-foot covered table within 10 feet of a power outlet.
            </p>
            <p style="color: #333; font-size: 16px; margin-bottom: 0;">
              💡 <strong>Tip:</strong> Want your guests to enjoy unlimited prints, or our Audio Guest Book? You can still add it to your booking — just reply to this email and let us know.
            </p>
          </div>
          <p style="color: #333; font-size: 16px; margin-top: 25px;">
            If you have chosen to send the $100 retainer by e-transfer please send it to <a href="mailto:contact@thephotoboothguy.ca" style="color: #000; text-decoration: underline;">contact@thephotoboothguy.ca</a>. Once the retainer is received, your booking is fully confirmed.
          </p>
          <p style="color: #333; font-size: 16px; margin-top: 20px;">
            If anything needs to be updated, reply to this email or call us at <a href="tel:6473785332" style="color: #000; text-decoration: underline;">647-378-5332</a>.
          </p>
          <p style="color: #333; font-size: 16px; margin-top: 30px;">
            We can&apos;t wait to help make your event unforgettable!
          </p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p style="color: #000; font-size: 16px; font-weight: 600; margin: 0;">The Photobooth Guy</p>
            <p style="color: #666; font-size: 14px; margin: 5px 0;"><a href="tel:6473785332" style="color: #000; text-decoration: underline;">647-378-5332</a></p>
            <p style="color: #666; font-size: 14px; margin: 5px 0;"><a href="https://thephotoboothguy.ca" style="color: #000; text-decoration: underline;">https://thephotoboothguy.ca</a></p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            This is an automated message. If there are any errors or if changes need to be made please reach out to us directly.<br>
            Thank you<br>
            Full terms of service can be found <a href="https://thephotoboothguy.ca/terms-of-service" style="color: #000; text-decoration: underline;">here</a>.
          </p>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: 'The Photobooth Guy <contact@thephotoboothguy.ca>',
      to: [email],
      replyTo: 'contact@thephotoboothguy.ca',
      subject: `Booking Confirmation - ${packageDesc}`,
      html: confirmationHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Book API error:', error);
    return NextResponse.json(
      { error: 'Failed to submit booking', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
