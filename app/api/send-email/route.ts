import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { formatEasternDateTime } from '@/lib/timezone';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !eventDate || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Format the event date in Eastern Time
    const formattedEventDate = eventDate
      ? new Date(eventDate + 'T00:00:00').toLocaleDateString('en-US', {
          timeZone: 'America/Toronto',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : eventDate;

    // Get current timestamp in Eastern Time
    const submissionTime = formatEasternDateTime();

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <p><strong>Submitted:</strong> ${submissionTime}</p>
        
        <h3 style="color: #555; margin-top: 20px;">Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Event Date:</strong> ${formattedEventDate}</p>
        
        <h3 style="color: #555; margin-top: 20px;">Message</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    const emailText = `
New Contact Form Submission
Submitted: ${submissionTime}

Contact Information:
Name: ${name}
Email: ${email}
Phone: ${phone}
Event Date: ${formattedEventDate}

Message:
${message}
    `;

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'The Photobooth Guy <onboarding@resend.dev>', // Update this with your verified domain
      to: ['info@photoboothguys.ca'], // Update with your email
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

