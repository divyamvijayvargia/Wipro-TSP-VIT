import Hero from '@/components/Hero';
import { FiBook, FiUsers, FiCalendar, FiAward } from 'react-icons/fi';
import Link from 'next/link';

// VIT Faculty Team
const vitFacultyTeam = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Professor, Computer Science',
    image: 'https://i.pravatar.cc/150?img=4',
    description: 'Expert in educational technology with 15 years of experience.',
  },
  {
    name: 'Prof. Amit Verma',
    role: 'Associate Professor, Information Technology',
    image: 'https://i.pravatar.cc/150?img=5',
    description: 'Specializes in curriculum development and e-learning.',
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Professor, Electronics Engineering',
    image: 'https://i.pravatar.cc/150?img=11',
    description: 'Leading research in educational methodologies and IoT.',
  },
  {
    name: 'Dr. Meena Patel',
    role: 'Assistant Professor, Data Science',
    image: 'https://i.pravatar.cc/150?img=7',
    description: 'Expert in data analytics and machine learning education.',
  },
  {
    name: 'Prof. Sunil Mehta',
    role: 'Professor, Software Engineering',
    image: 'https://i.pravatar.cc/150?img=8',
    description: 'Specializes in software development methodologies and project management.',
  },
];

// Teesside University Team
const teessideTeam = [
  {
    name: 'Dr. James Wilson',
    role: 'Professor, Computer Science',
    image: 'https://i.pravatar.cc/150?img=9',
    description: 'Expert in international curriculum development and academic partnerships.',
  },
  {
    name: 'Dr. Sarah Thompson',
    role: 'Associate Professor, Digital Technologies',
    image: 'https://i.pravatar.cc/150?img=10',
    description: 'Specializes in digital transformation and educational innovation.',
  },
];

// Wipro Team
const wiproTeam = [
  {
    name: 'Mr. Vikram Singh',
    role: 'Technical Director',
    image: 'https://i.pravatar.cc/150?img=11',
    description: 'Leads technical implementation and industry integration.',
  },
  {
    name: 'Ms. Ananya Desai',
    role: 'Program Manager',
    image: 'https://i.pravatar.cc/150?img=12',
    description: 'Manages program implementation and industry-academia collaboration.',
  },
  {
    name: 'Mr. Rahul Gupta',
    role: 'Innovation Lead',
    image: 'https://i.pravatar.cc/150?img=13',
    description: 'Drives innovation in educational technology and digital learning solutions.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-secondary/70 sm:mt-4">
              Our educational portal provides various resources and opportunities for growth.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-primary">
                  <FiBook className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-medium text-secondary">Faculty Development</h3>
                  <p className="mt-2 text-base text-secondary/70">
                    Programs designed to enhance teaching skills and professional growth.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-primary">
                  <FiUsers className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-medium text-secondary">Value-added Courses</h3>
                  <p className="mt-2 text-base text-secondary/70">
                    Additional courses to supplement the curriculum and enhance skills.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-primary">
                  <FiCalendar className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-medium text-secondary">Workshops & Events</h3>
                  <p className="mt-2 text-base text-secondary/70">
                    Industrial workshops and networking events for practical exposure.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-primary">
                  <FiAward className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-medium text-secondary">Technical Symposium</h3>
                  <p className="mt-2 text-base text-secondary/70">
                    Platform for showcasing technical skills and innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-background sm:text-4xl">
              About the Project
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-background/70">
              Our project aims to bridge the gap between academia and industry by providing
              comprehensive educational resources and professional development opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative p-8 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/mission.avif" 
                  alt="Electronics background" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-black mb-4">Mission</h3>
                <p className="text-black/90 font-medium">
                  To empower educators and students with cutting-edge knowledge and skills
                  through innovative teaching methodologies and industry collaboration.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-black/90 font-medium">
                    <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                    Quality education through modern techniques
                  </li>
                  <li className="flex items-center text-black/90 font-medium">
                    <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                    Industry-academia partnership
                  </li>
                  <li className="flex items-center text-black/90 font-medium">
                    <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                    Continuous professional development
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative p-8 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/vision.webp" 
                  alt="Technology background" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-black mb-4">Vision</h3>
                <p className="text-black/90 font-medium">
                  To become a leading platform for educational excellence and professional
                  growth in the technical education sector.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-black/90 font-medium">
                    <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                    Global recognition in educational innovation
                  </li>
                  <li className="flex items-center text-black/90 font-medium">
                    <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                    Sustainable development through education
                  </li>
                  <li className="flex items-center text-black/90 font-medium">
                    <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                    Creating future-ready professionals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* VIT Faculty Team */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
              VIT Faculty Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-secondary/70">
              Experienced faculty members from VIT leading the educational initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vitFacultyTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-accent">{member.name}</h3>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-accent/70 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Teesside University Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-background sm:text-4xl">
              Teesside University Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-background/70">
              Academic partners from Teesside University contributing to the program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teessideTeam.map((member) => (
              <div
                key={member.name}
                className="bg-primary p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-secondary/70 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wipro Team */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
              Wipro Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-secondary/70">
              Industry experts from Wipro providing practical insights and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {wiproTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-accent">{member.name}</h3>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-accent/70 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            <span className="block">Ready to contribute?</span>
            <span className="block text-primary/80">Visit our portal to share your thoughts.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/portal"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-primary/90"
              >
                Visit Portal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
