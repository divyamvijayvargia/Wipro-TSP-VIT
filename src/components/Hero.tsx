'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                className="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block">Empowering Education</span>
                <span className="block text-accent">Through Innovation</span>
              </motion.h1>

              <motion.p
                className="mt-3 text-base text-secondary/80 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                An Attempt Towards Sustainable Capacity Building - A joint venture by Teesside University, Vellore Institute of Technology (VIT), India, and Wipro 3D, India, and funded by the British Council Going Global Partnership Industry Academia Collaborative Grant.
              </motion.p>

              <motion.div
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="rounded-md shadow">
                  <Link
                    href="/faculty-development/program"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary/90 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Programs
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/portal"
                    className="w-full flex items-center justify-center px-8 py-3 border  text-base font-medium rounded-md text-secondary bg-primary border-secondary hover:bg-secondary/5 md:py-4 md:text-lg md:px-10"
                  >
                    Visit Portal
                  </Link>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      <motion.div
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-accent/30 to-secondary/20">
          <div className="h-full w-full flex flex-col items-center justify-center">
            {/* Top two images in a row */}
            <div className="flex justify-center space-x-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <img
                  src="/images/home/tu.jpg"
                  alt="Teesside University"
                  className="w-48 h-32 md:w-64 md:h-40 object-contain rounded-lg shadow-md"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <img
                  src="/images/home/vit.jpg"
                  alt="VIT"
                  className="w-48 h-32 md:w-64 md:h-40 object-contain rounded-lg shadow-md"
                />
              </motion.div>
            </div>

            {/* Education text */}
            <motion.div
              className="text-6xl md:text-8xl font-bold text-secondary/10 my-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              EDUCATION
            </motion.div>

            {/* Bottom image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-6"
            >
              <img
                src="/images/home/wipro.jpg"
                alt="Wipro"
                className="w-40 h-32 md:w-52 md:h-40 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 