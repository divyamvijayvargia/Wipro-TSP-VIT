'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Transition } from '@headlessui/react';

// const navItems = [
//   {
//     name: 'Events at TU',
//     href: '/faculty-development',
//     dropdown: [
//       { name: 'Global faculty development programme at TU', href: '/faculty-development/program' },
//       { name: 'Module/ subject development on battery materials and manufacturing', href: '/faculty-development/module-development' },
//       { name: 'Module Delivery at TU and VIT', href: '/faculty-development/module-delivery' },
//     ],
//   },
//   {
//     name: 'Events at VIT',
//     href: '/courses-workshops',
//     dropdown: [
//       { name: 'Value added course at VIT', href: '/courses-workshops/value-added' },
//       { name: 'Industrial workshops at Wipro', href: '/courses-workshops/industrial' },
//     ],
//   },
//   {
//     name: 'Events at wipro',
//     href: '/events',
//     dropdown: [
//       { name: 'Symposium on battery materials and manufacturing at TU', href: '/events/symposium' },
//       { name: 'Global industry networking at VIT', href: '/events/networking' },
//     ],
//   },
//   {
//     name: 'Portal',
//     href: '/portal',
//     // dropdown: [
//     //   { name: 'Contribution Portal', href: '/portal' },
//     //   // { name: 'Email Configuration', href: '/admin/config' },
//     // ],
//   },
// ];

const navItems = [
  {
    name: 'Events at TU',
    href: '/faculty-development',
    dropdown: [
      { name: 'Global faculty development programme', href: '/faculty-development/program' },
      { name: 'Technical symposium', href: '/events/symposium' },
    ],
  },
  {
    name: 'Events at VIT',
    href: '/courses-workshops',
    dropdown: [
      { name: 'Value added course', href: '/courses-workshops/value-added' },
      { name: 'Global industry networking', href: '/events/networking' },
    ],
  },
  {
    name: 'Events at Wipro',
    href: '/courses-workshops/industrial',
    // dropdown: [
    //   { name: 'Industrial workshops', href: '/courses-workshops/industrial' },
    // ],
  },
  {
    name: 'Module development',
    href: '/faculty-development/module-development',
  },
  {
    name: 'Portal',
    href: '/portal',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className="bg-primary border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <motion.span 
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                TU-VIT-WIPRO
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.dropdown && setHoveredDropdown(item.name)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                {item.dropdown ? (
                  <button
                    className="px-3 py-2 text-sm font-medium hover:text-accent flex items-center"
                  >
                    {item.name}
                    <FiChevronDown className={`ml-1 transition-transform ${
                      hoveredDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium hover:text-accent flex items-center"
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.dropdown && (
                  <Transition
                    show={hoveredDropdown === item.name}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-primary border border-secondary/10 overflow-hidden">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm hover:bg-secondary/5"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Transition>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-accent focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary border-b border-secondary/10">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full text-left px-3 py-2 text-base font-medium hover:text-accent flex items-center justify-between"
                  >
                    {item.name}
                    <FiChevronDown className={`transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block w-full text-left px-3 py-2 text-base font-medium hover:text-accent"
                  >
                    {item.name}
                  </Link>
                )}
                
                {item.dropdown && (
                  <Transition
                    show={activeDropdown === item.name}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 max-h-0"
                    enterTo="transform opacity-100 max-h-96"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 max-h-96"
                    leaveTo="transform opacity-0 max-h-0"
                  >
                    <div className="pl-4 space-y-1 overflow-hidden">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-sm hover:bg-secondary/5"
                          onClick={() => {setActiveDropdown(null);
                          setIsOpen(false)
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </Transition>
                )}
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
} 