import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarItem from './ui/NavbarItem';
import Container from './ui/Container';
import { customEase } from '../utils/motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", isActive: true },
    { to: "#studio", label: "Studio" },
    { to: "#services", label: "Services" },
    { to: "#contact", label: "Contact" },
    { to: "#faqs", label: "FAQs" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: customEase }}
      className="bg-white sticky top-0 z-50 shadow-sm"
    >
      <Container>
        <div className="flex justify-between h-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl md:text-3xl font-bold font-serif tracking-wide text-gray-900">
              Elementum<span className="text-[#8b5cf6] text-4xl leading-none">.</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link, i) => (
              <NavbarItem key={i} to={link.to} isActive={link.isActive}>{link.label}</NavbarItem>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-[#8b5cf6] focus:outline-none shrink-0 p-2"
              aria-label="Toggle Menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </Container>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: customEase }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col space-y-6 pb-10"
          >
            {navLinks.map((link, i) => (
              <NavbarItem key={i} to={link.to} isActive={link.isActive}>{link.label}</NavbarItem>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
