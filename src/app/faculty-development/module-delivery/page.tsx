// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import PageHeader from '@/components/PageHeader';
// import { FiMonitor, FiUsers, FiClock, FiCalendar, FiCheckCircle, FiPlay, FiFileText, FiBarChart2, FiChevronDown, FiChevronUp, FiMail } from 'react-icons/fi';
// import Link from 'next/link';

// const currentModules = [
//   {
//     title: 'Web Development ',
//     institution: 'Teesside University',
//     startDate: 'March 15, 2024',
//     endDate: 'April 30, 2024',
//     progress: 35,
//     students: 45,
//     nextSession: 'Tomorrow, 10:00 AM',
//     completedTopics: 7,
//     totalTopics: 20,
//     image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80',
//     details: {
//       description: 'This module covers modern web development techniques including React, Next.js, and responsive design principles.',
//       learningOutcomes: [
//         'Build responsive web applications using React',
//         'Implement server-side rendering with Next.js',
//         'Create accessible user interfaces',
//         'Deploy applications to production environments'
//       ],
//       assessmentMethods: [
//         'Weekly coding assignments (40%)',
//         'Mid-term project (25%)',
//         'Final project (35%)'
//       ],
//       instructors: [
//         'Dr. Priya Sharma (Lead)',
//         'Prof. Amit Verma (Assistant)'
//       ]
//     }
//   },
//   {
//     title: 'Machine Learning Fundamentals',
//     institution: 'VIT',
//     startDate: 'March 1, 2024',
//     endDate: 'April 15, 2024',
//     progress: 60,
//     students: 50,
//     nextSession: 'Today, 2:00 PM',
//     completedTopics: 12,
//     totalTopics: 20,
//     image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80',
//     details: {
//       description: 'An introduction to machine learning concepts, algorithms, and practical applications using Python and popular ML libraries.',
//       learningOutcomes: [
//         'Understand core ML algorithms and their applications',
//         'Implement supervised and unsupervised learning models',
//         'Evaluate model performance using appropriate metrics',
//         'Apply ML techniques to real-world problems'
//       ],
//       assessmentMethods: [
//         'Bi-weekly quizzes (30%)',
//         'Practical assignments (30%)',
//         'Final project (40%)'
//       ],
//       instructors: [
//         'Dr. Rajesh Kumar (Lead)',
//         'Dr. Meena Patel (Assistant)'
//       ]
//     }
//   },
// ];

// const upcomingModules = [
//   {
//     title: 'Cloud Computing',
//     institution: 'Teesside University',
//     startDate: 'April 1, 2024',
//     duration: '6 weeks',
//     enrolledStudents: 40,
//     image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Data Science',
//     institution: 'VIT',
//     startDate: 'April 15, 2024',
//     duration: '8 weeks',
//     enrolledStudents: 55,
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
//   },
// ];

// const deliveryMethods = [
//   {
//     title: 'Live Virtual Classes',
//     description: 'Interactive online sessions with real-time student participation.',
//     icon: FiMonitor,
//     features: ['Screen sharing', 'Live Q&A', 'Breakout rooms', 'Session recording'],
//     image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Hybrid Learning',
//     description: 'Combination of online and physical classroom sessions.',
//     icon: FiUsers,
//     features: ['Flexible attendance', 'Resource sharing', 'Mixed interactions', 'Recorded backup'],
//     image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Self-Paced Learning',
//     description: 'Pre-recorded content with flexible learning schedule.',
//     icon: FiClock,
//     features: ['24/7 access', 'Progress tracking', 'Auto-graded quizzes', 'Discussion forums'],
//     image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
//   },
// ];

// const institutions = [
//   {
//     name: 'Teesside University (TU)',
//     location: 'Middlesbrough, United Kingdom',
//     programs: ['Engineering', 'Science', 'Management'],
//   },
//   {
//     name: 'Vellore Institute of Technology (VIT)',
//     location: 'Tamil Nadu, India',
//     programs: ['Technology', 'Applied Sciences', 'Engineering'],
//   },
// ];

// export default function ModuleDelivery() {
//   const [expandedModules, setExpandedModules] = useState<{[key: string]: boolean}>({});

//   const toggleModuleDetails = (moduleTitle: string, e: React.MouseEvent) => {
//     e.stopPropagation(); // Prevent event bubbling
//     setExpandedModules(prev => ({
//       ...prev,
//       [moduleTitle]: !prev[moduleTitle]
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-primary">
//       <PageHeader
//         title="Module Delivery Dashboard"
//         description="Track and manage your ongoing and upcoming module deliveries."
//       />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Current Modules */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-12"
//         >
//           <h2 className="text-2xl font-bold text-accent mb-6">
//             Current Modules
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {currentModules.map((module, index) => (
//               <motion.div
//                 key={module.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 overflow-hidden"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={module.image}
//                       alt={module.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-black">{module.title}</h3>
//                     <p className="text-accent">{module.institution}</p>
//                   </div>
//                   <span className="ml-auto px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
//                     {module.progress}% Complete
//                   </span>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="h-2 bg-gray-200 rounded-full">
//                     <div
//                       className="h-full bg-accent rounded-full"
//                       style={{ width: `${module.progress}%` }}
//                     />
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-600">Duration</p>
//                       <p className="text-black">{module.startDate} - {module.endDate}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Students</p>
//                       <p className="text-black">{module.students} Enrolled</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Next Session</p>
//                       <p className="text-black">{module.nextSession}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Topics Covered</p>
//                       <p className="text-black">{module.completedTopics}/{module.totalTopics}</p>
//                     </div>
//                   </div>
                  
//                   {expandedModules[module.title] && (
//                     <motion.div 
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ 
//                         duration: 0.4, 
//                         ease: "easeInOut" 
//                       }}
//                       className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4 overflow-hidden"
//                     >
//                       <h4 className="font-semibold text-black mb-2">Module Description</h4>
//                       <p className="text-black mb-4">{module.details.description}</p>
                      
//                       <h4 className="font-semibold text-black mb-2">Learning Outcomes</h4>
//                       <ul className="list-disc pl-5 mb-4 text-black">
//                         {module.details.learningOutcomes.map((outcome, i) => (
//                           <li key={i}>{outcome}</li>
//                         ))}
//                       </ul>
                      
//                       <h4 className="font-semibold text-black mb-2">Assessment Methods</h4>
//                       <ul className="list-disc pl-5 mb-4 text-black">
//                         {module.details.assessmentMethods.map((method, i) => (
//                           <li key={i}>{method}</li>
//                         ))}
//                       </ul>
                      
//                       <h4 className="font-semibold text-black mb-2">Instructors</h4>
//                       <ul className="list-disc pl-5 text-black">
//                         {module.details.instructors.map((instructor, i) => (
//                           <li key={i}>{instructor}</li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
                  
//                   <div className="flex justify-end space-x-4">
//                     <button 
//                       onClick={(e) => toggleModuleDetails(module.title, e)}
//                       className="flex items-center px-4 py-2 text-sm bg-gray-100 text-black rounded-md border border-gray-300 hover:bg-gray-200 transition-colors"
//                     >
//                       <FiFileText className="mr-2" />
//                       {expandedModules[module.title] ? (
//                         <>Hide Details <FiChevronUp className="ml-1" /></>
//                       ) : (
//                         <>View Details <FiChevronDown className="ml-1" /></>
//                       )}
//                     </button>
//                     <button className="flex items-center px-4 py-2 text-sm bg-secondary text-primary rounded-md hover:bg-secondary/90 transition-colors">
//                       <FiPlay className="mr-2" />
//                       Start Session
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
        
//         {/* Upcoming Modules */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mb-12"
//         >
//           <h2 className="text-2xl font-bold text-accent mb-6">
//             Upcoming Modules
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {upcomingModules.map((module, index) => (
//               <motion.div
//                 key={module.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden"
//               >
//                 <div className="h-32 relative">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={module.image}
//                     alt={module.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
//                     <div className="p-3">
//                       <h3 className="text-lg font-semibold text-white">{module.title}</h3>
//                       <p className="text-white/80">{module.institution}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <div className="space-y-2">
//                     <div className="flex items-center text-sm text-black">
//                       <FiCalendar className="mr-2 text-accent" />
//                       <span>Starts: {module.startDate}</span>
//                     </div>
//                     <div className="flex items-center text-sm text-black">
//                       <FiClock className="mr-2 text-accent" />
//                       <span>Duration: {module.duration}</span>
//                     </div>
//                     <div className="flex items-center text-sm text-black">
//                       <FiUsers className="mr-2 text-accent" />
//                       <span>{module.enrolledStudents} Students</span>
//                     </div>
//                   </div>
//                   <button className="mt-4 w-full flex items-center justify-center px-4 py-2 text-sm bg-secondary text-primary rounded-md hover:bg-secondary/90 transition-colors">
//                     <FiBarChart2 className="mr-2" />
//                     Prepare Module
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
        
//         {/* Delivery Methods */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="bg-white rounded-lg shadow-lg p-8 border border-gray-300"
//         >
//           <h2 className="text-2xl font-bold text-black mb-8 text-center">
//             Available Delivery Methods
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {deliveryMethods.map((method, index) => (
//               <motion.div
//                 key={method.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-gray-50 p-6 rounded-lg border border-gray-300"
//               >
//                 <div className="h-40 rounded-lg overflow-hidden mb-4">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={method.image}
//                     alt={method.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex justify-center mb-4">
//                   <method.icon className="h-12 w-12 text-accent" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-black mb-2 text-center">
//                   {method.title}
//                 </h3>
//                 <p className="text-black mb-4 text-center">{method.description}</p>
//                 <ul className="space-y-2">
//                   {method.features.map((feature) => (
//                     <li key={feature} className="flex items-center text-sm text-black">
//                       <FiCheckCircle className="h-4 w-4 text-accent mr-2" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
        
//         {/* Partner Institutions */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="bg-white rounded-lg shadow-lg border border-secondary/10 p-8 mt-12"
//         >
//           <h2 className="text-2xl font-bold text-accent mb-6">
//             Partner Institutions
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {institutions.map((institution, index) => (
//               <motion.div
//                 key={institution.name}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="p-6 bg-primary rounded-lg"
//               >
//                 <h3 className="text-xl font-semibold text-secondary mb-2">
//                   {institution.name}
//                 </h3>
//                 <p className="text-secondary/70 mb-4">{institution.location}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {institution.programs.map((program) => (
//                     <span
//                       key={program}
//                       className="px-3 py-1 bg-secondary/5 text-secondary rounded-full text-sm"
//                     >
//                       {program}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
        
//         {/* Contact Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-12 bg-secondary/10 rounded-lg p-8 border border-secondary/20 text-center"
//         >
//           <h2 className="text-2xl font-bold text-secondary mb-4">
//             Need Assistance with Module Delivery?
//           </h2>
//           <p className="text-accent mb-6 max-w-2xl mx-auto">
//             Our team is ready to help you with any questions or technical support you might need for successful module delivery.
//           </p>
//           <Link
//             href="/portal"
//             className="inline-flex items-center px-6 py-3 bg-secondary text-primary rounded-md hover:bg-secondary/90 transition-colors"
//           >
//             <FiMail className="mr-2" />
//             Contact Us
//           </Link>
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