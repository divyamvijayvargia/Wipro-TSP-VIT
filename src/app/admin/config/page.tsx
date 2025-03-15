'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EMAIL_CONFIG } from '@/utils/emailService';
import { toast } from 'react-hot-toast';

export default function AdminConfig() {
  const [adminEmail, setAdminEmail] = useState(EMAIL_CONFIG.ADMIN_EMAIL);
  const [senderEmail, setSenderEmail] = useState(EMAIL_CONFIG.SENDER_EMAIL);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would save this to a database or configuration file
      // For this demo, we'll just update the EMAIL_CONFIG object
      EMAIL_CONFIG.ADMIN_EMAIL = adminEmail;
      EMAIL_CONFIG.SENDER_EMAIL = senderEmail;

      // Show success message
      toast.success('Email configuration updated successfully!');
    } catch (error) {
      console.error('Error updating email configuration:', error);
      toast.error('Failed to update email configuration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Email Configuration
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
            Update your email address for receiving form submissions and sending confirmation emails.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
                    Admin Email Address
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    This email address will receive all form submissions and will be used as the sender for confirmation emails.
                  </p>
                  <input
                    type="email"
                    id="adminEmail"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">
                    Sender Email Address (Optional)
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    This email address will be used as the sender for admin notification emails. Leave as is if unsure.
                  </p>
                  <input
                    type="email"
                    id="senderEmail"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="Enter sender email address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500/20 text-black"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span>Update Email Configuration</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Current Configuration</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Admin Email:</span> {EMAIL_CONFIG.ADMIN_EMAIL}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Sender Email:</span> {EMAIL_CONFIG.SENDER_EMAIL}
              </p>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-md border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> This configuration is temporary and will reset when the application is restarted. 
                In a production environment, you would save this configuration to a database or environment variables.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 