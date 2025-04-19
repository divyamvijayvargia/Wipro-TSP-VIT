// 'use client';

// import { motion } from 'framer-motion';
// import PageHeader from '@/components/PageHeader';
// import { FiCode, FiDatabase, FiCloud, FiTrendingUp, FiCpu, FiShield, FiClock, FiUsers, FiStar, FiX, FiCheck } from 'react-icons/fi';
// import { useState } from 'react';
// import { sendConfirmationEmail, sendAdminNotificationEmail } from '@/utils/emailService';
// import { toast } from 'react-hot-toast';

// const courseCategories = ['All', 'Technology', 'Data Science', 'Business', 'Design'];
// const courseLevels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

// const courses = [
//   {
//     title: 'Full Stack Development',
//     category: 'Technology',
//     description: 'Master modern web development with MERN stack and cloud deployment.',
//     duration: '12 weeks',
//     level: 'Intermediate',
//     icon: FiCode,
//     rating: 4.8,
//     enrolled: 120,
//     price: '₹15,000',
//     skills: ['React', 'Node.js', 'MongoDB', 'Express'],
//     nextBatch: 'April 1, 2024',
//     instructor: 'Dr. Sarah Johnson',
//     image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Data Science & Analytics',
//     category: 'Data Science',
//     description: 'Learn data analysis, visualization, and machine learning techniques.',
//     duration: '10 weeks',
//     level: 'Advanced',
//     icon: FiDatabase,
//     rating: 4.9,
//     enrolled: 85,
//     price: '₹18,000',
//     skills: ['Python', 'Pandas', 'Scikit-learn', 'Tableau'],
//     nextBatch: 'March 25, 2024',
//     instructor: 'Prof. Michael Chen',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Cloud Architecture',
//     category: 'Technology',
//     description: 'Design and implement scalable cloud solutions.',
//     duration: '8 weeks',
//     level: 'Advanced',
//     icon: FiCloud,
//     rating: 4.7,
//     enrolled: 65,
//     price: '₹20,000',
//     skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
//     nextBatch: 'April 10, 2024',
//     instructor: 'Mr. David Wilson',
//     image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Digital Marketing',
//     category: 'Business',
//     description: 'Master digital marketing strategies and analytics.',
//     duration: '6 weeks',
//     level: 'Beginner',
//     icon: FiTrendingUp,
//     rating: 4.6,
//     enrolled: 150,
//     price: '₹12,000',
//     skills: ['SEO', 'Social Media', 'Analytics', 'Content Marketing'],
//     nextBatch: 'March 20, 2024',
//     instructor: 'Ms. Emily Brown',
//     image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'AI & Machine Learning',
//     category: 'Data Science',
//     description: 'Deep dive into AI concepts and applications.',
//     duration: '14 weeks',
//     level: 'Advanced',
//     icon: FiCpu,
//     rating: 4.9,
//     enrolled: 75,
//     price: '₹25,000',
//     skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
//     nextBatch: 'April 5, 2024',
//     instructor: 'Dr. Robert Lee',
//     image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80',
//   },
//   {
//     title: 'Cybersecurity Fundamentals',
//     category: 'Technology',
//     description: 'Learn network security and ethical hacking.',
//     duration: '10 weeks',
//     level: 'Intermediate',
//     icon: FiShield,
//     rating: 4.8,
//     enrolled: 90,
//     price: '₹20,000',
//     skills: ['Network Security', 'Cryptography', 'Penetration Testing', 'Security Tools'],
//     nextBatch: 'March 30, 2024',
//     instructor: 'Mr. James Anderson',
//     image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80',
//   },
// ];

// export default function ValueAddedCourse() {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedLevel, setSelectedLevel] = useState('All Levels');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [enrollingCourse, setEnrollingCourse] = useState<string | null>(null);
//   const [enrollmentSuccess, setEnrollmentSuccess] = useState<string | null>(null);
//   const [enrollmentFormData, setEnrollmentFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     education: '',
//   });

//   const handleEnrollmentInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setEnrollmentFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const filteredCourses = courses.filter(course => {
//     const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
//     const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
//     const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesLevel && matchesSearch;
//   });

//   const handleEnrollClick = (courseTitle: string) => {
//     setEnrollingCourse(courseTitle);
//     setEnrollmentSuccess(null);
//   };

//   const handleEnrollSubmit = async (e: React.FormEvent, courseTitle: string) => {
//     e.preventDefault();
    
//     try {
//       // Prepare data for email
//       const emailData = {
//         name: enrollmentFormData.fullName,
//         email: enrollmentFormData.email,
//         phone: enrollmentFormData.phone,
//         education: enrollmentFormData.education,
//         course: courseTitle,
//       };
      
//       // Send email to admin with silent=true
//       await sendAdminNotificationEmail(emailData, 'enrollment', true);
      
//       // Send confirmation email to user with silent=true
//       await sendConfirmationEmail(emailData, 'enrollment', true);
      
//       // Show a single success notification
//       toast.success('Enrollment successful! Confirmation email sent.');
      
//       // Update UI
//       setEnrollingCourse(null);
//       setEnrollmentSuccess(courseTitle);
      
//       // Reset form data
//       setEnrollmentFormData({
//         fullName: '',
//         email: '',
//         phone: '',
//         education: '',
//       });
      
//       // Reset success message after 5 seconds
//       setTimeout(() => {
//         setEnrollmentSuccess(null);
//       }, 5000);
//     } catch (error) {
//       console.error('Error submitting enrollment:', error);
//       toast.error('There was an error submitting your enrollment. Please try again.');
//     }
//   };

//   const closeEnrollmentForm = () => {
//     setEnrollingCourse(null);
//   };

//   return (
//     <div className="min-h-screen bg-primary">
//       <PageHeader
//         title="Value-added Courses"
//         description="Enhance your skills with industry-relevant courses taught by experts."
//       />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white p-6 rounded-lg shadow-lg mb-8 border border-gray-300"
//         >
//           <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
//             <div className="flex-1">
//               <input
//                 type="text"
//                 placeholder="Search for courses by name, skills, or description..."
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-black"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//             <div className="flex space-x-4">
//               <select
//                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-black"
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//               >
//                 {courseCategories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//               <select
//                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-black"
//                 value={selectedLevel}
//                 onChange={(e) => setSelectedLevel(e.target.value)}
//               >
//                 {courseLevels.map(level => (
//                   <option key={level} value={level}>{level}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </motion.div>

//         {/* Course Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredCourses.map((course, index) => (
//             <motion.div
//               key={course.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden"
//             >
//               <div className="h-48 relative">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-0 right-0 m-2">
//                   <span className="px-3 py-1 bg-secondary/10 text-black rounded-full text-sm font-medium">
//                     {course.level}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center mb-2">
//                   <course.icon className="h-6 w-6 text-accent mr-2" />
//                   <h3 className="text-xl font-semibold text-black">
//                     {course.title}
//                   </h3>
//                 </div>
//                 <p className="text-black mb-4">{course.description}</p>
                
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div className="flex items-center text-sm text-black">
//                     <FiClock className="mr-2 text-accent" />
//                     {course.duration}
//                   </div>
//                   <div className="flex items-center text-sm text-black">
//                     <FiUsers className="mr-2 text-accent" />
//                     {course.enrolled} Students
//                   </div>
//                   <div className="flex items-center text-sm text-black">
//                     <FiStar className="mr-2 text-yellow-400" />
//                     {course.rating}/5.0
//                   </div>
//                   <div className="text-sm font-medium text-accent">
//                     {course.price}
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <p className="text-sm font-medium text-black mb-2">Skills you&apos;ll learn:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {course.skills.map((skill) => (
//                       <span
//                         key={skill}
//                         className="px-2 py-1 bg-secondary/5 text-black rounded-full text-sm"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="space-y-2 mb-4">
//                   <p className="text-sm text-black">
//                     <strong>Next Batch:</strong> {course.nextBatch}
//                   </p>
//                   <p className="text-sm text-black">
//                     <strong>Instructor:</strong> {course.instructor}
//                   </p>
//                 </div>

//                 <button 
//                   onClick={() => handleEnrollClick(course.title)}
//                   className="w-full px-4 py-2 text-sm font-medium text-primary bg-secondary rounded-md hover:bg-secondary/90 transition-colors"
//                 >
//                   Enroll Now
//                 </button>
                
//                 {enrollmentSuccess === course.title && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ 
//                       duration: 0.4,
//                       ease: "easeInOut"
//                     }}
//                     className="mt-3 p-2 bg-green-100 text-green-800 rounded-md flex items-center"
//                   >
//                     <FiCheck className="h-5 w-5 mr-2" />
//                     <span>Successfully enrolled! Check your email for details.</span>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {filteredCourses.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12"
//           >
//             <p className="text-black">No courses match your filters. Try adjusting your search criteria.</p>
//           </motion.div>
//         )}
        
//         {/* Enrollment Modal */}
//         {enrollingCourse && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ 
//                 duration: 0.4,
//                 ease: "easeInOut"
//               }}
//               className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-semibold text-black">Enroll in {enrollingCourse}</h3>
//                 <button 
//                   onClick={closeEnrollmentForm}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <FiX className="h-6 w-6" />
//                 </button>
//               </div>
              
//               <form onSubmit={(e) => handleEnrollSubmit(e, enrollingCourse)} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={enrollmentFormData.fullName}
//                     onChange={handleEnrollmentInputChange}
//                     placeholder="Enter your full name"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-1">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={enrollmentFormData.email}
//                     onChange={handleEnrollmentInputChange}
//                     placeholder="Enter your email address"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-1">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={enrollmentFormData.phone}
//                     onChange={handleEnrollmentInputChange}
//                     placeholder="Enter your phone number"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-black mb-1">
//                     Educational Background
//                   </label>
//                   <textarea
//                     name="education"
//                     value={enrollmentFormData.education}
//                     onChange={handleEnrollmentInputChange}
//                     placeholder="Briefly describe your educational background"
//                     rows={3}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
//                   ></textarea>
//                 </div>
                
//                 <div className="flex justify-end space-x-3 pt-4">
//                   <button
//                     type="button"
//                     onClick={closeEnrollmentForm}
//                     className="px-4 py-2 text-sm font-medium text-black bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 text-sm font-medium text-primary bg-secondary rounded-md hover:bg-secondary/90 transition-colors"
//                   >
//                     Complete Enrollment
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
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