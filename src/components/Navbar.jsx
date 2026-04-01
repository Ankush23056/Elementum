// Matches structure and links
import { Link } from 'react-router-dom';
import NavbarItem from './ui/NavbarItem';
import Container from './ui/Container';

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50">
      <Container>
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold font-serif tracking-wide text-gray-900">
              Elementum<span className="text-brand-purple text-3xl leading-none">.</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavbarItem to="/" isActive={true}>Home</NavbarItem>
            <NavbarItem to="#studio">Studio</NavbarItem>
            <NavbarItem to="#services">Services</NavbarItem>
            <NavbarItem to="#contact">Contact</NavbarItem>
            <NavbarItem to="#faqs">FAQs</NavbarItem>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none shrink-0 border border-gray-200 p-2 rounded-lg">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
