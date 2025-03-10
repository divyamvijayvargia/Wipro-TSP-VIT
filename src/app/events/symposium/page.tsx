'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { FiAward, FiCalendar, FiMapPin, FiUsers, FiMic, FiMonitor, FiUpload, FiLink, FiCheckCircle, FiX } from 'react-icons/fi';
import { useState, useRef } from 'react';

const events = [
  {
    title: 'Paper Presentation',
    description: 'Present your research papers on emerging technologies.',
    icon: FiMic,
    prizes: ['₹15,000', '₹10,000', '₹5,000'],
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80',
    guidelines: [
      'Research paper should be in IEEE format',
      'Maximum 6 pages including references',
      'Original work not published elsewhere',
      'Team size: 1-2 members',
    ],
  },
  {
    title: 'Project Exhibition',
    description: 'Showcase your innovative projects and prototypes.',
    icon: FiMonitor,
    prizes: ['₹20,000', '₹15,000', '₹10,000'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    guidelines: [
      'Working prototype/model required',
      'Detailed project documentation',
      'Team size: 2-4 members',
      'Power supply will be provided',
    ],
  },
  {
    title: 'Hackathon',
    description: '24-hour coding challenge to solve real-world problems.',
    icon: FiUsers,
    prizes: ['₹25,000', '₹15,000', '₹10,000'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
    guidelines: [
      'Problem statements revealed at start',
      'All coding languages allowed',
      'Team size: 3-4 members',
      'Bring your own laptops',
    ],
  },
];

const schedule = [
  {
    time: '9:00 AM',
    event: 'Registration & Breakfast',
  },
  {
    time: '10:00 AM',
    event: 'Inauguration Ceremony',
  },
  {
    time: '11:00 AM',
    event: 'Keynote Speech',
  },
  {
    time: '12:00 PM',
    event: 'Paper Presentations Begin',
  },
  {
    time: '1:00 PM',
    event: 'Lunch Break',
  },
  {
    time: '2:00 PM',
    event: 'Project Exhibition',
  },
  {
    time: '4:00 PM',
    event: 'Hackathon Kickoff',
  },
  {
    time: '6:00 PM',
    event: 'Day 1 Closing Ceremony',
  },
];

export default function TechnicalSymposium() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setUploadedFiles([]);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-primary">
      <PageHeader
        title="Technical Symposium 2024"
        description="Join us for two days of innovation, learning, and competition at our annual technical symposium."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Event Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg border border-gray-300 p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <FiCalendar className="h-6 w-6 text-accent mr-3" />
              <div>
                <h3 className="text-sm font-medium text-black">Date</h3>
                <p className="text-lg text-black">May 15-16, 2024</p>
              </div>
            </div>
            <div className="flex items-center">
              <FiMapPin className="h-6 w-6 text-accent mr-3" />
              <div>
                <h3 className="text-sm font-medium text-black">Venue</h3>
                <p className="text-lg text-black">Main Auditorium</p>
              </div>
            </div>
            <div className="flex items-center">
              <FiUsers className="h-6 w-6 text-accent mr-3" />
              <div>
                <h3 className="text-sm font-medium text-black">Participants</h3>
                <p className="text-lg text-black">500+ Expected</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Events & Competitions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {event.title}
                    </h3>
                    <p className="text-white/80 text-sm">{event.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-black mb-2">Prize Pool:</h4>
                    <div className="space-y-1">
                      {event.prizes.map((prize, i) => (
                        <div key={i} className="flex items-center">
                          <FiAward className={`h-4 w-4 mr-2 ${
                            i === 0 ? 'text-yellow-400' :
                            i === 1 ? 'text-gray-400' :
                            'text-amber-600'
                          }`} />
                          <span className="text-black font-medium">
                            {i === 0 ? '1st Prize: ' : i === 1 ? '2nd Prize: ' : '3rd Prize: '}
                            {prize}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-black mb-2">Guidelines:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {event.guidelines.map((guideline, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-1.5 w-1.5 bg-accent rounded-full mt-1.5 mr-2" />
                          {guideline}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    // onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full px-4 py-2 text-sm font-medium text-primary bg-secondary rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg border border-gray-300 p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-black mb-8 text-center">
            Day 1 Schedule
          </h2>
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center"
              >
                <div className="w-24 font-medium text-accent">{item.time}</div>
                <div className="flex-1 ml-4 pb-6 border-b border-gray-200">
                  <p className="text-black">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Registration Form */}
        <motion.div
          id="registration-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-8 border border-gray-300"
        >
          <h2 className="text-2xl font-bold text-black mb-8 text-center">
            Event Registration
          </h2>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 text-green-800 p-6 rounded-md mb-6 flex items-center justify-center"
            >
              <div className="text-center">
                <FiCheckCircle className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Registration Successful!</h3>
                <p>Thank you for registering for the Technical Symposium 2024. We will contact you soon with further details.</p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
              {/* Team Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-black">Team Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Team Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter team name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Event Category
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                    >
                      <option value="">Select an event</option>
                      {events.map(event => (
                        <option key={event.title} value={event.title}>{event.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Team Leader */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-black">Team Leader</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter contact number"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Institution
                    </label>
                    <input
                      type="text"
                      placeholder="Enter institution name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Project/Paper Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-black">Submission Details</h3>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Project/Paper Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the title of your project or paper"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Abstract/Description
                  </label>
                  <textarea
                    placeholder="Brief description of your project or paper (max 500 words)"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Upload Files
                  </label>
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={openFileDialog}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <FiUpload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-black">
                      Drag and drop your files here, or click to browse
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Supported formats: PDF, PPT, ZIP (max 50MB)
                    </p>
                    <input 
                      type="file" 
                      className="hidden" 
                      multiple 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.ppt,.pptx,.zip"
                    />
                  </div>
                  
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium text-black">Uploaded Files:</p>
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                          <span className="text-sm text-black truncate max-w-xs">{file.name}</span>
                          <button 
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FiX className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Additional Links
                  </label>
                  <div className="flex items-center space-x-2">
                    <FiLink className="h-5 w-5 text-gray-500" />
                    <input
                      type="url"
                      placeholder="GitHub repository, demo video, or other relevant links"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent text-accent"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-secondary text-primary rounded-md hover:bg-secondary/90 transition-colors"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
} 