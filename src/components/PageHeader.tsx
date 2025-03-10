'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-primary border-b border-secondary/10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-secondary sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-xl text-secondary/70 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
} 