'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { FiCalendar, FiUsers, FiMapPin, FiBriefcase, FiStar, FiMessageCircle, FiCheck, FiX } from 'react-icons/fi';
import { useState, useRef } from 'react';
import { sendConfirmationEmail, sendAdminNotificationEmail } from '@/utils/emailService';
import { toast } from 'react-hot-toast';

const industryPartners = [
  {
    name: 'Tech Solutions Ltd.',
    logo: '/images/demo.avif',
    description: 'Leading software development company',
  },
  {
    name: 'CloudTech Systems',
    logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Cloud infrastructure provider',
  },
  {
    name: 'AI Solutions Inc.',
    logo: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'AI and ML solutions provider',
  },
  {
    name: 'DataTech Corp',
    logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300&h=300',
    description: 'Big data analytics company',
  },
];

const workshops = [
  {
    title: 'Industry 4.0 and IoT',
    company: 'Tech Solutions Ltd.',
    date: 'March 15-16, 2024',
    location: 'Virtual Workshop',
    description: 'Explore the latest trends in Industry 4.0 and IoT applications.',
    topics: ['Smart Manufacturing', 'IoT Platforms', 'Data Analytics', 'Automation'],
    seats: 50,
    registered: 35,
    price: '₹2,000',
    prerequisites: ['Basic programming knowledge', 'Understanding of electronics'],
    instructor: {
      name: 'Dr. John Smith',
      role: 'Chief Technology Officer',
      experience: '15+ years in IoT',
    },
    image: '/images/industry4.jpeg',
  },
  {
    title: 'Cloud Infrastructure',
    company: 'CloudTech Systems',
    date: 'April 5-6, 2024',
    location: 'Bangalore Campus',
    description: 'Hands-on workshop on cloud infrastructure and deployment.',
    topics: ['AWS', 'Azure', 'DevOps', 'Microservices'],
    seats: 40,
    registered: 28,
    price: '₹2,500',
    prerequisites: ['Basic cloud knowledge', 'Linux fundamentals'],
    instructor: {
      name: 'Ms. Sarah Chen',
      role: 'Cloud Architect',
      experience: '10+ years in cloud computing',
    },
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
  },
  {
    title: 'AI in Manufacturing',
    company: 'AI Solutions Inc.',
    date: 'April 20-21, 2024',
    location: 'Chennai Campus',
    description: 'Learn about AI applications in manufacturing processes.',
    topics: ['Machine Learning', 'Quality Control', 'Predictive Maintenance', 'Computer Vision'],
    seats: 45,
    registered: 20,
    price: '₹3,000',
    prerequisites: ['Python programming', 'Basic ML concepts'],
    instructor: {
      name: 'Prof. Mike Johnson',
      role: 'AI Research Head',
      experience: '12+ years in AI/ML',
    },
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80',
  },
];

const testimonials = [
  {
    name: 'Rahul Kumar',
    role: 'Student, Computer Science',
    workshop: 'Cloud Infrastructure',
    comment: 'The hands-on sessions were incredibly helpful. I learned practical skills that I can apply in my projects.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Final Year, IT',
    workshop: 'AI in Manufacturing',
    comment: 'Amazing workshop! The industry exposure and real-world case studies were eye-opening.',
    rating: 4,
  },
  {
    name: 'Amit Patel',
    role: 'Student, Electronics',
    workshop: 'Industry 4.0 and IoT',
    comment: 'Great blend of theory and practical knowledge. The IoT projects were particularly interesting.',
    rating: 5,
  },
];

export default function IndustrialWorkshops() {
  const [registeringWorkshop, setRegisteringWorkshop] = useState<string | null>(null);
  const [registrationSuccess, setRegistrationSuccess] = useState<string | null>(null);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    workshopDomain: '',
    description: '',
  });
  const [registrationFormData, setRegistrationFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegistrationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterClick = (workshopTitle: string) => {
    setRegisteringWorkshop(workshopTitle);
    setRegistrationSuccess(null);
  };

  const handleRegisterSubmit = async (e: React.FormEvent, workshopTitle: string) => {
    e.preventDefault();
    
    try {
      // Prepare data for email
      const emailData = {
        ...registrationFormData,
        workshop: workshopTitle,
      };
      
      // Send email to admin with silent=true
      await sendAdminNotificationEmail(emailData, 'registration', true);
      
      // Send confirmation email to user with silent=true
      await sendConfirmationEmail(emailData, 'registration', true);
      
      // Show a single success notification
      toast.success('Registration successful! Confirmation email sent.');
      
      // Update UI
      setRegisteringWorkshop(null);
      setRegistrationSuccess(workshopTitle);
      
      // Reset form data
      setRegistrationFormData({
        fullName: '',
        email: '',
        phone: '',
        institution: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setRegistrationSuccess(null);
      }, 5000);
    } catch (error) {
      console.error('Error submitting registration:', error);
      toast.error('There was an error submitting your registration. Please try again.');
    }
  };

  const closeRegistrationForm = () => {
    setRegisteringWorkshop(null);
  };

  const handleProposalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send email to admin with silent=true
      await sendAdminNotificationEmail(formData, 'workshop', true);
      
      // Send confirmation email to user with silent=true
      await sendConfirmationEmail({
        name: formData.contactPerson,
        email: formData.email,
        ...formData
      }, 'workshop', true);
      
      // Show a single success notification
      toast.success('Workshop proposal submitted successfully! Confirmation email sent.');
      
      // Update UI
      setProposalSubmitted(true);
      
      // Reset form data
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        workshopDomain: '',
        description: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setProposalSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting proposal:', error);
      toast.error('There was an error submitting your proposal. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <PageHeader
        title="Industrial Workshops"
        description="Learn directly from industry experts through hands-on workshops and training programs."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Industry Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-accent text-center mb-12">
            Our Industry Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-300"
              >
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 mx-auto rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-700">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Upcoming Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-accent text-center mb-12">
            Upcoming Workshops
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden"
              >
                <div className="h-48 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-0 right-0 m-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {workshop.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">{workshop.company}</p>
                  <p className="text-black mb-4">{workshop.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-black">
                      <FiCalendar className="mr-2 text-accent" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center text-sm text-black">
                      <FiMapPin className="mr-2 text-accent" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center text-sm text-black">
                      <FiUsers className="mr-2 text-accent" />
                      {workshop.registered}/{workshop.seats} Seats Filled
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-black mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-secondary/5 text-black rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 p-4 bg-secondary/5 rounded-lg">
                    <h4 className="text-sm font-medium text-black mb-2">Instructor:</h4>
                    <p className="text-black">{workshop.instructor.name}</p>
                    <p className="text-sm text-black/70">{workshop.instructor.role}</p>
                    <p className="text-sm text-black/70">{workshop.instructor.experience}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-black mb-2">Prerequisites:</h4>
                    <ul className="list-disc list-inside text-sm text-black/70">
                      {workshop.prerequisites.map((prereq) => (
                        <li key={prereq}>{prereq}</li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleRegisterClick(workshop.title)}
                    className="w-full px-4 py-2 text-sm font-medium text-primary bg-secondary rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    Register Now
                  </button>
                  
                  {registrationSuccess === workshop.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-2 bg-green-100 text-green-800 rounded-md flex items-center "
                    >
                      <FiCheck className="h-5 w-5 mr-2" />
                      <span>Registration successful! Check your email for details.</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-accent text-center mb-12">
            Participant Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
              >
                <div className="flex items-center mb-4">
                  <FiMessageCircle className="h-8 w-8 text-accent" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-black">{testimonial.name}</h3>
                    <p className="text-sm text-black/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-black mb-3">{testimonial.comment}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-accent">{testimonial.workshop}</span>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Workshop Proposal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 border border-gray-300"
        >
          <div className="text-center mb-8">
            <FiBriefcase className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-black mb-2">
              Conduct a Workshop
            </h2>
            <p className="text-black max-w-2xl mx-auto">
              If you&apos;re an industry expert interested in conducting a workshop,
              we&apos;d love to collaborate with you. Fill out the proposal form below.
            </p>
          </div>
          
          <form onSubmit={handleProposalSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  placeholder="Enter contact person name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Workshop Domain
                </label>
                <input
                  type="text"
                  name="workshopDomain"
                  value={formData.workshopDomain}
                  onChange={handleInputChange}
                  placeholder="e.g., Cloud Computing, AI, IoT"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-2">
                Workshop Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief description of the proposed workshop"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-secondary text-primary rounded-md hover:bg-secondary/90 transition-colors"
              >
                Submit Proposal
              </button>
              
              {proposalSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-2 bg-green-100 text-green-800 rounded-md inline-flex items-center"
                >
                  <FiCheck className="h-5 w-5 mr-2" />
                  <span>Proposal submitted successfully! We&apos;ll contact you soon.</span>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
      
      {/* Registration Modal */}
      {registeringWorkshop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-black">Register for {registeringWorkshop}</h3>
              <button 
                onClick={closeRegistrationForm}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={(e) => handleRegisterSubmit(e, registeringWorkshop)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={registrationFormData.fullName}
                  onChange={handleRegistrationInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={registrationFormData.email}
                  onChange={handleRegistrationInputChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={registrationFormData.phone}
                  onChange={handleRegistrationInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Institution/Organization
                </label>
                <input
                  type="text"
                  name="institution"
                  value={registrationFormData.institution}
                  onChange={handleRegistrationInputChange}
                  placeholder="Enter your institution or organization"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeRegistrationForm}
                  className="px-4 py-2 text-sm font-medium text-black bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-primary bg-secondary rounded-md hover:bg-secondary/90 transition-colors"
                >
                  Complete Registration
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 