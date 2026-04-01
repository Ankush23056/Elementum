import { Link } from 'react-router-dom';
import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="text-3xl font-bold font-serif tracking-wide text-gray-900 mb-6 block">
              Elementum<span className="text-brand-purple">.</span>
            </Link>
            <p className="text-gray-500 text-base leading-relaxed font-light">
              We design digital experiences that help businesses unlock their potential and reshape the status quo. Let's create something better.
            </p>
          </div>
          
          {/* Terms & Policies */}
          <div>
            <h4 className="font-bold font-serif text-xl tracking-tight text-gray-900 mb-6">Terms & Policies</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors font-medium text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors font-medium text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors font-medium text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors font-medium text-sm">Acceptable Use</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-bold font-serif text-xl tracking-tight text-gray-900 mb-6">Follow Us</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors font-medium text-sm">Instagram</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors font-medium text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors font-medium text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-purple transition-colors font-medium text-sm">Behance</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold font-serif text-xl tracking-tight text-gray-900 mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 font-medium text-sm">hello@elementum.digital</li>
              <li className="text-gray-500 font-medium text-sm">+1 (555) 000-1234</li>
              <li className="text-gray-500 font-medium text-sm leading-relaxed mt-6">123 Creative Street,<br />Design City, 90210</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 text-sm font-medium">&copy; {new Date().getFullYear()} Elementum. All rights reserved.</p>
          <div className="mt-6 md:mt-0 space-x-8">
            <span className="text-gray-400 text-sm font-bold cursor-pointer hover:text-brand-purple">EN</span>
            <span className="text-gray-400 text-sm font-medium cursor-pointer hover:text-brand-purple">FR</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
