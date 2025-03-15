import { NextResponse } from 'next/server';

// In a real application, you would use a service like EmailJS, SendGrid, or Nodemailer
// This is a simulated API endpoint for demonstration purposes

export async function POST(request: Request) {
  try {
    const emailData = await request.json();
    
    // Validate required fields
    if (!emailData.to || !emailData.from || !emailData.subject || !emailData.text) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real application, you would send the email here using a service
    console.log('Email data received:', emailData);
    
    // Simulate sending email
    // For demonstration, we're just logging the data and returning success
    // In a real application, you would use a service like:
    
    // Example with EmailJS:
    // await emailjs.send(
    //   'YOUR_SERVICE_ID',
    //   'YOUR_TEMPLATE_ID',
    //   emailData,
    //   'YOUR_PUBLIC_KEY'
    // );
    
    // Example with SendGrid:
    // const msg = {
    //   to: emailData.to,
    //   from: emailData.from,
    //   subject: emailData.subject,
    //   text: emailData.text,
    //   html: emailData.html,
    // };
    // await sgMail.send(msg);
    
    // Simulate a delay to mimic API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 