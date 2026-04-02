import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarItem from './ui/NavbarItem';
import Container from './ui/Container';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white sticky top-0 z-50 shadow-sm"
    >
      <Container>
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl md:text-3xl font-bold font-serif tracking-wide text-gray-900">
              Elementum<span className="text-brand-purple text-4xl leading-none">.</span>
            </Link>
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            <NavbarItem to="/" isActive={true}>Home</NavbarItem>
            <NavbarItem to="#studio">Studio</NavbarItem>
            <NavbarItem to="#services">Services</NavbarItem>
            <NavbarItem to="#contact">Contact</NavbarItem>
            <NavbarItem to="#faqs">FAQs</NavbarItem>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-brand-purple focus:outline-none shrink-0 p-2"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col space-y-6 pb-10"
          >
            <NavbarItem to="/" isActive={true}>Home</NavbarItem>
            <NavbarItem to="#studio">Studio</NavbarItem>
            <NavbarItem to="#services">Services</NavbarItem>
            <NavbarItem to="#contact">Contact</NavbarItem>
            <NavbarItem to="#faqs">FAQs</NavbarItem>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
