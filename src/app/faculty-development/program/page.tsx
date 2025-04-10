'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { FiBook, FiTarget, FiUsers, FiAward, FiChevronDown, FiChevronUp, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';

const programs = [
  {
    title: 'Advances in Sustainable EV Battery Materials and their Manufacturability',
    description: 'Explore sustainable EV battery materials, advanced manufacturability, and global academic-industry collaboration.',
    duration: '1 day',
    icon: FiBook,
    date: '9th June 2025',
    seats: 'Hybrid (In-person & Online)',
    location: 'Teesside University, TS1 3BX (OL1, Europa Building)',
    details: 'Teesside University is delighted to host this international Faculty Development Programme (FDP), scheduled for 9th June 2025. Organised in collaboration with Vellore Institute of Technology (VIT), India, and Wipro 3D, and funded by the British Council Going Global Partnership Grant, this hybrid event focuses on advancements in sustainable EV battery materials and manufacturability. The program includes expert lectures, case studies, interactive sessions, and global networking, forming part of a larger collaborative project: “A Deep Learning-Based Framework for the Selection of Electric Vehicle Battery Materials and their Manufacturability.”',
    outcomes: [
      'Foster international collaboration through co-developed hands-on modules for battery material selection',
      'Empower young entrepreneurs and innovators by supporting startups and building employability',
      'Strengthen academia-industry partnerships to drive innovation in EV battery technologies',
      'Promote inclusive growth through innovation challenges and community-focused initiatives aligned with SDGs'
    ]
  },
  // {
  //   title: 'Educational Technology',
  //   description: 'Learn to leverage digital tools, LMS platforms, and create engaging online content.',
  //   duration: '3 weeks',
  //   icon: FiTarget,
  //   date: 'April 2024',
  //   seats: 25,
  //   location: 'Online',
  //   details: 'This program focuses on integrating technology into teaching practices. Participants will learn to use various educational technologies, create digital content, manage online classrooms, and design blended learning experiences.',
  //   outcomes: [
  //     'Effectively use Learning Management Systems (LMS)',
  //     'Create engaging multimedia educational content',
  //     'Design and implement online assessments',
  //     'Facilitate effective virtual classroom sessions'
  //   ]
  // },
  // {
  //   title: 'Assessment & Evaluation',
  //   description: 'Design effective assessment strategies and rubrics for better learning outcomes.',
  //   duration: '2 weeks',
  //   icon: FiUsers,
  //   date: 'May 2024',
  //   seats: 35,
  //   location: 'Online',
  //   details: 'This specialized program focuses on developing comprehensive assessment strategies that accurately measure student learning. Participants will learn to design various assessment types, create effective rubrics, provide constructive feedback, and use assessment data to improve teaching.',
  //   outcomes: [
  //     'Design valid and reliable assessment instruments',
  //     'Create clear and effective grading rubrics',
  //     'Implement formative and summative assessment strategies',
  //     'Use assessment data to improve teaching methods'
  //   ]
  // },
  // {
  //   title: 'Research & Publication',
  //   description: 'Enhance research skills, paper writing, and get published in top journals.',
  //   duration: '6 weeks',
  //   icon: FiAward,
  //   date: 'June 2024',
  //   seats: 20,
  //   location: 'Online',
  //   details: 'This intensive program guides faculty through the entire research and publication process. From identifying research problems to publishing in reputed journals, participants will develop essential skills for academic writing, research methodology, data analysis, and navigating the publication process.',
  //   outcomes: [
  //     'Identify significant research problems in your field',
  //     'Design rigorous research methodologies',
  //     'Write clear and compelling academic papers',
  //     'Navigate the journal submission and review process'
  //   ]
  // },
];

export default function FacultyDevelopmentProgram() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleProgram = (title: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    if (expandedProgram === title) {
      setExpandedProgram(null);
    } else {
      setExpandedProgram(title);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-primary">
      <PageHeader
        title="Faculty Development Program"
        description="Enhance your teaching skills and professional development through our specialized programs."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-accent text-center mb-12">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-300"
              >
                <div className="flex items-center mb-4">
                  <program.icon className="h-8 w-8 text-accent" />
                  <h3 className="ml-3 text-xl font-semibold text-black">
                    {program.title}
                  </h3>
                </div>
                <p className="text-black mb-4">{program.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-accent">
                      Duration: {program.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent">
                      Date: {program.date}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent">
                      Available Seats: {program.seats}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent">
                      Location: {program.location}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={(e) => toggleProgram(program.title, e)}
                  className="flex items-center justify-between w-full px-4 py-2 mt-2 text-sm font-medium text-primary bg-secondary rounded-md hover:bg-secondary/90 transition-colors"
                >
                  <span>{expandedProgram === program.title ? 'Show Less' : 'Learn More'}</span>
                  {expandedProgram === program.title ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {expandedProgram === program.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeInOut" 
                    }}
                    className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                  >
                    <h4 className="font-medium text-black mb-2">Program Details:</h4>
                    <p className="text-black mb-4">{program.details}</p>
                    
                    <h4 className="font-medium text-black mb-2">Learning Outcomes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-black">
                      {program.outcomes.map((outcome, i) => (
                        <li key={i}>{outcome}</li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="mt-4 px-4 py-2 text-sm font-medium text-primary bg-accent rounded-md hover:bg-accent/90 transition-colors"
                    >
                      Apply Now
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 mb-16"
          id="application-form"
        >
          <h2 className="text-2xl font-bold text-black mb-6">
            Apply for a Program
          </h2>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 text-green-800 p-4 rounded-md mb-6 flex items-center"
            >
              <FiCheckCircle className="h-5 w-5 mr-2" />
              <span>Your application has been submitted successfully! We will contact you soon.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Institution
                </label>
                <input
                  type="text"
                  placeholder="Enter your institution"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Program of Interest
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-black"
                >
                  <option value="">Select a program</option>
                  {programs.map((program) => (
                    <option key={program.title} value={program.title}>{program.title}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Why are you interested in this program?
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter your message...."
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-black"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent/90 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}