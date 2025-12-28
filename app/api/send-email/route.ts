import { Resend } from 'resend';
import { NextResponse } from 'next/server';

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

    console.log('📤 Sending email to: info@photoboothguys.ca');

    // Create unique subject line with timestamp to prevent email threading
    const timestamp = new Date().toISOString().replace(/T/, ' ').substring(0, 19);
    const uniqueSubject = `New Booking Inquiry from ${name} - ${timestamp}`;

    // Send email
    const data = await resend.emails.send({
      from: 'The Photobooth Guy <contact@thephotoboothguy.ca>',
      to: ['info@photoboothguys.ca'], // Your email address
      replyTo: email,
      subject: uniqueSubject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
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

