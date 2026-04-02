import { motion } from 'framer-motion';
import { FOOTER_LINKS } from '../data';
import { fadeInUp } from '../utils/motion';

export default function Footer() {
  const footerLinkVariants = {
    hover: { 
      x: 5, 
      color: "#111827",
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="bg-[#e4f4ea] pt-10 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="w-full border-t border-[#c0d4ca] mb-16 lg:mb-24"></div>

        <motion.div
          {...fadeInUp()}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-24 lg:mb-32">
          
          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Company</h3>
            <ul className="space-y-6">
              {FOOTER_LINKS.company.map((link, i) => (
                <li key={i}>
                  <motion.a whileHover="hover" variants={footerLinkVariants} href={link.href} className="text-[#4b5563] transition-colors text-sm inline-block">{link.label}</motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Terms & Policies</h3>
            <ul className="space-y-6">
              {FOOTER_LINKS.terms.map((link, i) => (
                <li key={i}>
                  <motion.a whileHover="hover" variants={footerLinkVariants} href={link.href} className="text-[#4b5563] transition-colors text-sm inline-block">{link.label}</motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Follow Us</h3>
            <ul className="space-y-6">
              {FOOTER_LINKS.social.map((link, i) => (
                <li key={i}>
                  <motion.a whileHover="hover" variants={footerLinkVariants} href={link.href} className="text-[#4b5563] transition-colors text-sm inline-block">{link.label}</motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Local Office</h3>
            <div className="space-y-6 text-[#4b5563] text-sm leading-relaxed">
              <p>1498w Fulton St, STE<br/>2D Chicago, IL 63867.</p>
              <p>(123) 456-789-000</p>
              <p><motion.a whileHover={{ color: "#111827" }} href="mailto:info@elementum.com" className="transition-colors">info@elementum.com</motion.a></p>
            </div>
          </div>

        </motion.div>

        <div className="text-center">
          <p className="text-[#4b5563] text-xs font-light">
            ©{new Date().getFullYear()} Elementum. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
