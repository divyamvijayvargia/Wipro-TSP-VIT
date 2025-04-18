'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiExternalLink } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-primary/80 mb-4">
              We are dedicated to providing high-quality educational resources and opportunities
              for students and faculty members to enhance their skills and knowledge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/faculty-development/program" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Faculty Development
                </Link>
              </li>
              <li>
                <Link href="/courses-workshops/value-added" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Value-added Courses
                </Link>
              </li>
              <li>
                <Link href="/courses-workshops/industrial" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Industrial Workshops
                </Link>
              </li>
              <li>
                <Link href="/events/symposium" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Technical Symposium
                </Link>
              </li>
              <li>
                <Link href="/events/networking" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Networking Events
                </Link>
              </li>
              <li>
                <Link href="/portal" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Faculty Development */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Faculty Development</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faculty-development/program" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Development Program
                </Link>
              </li>
              <li>
                <Link href="/faculty-development/module-development" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Module Development
                </Link>
              </li>
              <li>
                <Link href="/faculty-development/module-delivery" className="text-primary/80 hover:text-primary flex items-center">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Module Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="h-5 w-5 mr-3 mt-1 text-primary/80" />
                <span className="text-primary/80">
                  Stephenson Building<br />
                  Teesside University<br />
                  Middlesbrough, TS1 3BX
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="h-5 w-5 mr-3 text-primary/80" />
                <span className="text-primary/80">‪+44-1642 342411‬</span>
              </li>
              <li className="flex items-start">
                <FiMail className="h-5 w-5 mr-3 mt-1 text-primary/80" />
                <div className="text-primary/80">
                  <div><a href="mailto:J.arackalnarayanan@tees.ac.uk">J.arackalnarayanan@tees.ac.uk</a></div>
                  <div><a href="mailto:P.ushasree@tees.ac.uk">P.ushasree@tees.ac.uk</a></div>
                  <div><a href="mailto:cprasad.mohanty@vit.ac.in">cprasad.mohanty@vit.ac.in</a></div>
                  <div><a href="mailto:akshatha.dayananda@wipro.com">akshatha.dayananda@wipro.com</a></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <p className="text-primary/80 text-left">
            Designed and Developed with ❤️ by <a href="https://www.linkedin.com/in/divyamvijayvargia/" target="_blank" rel="noopener noreferrer" className="underline"><b>Divyam Vijayvargia</b></a>
          </p>
          <p className="text-primary/80 text-center">
            &copy; {currentYear} Educational Portal. All rights reserved.
          </p>
          <p className="text-primary/80 text-right">
            <b>divyamvijayvargia25@gmail.com</b>
            {/* and <a href="https://portfolio-website-lac-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline"><b>portfolio</b></a> */}
          </p>
        </div>
      </div>
    </footer>
  );
} 