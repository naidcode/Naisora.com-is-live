import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_123');
    const body = await req.json();
    const { fullName, restaurantName, email, phone, services, details } = body;

    const { data, error } = await resend.emails.send({
      from: 'Naisora Contact <onboarding@resend.dev>', // Resend's default sender if no domain updated
      to: ['hey@naisora.com'],
      subject: `New Project Inquiry from ${fullName}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #10002b; color: #ffffff; padding: 40px; border-radius: 20px;">
          <h1 style="color: #ffffff; margin-bottom: 24px; font-size: 24px; border-bottom: 1px solid #3c096c; padding-bottom: 16px;">New Project Inquiry</h1>
          
          <div style="margin-bottom: 24px;">
            <p style="color: #9d4edd; text-transform: uppercase; font-size: 10px; font-weight: bold; letter-spacing: 0.1em; margin-bottom: 4px;">Full Name</p>
            <p style="font-size: 16px; margin: 0;">${fullName}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="color: #9d4edd; text-transform: uppercase; font-size: 10px; font-weight: bold; letter-spacing: 0.1em; margin-bottom: 4px;">Restaurant/Company</p>
            <p style="font-size: 16px; margin: 0;">${restaurantName}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="color: #9d4edd; text-transform: uppercase; font-size: 10px; font-weight: bold; letter-spacing: 0.1em; margin-bottom: 4px;">Email Address</p>
            <p style="font-size: 16px; margin: 0;">${email}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="color: #9d4edd; text-transform: uppercase; font-size: 10px; font-weight: bold; letter-spacing: 0.1em; margin-bottom: 4px;">Phone / WhatsApp</p>
            <p style="font-size: 16px; margin: 0;">${phone}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="color: #9d4edd; text-transform: uppercase; font-size: 10px; font-weight: bold; letter-spacing: 0.1em; margin-bottom: 4px;">Services Interested In</p>
            <p style="font-size: 16px; margin: 0;">${services.join(', ')}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="color: #9d4edd; text-transform: uppercase; font-size: 10px; font-weight: bold; letter-spacing: 0.1em; margin-bottom: 4px;">Project Details</p>
            <p style="font-size: 16px; margin: 0; line-height: 1.6;">${details}</p>
          </div>

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #3c096c; font-size: 12px; color: #5a189a;">
            This email was sent from the Naisora Contact Form.
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
