// POST /api/contact - Handle contact form submissions
// Sends email directly without storing in database

import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { z } from 'zod';

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().max(200).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Send email directly
    const emailResult = await sendContactEmail(validatedData);

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}
