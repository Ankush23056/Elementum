import { Link } from 'react-router-dom';
import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold font-serif tracking-wide text-gray-900 mb-6 block">
              Elementum<span className="text-brand-purple">.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              We design digital experiences that help businesses unlock their potential and reshape the status quo. Let's create something better.
            </p>
          </div>
          
          {/* Terms & Policies */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Terms & Policies</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Acceptable Use</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Instagram</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Behance</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">hello@elementum.digital</li>
              <li className="text-gray-500 text-sm">+1 (555) 000-1234</li>
              <li className="text-gray-500 text-sm mt-4">123 Creative Street,<br />Design City, 90210</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Elementum. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span className="text-gray-400 text-sm cursor-pointer hover:text-gray-600">EN</span>
            <span className="text-gray-400 text-sm cursor-pointer hover:text-gray-600">FR</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
