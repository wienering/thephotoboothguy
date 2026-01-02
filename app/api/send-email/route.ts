import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { formatEasternDateTime } from '@/lib/timezone';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, message } = body;

    console.log('📧 Received form submission:', { name, email, phone, eventDate });

    // Validate required fields
    if (!name || !email || !phone || !eventDate || !message) {
      console.error('❌ Missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('📤 Sending email to: contact@thephotoboothguy.ca');

    // Create unique subject line with timestamp in Eastern Time to prevent email threading
    const timestamp = formatEasternDateTime();
    const uniqueSubject = `New Booking Inquiry from ${name} - ${timestamp}`;

    // Format the event date nicely
    const formattedDate = new Date(eventDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send email
    const data = await resend.emails.send({
      from: 'The Photobooth Guy <contact@thephotoboothguy.ca>',
      to: ['contact@thephotoboothguy.ca'], // Your email address
      replyTo: email,
      subject: uniqueSubject,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 8px; padding: 30px;">
            <h1 style="color: #000000; font-size: 24px; font-weight: 300; margin-top: 0; margin-bottom: 20px;">New 
            Booking 
            Inquiry</h1>
            
            <p style="color: #666666; font-size: 16px; margin-bottom: 30px;">Hi there,</p>
            
            <p style="color: #333333; font-size: 16px; margin-bottom: 30px;">You've received a new inquiry through your website. Here are the details:</p>
            
            <div style="background-color: #f9f9f9; border-left: 3px solid #000000; padding: 20px; margin: 25px 0; border-radius: 4px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #000000; font-size: 16px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email:</td>
                  <td style="padding: 8px 0; color: #000000; font-size: 16px;"><a href="mailto:${email}" style="color: #000000; text-decoration: underline;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone:</td>
                  <td style="padding: 8px 0; color: #000000; font-size: 16px;"><a href="tel:${phone}" style="color: #000000; text-decoration: underline;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Event Date:</td>
                  <td style="padding: 8px 0; color: #000000; font-size: 16px; font-weight: 500;">${formattedDate}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin: 30px 0;">
              <p style="color: #666666; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">Message:</p>
              <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 4px; padding: 20px; color: #333333; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="color: #666666; font-size: 14px; margin: 0;">You can reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('✅ Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('❌ Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
