// 'use client';

// import { motion } from 'framer-motion';
// import PageHeader from '@/components/PageHeader';
// import { FiLayers, FiEdit, FiCheckCircle, FiPackage, FiUpload, FiDownload, FiBook, FiX } from 'react-icons/fi';
// import Link from 'next/link';
// import { useState, useRef } from 'react';

// const steps = [
//   {
//     title: 'Planning & Research',
//     description: 'Research current trends and identify learning objectives for the module.',
//     icon: FiLayers,
//     status: 'current',
//   },
//   {
//     title: 'Content Development',
//     description: 'Create engaging content and learning materials aligned with objectives.',
//     icon: FiEdit,
//     status: 'upcoming',
//   },
//   {
//     title: 'Quality Assurance',
//     description: 'Review and refine content through peer review and expert feedback.',
//     icon: FiCheckCircle,
//     status: 'upcoming',
//   },
//   {
//     title: 'Module Packaging',
//     description: 'Package content with assessments and supporting materials.',
//     icon: FiPackage,
//     status: 'upcoming',
//   },
// ];

// const moduleTypes = [
//   'Theory Course',
//   'Laboratory',
//   'Project Work',
//   'Seminar',
//   'Workshop',
// ];

// const resources = [
//   {
//     title: 'Module Development Guide',
//     description: 'Comprehensive guide for creating effective educational modules',
//     image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80',
//     downloadLink: '/resources/module-development-guide.pdf',
//     fileSize: '2.4 MB',
//   },
//   {
//     title: 'Assessment Design Handbook',
//     description: 'Best practices for creating effective assessments and evaluation methods',
//     image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80',
//     downloadLink: '/resources/assessment-design-handbook.pdf',
//     fileSize: '1.8 MB',
//   },
//   {
//     title: 'Digital Content Creation',
//     description: 'Guide to creating engaging digital content for educational modules',
//     image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80',
//     downloadLink: '/resources/digital-content-creation.pdf',
//     fileSize: '3.2 MB',
//   },
// ];

// export default function ModuleDevelopment() {
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const newFiles = Array.from(e.target.files);
//       setUploadedFiles(prev => [...prev, ...newFiles]);
//     }
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       const newFiles = Array.from(e.dataTransfer.files);
//       setUploadedFiles(prev => [...prev, ...newFiles]);
//     }
//   };

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const removeFile = (index: number) => {
//     setUploadedFiles(prev => prev.filter((_, i) => i !== index));
//   };

//   const openFileDialog = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-primary">
//       <PageHeader
//         title="Module Development"
//         description="Create high-quality educational modules using our structured development process."
//       />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Development Process */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-accent text-center mb-12">
//             Development Process
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={step.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className={`bg-white p-6 rounded-lg shadow-lg border-2 ${
//                   step.status === 'current' ? 'border-accent' : 'border-gray-300'
//                 }`}
//               >
//                 <div className="flex items-center mb-4">
//                   <step.icon className={`h-8 w-8 ${
//                     step.status === 'current' ? 'text-accent' : 'text-gray-500'
//                   }`} />
//                   <h3 className="ml-3 text-xl font-semibold text-black">
//                     {step.title}
//                   </h3>
//                 </div>
//                 <p className="text-black">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
        
//         {/* Resources Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-accent text-center mb-12">
//             Development Resources
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {resources.map((resource, index) => (
//               <motion.div
//                 key={resource.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300"
//               >
//                 <div className="h-48 relative">
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={resource.image}
//                     alt={resource.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
//                     <div className="p-4">
//                       <FiBook className="h-8 w-8 text-white mb-2" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-black mb-2">
//                     {resource.title}
//                   </h3>
//                   <p className="text-black mb-4">{resource.description}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-500">{resource.fileSize}</span>
//                     <Link 
//                       href={resource.downloadLink}
//                       className="flex items-center text-accent hover:text-accent/80"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FiDownload className="h-5 w-5 mr-2" />
//                       Download PDF
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
        
//         {/* Module Creation Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="bg-white rounded-lg shadow-lg p-8 border border-gray-300"
//         >
//           <h2 className="text-2xl font-bold text-black mb-8">Create New Module</h2>
//           <form className="space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-black mb-2">
//                   Module Title
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter module title"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-black mb-2">
//                   Module Type
//                 </label>
//                 <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent">
//                   <option value="">Select module type</option>
//                   {moduleTypes.map(type => (
//                     <option key={type} value={type}>{type}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-black mb-2">
//                   Module Description
//                 </label>
//                 <textarea
//                   placeholder="Brief description of the module"
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                 ></textarea>
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-black mb-2">
//                   Learning Objectives
//                 </label>
//                 <textarea
//                   placeholder="List the main learning objectives (one per line)"
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
//                 ></textarea>
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-black mb-2">
//                   Upload Content Materials
//                 </label>
//                 <div 
//                   className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
//                   onClick={openFileDialog}
//                   onDrop={handleDrop}
//                   onDragOver={handleDragOver}
//                 >
//                   <FiUpload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
//                   <p className="text-black">
//                     Drag and drop your content files here, or click to browse
//                   </p>
//                   <p className="text-sm text-gray-500 mt-2">
//                     Supported formats: PDF, DOCX, PPTX, MP4 (max 100MB)
//                   </p>
//                   <input 
//                     type="file" 
//                     className="hidden" 
//                     multiple 
//                     ref={fileInputRef}
//                     onChange={handleFileChange}
//                     accept=".pdf,.docx,.pptx,.mp4"
//                   />
//                 </div>
                
//                 {uploadedFiles.length > 0 && (
//                   <div className="mt-4 space-y-2">
//                     <p className="text-sm font-medium text-black">Uploaded Files:</p>
//                     {uploadedFiles.map((file, index) => (
//                       <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
//                         <span className="text-sm text-black truncate max-w-xs">{file.name}</span>
//                         <button 
//                           type="button"
//                           onClick={() => removeFile(index)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           <FiX className="h-5 w-5" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-secondary text-primary rounded-md hover:bg-secondary/90 transition-colors"
//               >
//                 Create Module
//               </button>
//             </div>
//           </form>
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