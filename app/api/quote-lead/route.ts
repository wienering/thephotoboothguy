import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { formatEasternDateTime } from '@/lib/timezone';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { contactInfo } = body;

    if (!contactInfo?.name || !contactInfo?.email || !contactInfo?.phone || !contactInfo?.eventDate) {
      return NextResponse.json(
        { error: 'Missing required contact information' },
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
    const subject = `New Quote Lead from ${contactInfo.name} - ${timestamp}`;

    const formattedDate = contactInfo.eventDate &&
      new Date(contactInfo.eventDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    const html = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="padding: 30px;">
          <h1 style="color: #000; font-size: 24px; font-weight: 300; margin-top: 0;">New Quote Lead</h1>
          <p style="color: #666; font-size: 16px;">Someone started a quote on thephotoboothguy.ca and provided their contact details.</p>
          <div style="background-color: #f9f9f9; border-left: 3px solid #000; padding: 20px; margin: 25px 0; border-radius: 4px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase; width: 120px;">Name:</td><td style="padding: 8px 0;">${contactInfo.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${contactInfo.email}" style="color: #000; text-decoration: underline;">${contactInfo.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase;">Phone:</td><td style="padding: 8px 0;"><a href="tel:${contactInfo.phone.replace(/\D/g, '')}" style="color: #000; text-decoration: underline;">${contactInfo.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px; font-weight: 600; text-transform: uppercase;">Event Date:</td><td style="padding: 8px 0;">${formattedDate || contactInfo.eventDate}</td></tr>
            </table>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 25px;">This lead has not yet completed their quote. Follow up if they don't finish.</p>
          <p style="color: #999; font-size: 11px; margin-top: 20px;">Lead submitted: ${timestamp} (Eastern Time)</p>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: 'The Photobooth Guy <contact@thephotoboothguy.ca>',
      to: ['contact@thephotoboothguy.ca'],
      replyTo: contactInfo.email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote lead email error:', error);
    return NextResponse.json(
      { error: 'Failed to send lead notification', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
