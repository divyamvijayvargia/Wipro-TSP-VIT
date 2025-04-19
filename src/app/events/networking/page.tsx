// 'use client';

// import { motion } from 'framer-motion';
// import PageHeader from '@/components/PageHeader';
// import { FiUsers, FiCalendar, FiMapPin, FiClock, FiTarget, FiGlobe, FiLinkedin, FiPhone, FiCheckCircle } from 'react-icons/fi';
// import { useState } from 'react';
// import { sendConfirmationEmail, sendAdminNotificationEmail } from '@/utils/emailService';
// import { toast } from 'react-hot-toast';

// const speakers = [
//   {
//     name: 'Dr. Rajesh Kumar',
//     role: 'CTO, Tech Innovations Ltd.',
//     topic: 'Future of Technology',
//     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
//     linkedin: 'https://linkedin.com',
//     expertise: ['AI/ML', 'Digital Transformation', 'Innovation Strategy'],
//     bio: 'Dr. Kumar has over 15 years of experience in leading technological innovations and digital transformation initiatives.',
//   },
//   {
//     name: 'Prof. Sarah Johnson',
//     role: 'AI Research Head, Global Tech',
//     topic: 'AI in Education',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
//     linkedin: 'https://linkedin.com',
//     expertise: ['Educational Technology', 'Machine Learning', 'Data Analytics'],
//     bio: 'Prof. Johnson specializes in applying AI technologies to enhance educational outcomes and learning experiences.',
//   },
//   {
//     name: 'Mr. Arun Patel',
//     role: 'Founder, EduTech Solutions',
//     topic: 'EdTech Innovations',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
//     linkedin: 'https://linkedin.com',
//     expertise: ['EdTech', 'Entrepreneurship', 'Product Development'],
//     bio: 'Mr. Patel has founded multiple successful EdTech ventures and is passionate about revolutionizing education through technology.',
//   },
// ];

// const activities = [
//   {
//     title: 'Industry Panel Discussion',
//     description: 'Interactive session with industry leaders on emerging technologies.',
//     icon: FiUsers,
//     time: '10:00 AM - 11:30 AM',
//     venue: 'Main Auditorium',
//     capacity: 200,
//     image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Speed Networking',
//     description: 'Quick networking sessions to meet industry professionals.',
//     icon: FiClock,
//     time: '11:45 AM - 1:00 PM',
//     venue: 'Conference Hall A',
//     capacity: 100,
//     image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Career Opportunities',
//     description: 'Learn about job and internship opportunities.',
//     icon: FiTarget,
//     time: '2:00 PM - 3:30 PM',
//     venue: 'Conference Hall B',
//     capacity: 150,
//     image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Global Connections',
//     description: 'Connect with professionals from around the world.',
//     icon: FiGlobe,
//     time: '3:45 PM - 5:00 PM',
//     venue: 'Virtual Meeting Room',
//     capacity: 300,
//     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
//   },
// ];

// export default function NetworkingEvent() {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [registrationFormData, setRegistrationFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     organization: '',
//     role: '',
//     industry: '',
//     linkedin: '',
//     expectations: '',
//     activities: [] as string[],
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setRegistrationFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = e.target;
//     setRegistrationFormData(prev => {
//       if (checked) {
//         return { ...prev, activities: [...prev.activities, value] };
//       } else {
//         return { ...prev, activities: prev.activities.filter(activity => activity !== value) };
//       }
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     try {
//       // Send email to admin with silent=true
//       await sendAdminNotificationEmail({
//         name: registrationFormData.fullName,
//         email: registrationFormData.email,
//         phone: registrationFormData.phone,
//         organization: registrationFormData.organization,
//         role: registrationFormData.role,
//         industry: registrationFormData.industry,
//         linkedin: registrationFormData.linkedin,
//         expectations: registrationFormData.expectations,
//         activities: registrationFormData.activities
//       }, 'registration', true);
      
//       // Send confirmation email to user with silent=true
//       await sendConfirmationEmail({
//         name: registrationFormData.fullName,
//         ...registrationFormData
//       }, 'registration', true);
      
//       // Show a single success notification
//       toast.success('Registration successful! Confirmation email sent.');
      
//       // Update UI
//       setIsSubmitted(true);
      
//       // Reset form data
//       setRegistrationFormData({
//         fullName: '',
//         email: '',
//         phone: '',
//         organization: '',
//         role: '',
//         industry: '',
//         linkedin: '',
//         expectations: '',
//         activities: [],
//       });
      
//       // Reset after 5 seconds
//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);
//     } catch (error) {
//       console.error('Error submitting registration:', error);
//       toast.error('There was an error submitting your registration. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-primary">
//       <PageHeader
//         title="Networking Event 2024"
//         description="Connect with industry professionals, share ideas, and explore opportunities."
//       />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Event Info */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-lg shadow-lg border border-gray-300 p-8 mb-12"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="flex items-center">
//               <FiCalendar className="h-6 w-6 text-accent mr-3" />
//               <div>
//                 <h3 className="text-sm font-medium text-black">Date</h3>
//                 <p className="text-lg text-black">June 10, 2024</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FiMapPin className="h-6 w-6 text-accent mr-3" />
//               <div>
//                 <h3 className="text-sm font-medium text-black">Venue</h3>
//                 <p className="text-lg text-black">Conference Center</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FiUsers className="h-6 w-6 text-accent mr-3" />
//               <div>
//                 <h3 className="text-sm font-medium text-black">Participants</h3>
//                 <p className="text-lg text-black">200+ Expected</p>
//               </div>
//             </div>
//           </div>
          
//         </motion.div>
        
//         {/* Keynote Speakers */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-black text-center mb-12">
//             Keynote Speakers
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {speakers.map((speaker, index) => (
//               <motion.div
//                 key={speaker.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300"
//               >
//                 <div className="h-48 relative overflow-hidden">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={speaker.image}
//                     alt={speaker.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-black mb-1">
//                     {speaker.name}
//                   </h3>
//                   <p className="text-accent mb-2">{speaker.role}</p>
//                   <p className="text-gray-700 text-sm mb-4">
//                     Speaking on: {speaker.topic}
//                   </p>
//                   <div className="mb-4">
//                     <h4 className="text-sm font-medium text-black mb-2">Expertise:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {speaker.expertise.map((skill) => (
//                         <span
//                           key={skill}
//                           className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-gray-700 text-sm mb-4">{speaker.bio}</p>
//                   <a
//                     href={speaker.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center text-accent hover:text-accent/80"
//                   >
//                     <FiLinkedin className="h-5 w-5 mr-2" />
//                     Connect on LinkedIn
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
        
//         {/* Activities */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-black text-center mb-12">
//             Event Activities
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {activities.map((activity, index) => (
//               <motion.div
//                 key={activity.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300"
//               >
//                 <div className="h-48 relative overflow-hidden">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={activity.image}
//                     alt={activity.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                   <div className="absolute bottom-4 left-4">
//                     <activity.icon className="h-8 w-8 text-white" />
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-black mb-2">
//                     {activity.title}
//                   </h3>
//                   <p className="text-gray-700 mb-4">{activity.description}</p>
//                   <div className="space-y-2 text-sm text-gray-700">
//                     <div className="flex items-center">
//                       <FiClock className="h-4 w-4 mr-2 text-accent" />
//                       {activity.time}
//                     </div>
//                     <div className="flex items-center">
//                       <FiMapPin className="h-4 w-4 mr-2 text-accent" />
//                       {activity.venue}
//                     </div>
//                     <div className="flex items-center">
//                       <FiUsers className="h-4 w-4 mr-2 text-accent" />
//                       Capacity: {activity.capacity} participants
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
        
//         {/* Registration Form */}
//         <motion.div
//           id="registration-form"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="bg-white rounded-lg shadow-lg p-8 border border-gray-300"
//         >
//           <h2 className="text-2xl font-bold text-black mb-8 text-center">
//             Register for the Event
//           </h2>
          
//           {isSubmitted ? (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="bg-green-100 text-green-800 p-6 rounded-md mb-6 flex items-center justify-center"
//             >
//               <div className="text-center">
//                 <FiCheckCircle className="h-12 w-12 mx-auto mb-4 text-green-600" />
//                 <h3 className="text-xl font-semibold mb-2">Registration Successful!</h3>
//                 <p>Thank you for registering for the Networking Event 2024. We will contact you soon with further details.</p>
//                 <p className="mt-2">A confirmation email has been sent to your email address.</p>
//               </div>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
//               {/* Personal Information */}
//               <div className="space-y-6">
//                 <h3 className="text-lg font-semibold text-black">Personal Information</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-black mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={registrationFormData.fullName}
//                       onChange={handleInputChange}
//                       placeholder="Enter your full name"
//                       required
//                       className="w-full px-4 py-2 border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-black mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={registrationFormData.email}
//                       onChange={handleInputChange}
//                       placeholder="Enter your email address"
//                       required
//                       className="w-full px-4 py-2 border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-black mb-2">
//                       Phone Number
//                     </label>
//                     <div className="flex items-center">
//                       <FiPhone className="h-5 w-5 text-black/50 absolute ml-3" />
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={registrationFormData.phone}
//                         onChange={handleInputChange}
//                         placeholder="Enter your phone number"
//                         required
//                         className="w-full px-4 py-2 pl-10 border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-black mb-2">
//                       Organization
//                     </label>
//                     <input
//                       type="text"
//                       name="organization"
//                       value={registrationFormData.organization}
//                       onChange={handleInputChange}
//                       placeholder="Enter your organization name"
//                       required
//                       className="w-full px-4 py-2 border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Professional Information */}
//               <div className="space-y-6">
//                 <h3 className="text-lg font-semibold text-black">Professional Information</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-black mb-2">
//                       Current Role
//                     </label>
//                     <input
//                       type="text"
//                       name="role"
//                       value={registrationFormData.role}
//                       onChange={handleInputChange}
//                       placeholder="Enter your current role"
//                       required
//                       className="w-full px-4 py-2 border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-black mb-2">
//                       Industry
//                     </label>
//                     <input
//                       type="text"
//                       name="industry"
//                       value={registrationFormData.industry}
//                       onChange={handleInputChange}
//                       placeholder="Enter your industry"
//                       required
//                       className="w-full px-4 py-2 border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-black mb-2">
//                       LinkedIn Profile
//                     </label>
//                     <div className="flex items-center">
//                       <FiLinkedin className="h-5 w-5 text-black/50 absolute ml-3" />
//                       <input
//                         type="url"
//                         name="linkedin"
//                         value={registrationFormData.linkedin}
//                         onChange={handleInputChange}
//                         placeholder="https://linkedin.com/in/your-profile"
//                         className="w-full px-4 py-2 pl-10 border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Preferences */}
//               <div className="space-y-6">
//                 <h3 className="text-lg font-semibold text-black">Event Preferences</h3>
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-2">
//                     Activities of Interest
//                   </label>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {activities.map((activity) => (
//                       <label key={activity.title} className="flex items-center space-x-3">
//                         <input
//                           type="checkbox"
//                           name="activities"
//                           value={activity.title}
//                           checked={registrationFormData.activities.includes(activity.title)}
//                           onChange={handleCheckboxChange}
//                           className="h-4 w-4 text-accent rounded border-accent/20 focus:ring-accent"
//                         />
//                         <span className="text-accent">{activity.title}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-2">
//                     What do you hope to achieve from this event?
//                   </label>
//                   <textarea
//                     name="expectations"
//                     value={registrationFormData.expectations}
//                     onChange={handleInputChange}
//                     placeholder="Share your expectations and goals..."
//                     rows={4}
//                     required
//                     className="w-full px-4 py-2 border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="px-8 py-3 bg-secondary text-primary rounded-md hover:bg-secondary/90 transition-colors"
//                 >
//                   Register Now
//                 </button>
//                 <p className="mt-2 text-sm text-black/70">
//                   Limited seats available. Early bird registrations get special benefits!
//                 </p>
//               </div>
//             </form>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// } 


'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon | TU-VIT-WIPRO</title>
      </Head>
      
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div 
          className="max-w-lg w-full text-center p-8 rounded-lg border border-secondary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <FiClock className="h-20 w-20 text-accent" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Coming Soon
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-8 text-secondary/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            We're currently working on this page. Please check back later for updates.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 rounded-md bg-accent text-primary hover:bg-accent/80 transition-colors duration-300"
            >
              <FiArrowLeft className="mr-2" />
              Return to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}