import { toast } from 'react-hot-toast';

// Central configuration for email addresses
export const EMAIL_CONFIG = {
  // Replace this with your own email address
  ADMIN_EMAIL: 'divyamvijayvargia25@gmail.com',
  SENDER_EMAIL: 'noreply@educationalportal.com',
};

interface EmailData {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
    contentType?: string;
  }>;
}

interface UserData {
  name: string;
  email: string;
  [key: string]: string | number | boolean | string[];
}

/**
 * Send an email using the EmailJS service
 * @param emailData The email data to send
 * @param silent Whether to show toast notifications
 * @returns A promise that resolves when the email is sent
 */
export const sendEmail = async (emailData: EmailData, silent: boolean = false): Promise<boolean> => {
  try {
    // In a production environment, you would use a service like EmailJS, SendGrid, or a custom backend
    // This is a simulated API call for demonstration purposes
    console.log('Sending email:', emailData);

    // Simulate API call to email service
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    // Show success toast notification only if not silent
    if (!silent) {
      toast.success('Email sent successfully!');
    }
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    // Show error toast notification only if not silent
    if (!silent) {
      toast.error('Failed to send email. Please try again.');
    }
    return false;
  }
};

/**
 * Send a copy of the form submission to the user
 * @param userData The user data from the form
 * @param formType The type of form being submitted
 * @param silent Whether to show toast notifications
 * @returns A promise that resolves when the email is sent
 */
export const sendConfirmationEmail = async (
  userData: UserData,
  formType: 'contribution' | 'workshop' | 'program' | 'registration' | 'enrollment',
  silent: boolean = false
): Promise<boolean> => {
  const subjects = {
    contribution: 'Thank you for your contribution',
    workshop: 'Workshop Proposal Received',
    program: 'Program Application Received',
    registration: 'Event Registration Confirmation',
    enrollment: 'Course Enrollment Confirmation',
  };

  const messages = {
    contribution: `Dear ${userData.name},\n\nThank you for your contribution to our portal. We have received your submission and will review it shortly.\n\nBest regards,\nThe Educational Portal Team`,
    workshop: `Dear ${userData.name},\n\nThank you for your workshop proposal. We have received your submission and will review it shortly.\n\nBest regards,\nThe Educational Portal Team`,
    program: `Dear ${userData.name},\n\nThank you for your program application. We have received your submission and will review it shortly.\n\nBest regards,\nThe Educational Portal Team`,
    registration: `Dear ${userData.name},\n\nThank you for registering for our event. Your registration has been confirmed.\n\nBest regards,\nThe Educational Portal Team`,
    enrollment: `Dear ${userData.name},\n\nThank you for enrolling in our course. Your enrollment has been confirmed.\n\nBest regards,\nThe Educational Portal Team`,
  };

  const emailData: EmailData = {
    to: userData.email,
    from: EMAIL_CONFIG.ADMIN_EMAIL,
    subject: subjects[formType],
    text: messages[formType],
    replyTo: EMAIL_CONFIG.ADMIN_EMAIL,
  };

  return sendEmail(emailData, silent);
};

/**
 * Send a notification email to the admin
 * @param userData The user data from the form
 * @param formType The type of form being submitted
 * @param silent Whether to show toast notifications
 * @returns A promise that resolves when the email is sent
 */
export const sendAdminNotificationEmail = async (
  userData: UserData,
  formType: 'contribution' | 'workshop' | 'program' | 'registration' | 'enrollment',
  silent: boolean = false
): Promise<boolean> => {
  const subjects = {
    contribution: 'New Portal Contribution',
    workshop: 'New Workshop Proposal',
    program: 'New Program Application',
    registration: 'New Event Registration',
    enrollment: 'New Course Enrollment',
  };

  // Create a formatted message with all user data
  const formattedData = Object.entries(userData)
    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
    .join('\n');

  const emailData: EmailData = {
    to: EMAIL_CONFIG.ADMIN_EMAIL,
    from: EMAIL_CONFIG.SENDER_EMAIL,
    subject: subjects[formType],
    text: `A new ${formType} has been submitted:\n\n${formattedData}`,
  };

  return sendEmail(emailData, silent);
}; 