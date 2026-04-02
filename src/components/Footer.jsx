import { motion } from 'framer-motion';

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
        
        {/* Divider Line */}
        <div className="w-full border-t border-[#c0d4ca] mb-16 lg:mb-24"></div>

        {/* Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-24 lg:mb-32">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Company</h3>
            <ul className="space-y-6">
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="/" className="text-[#4b5563] transition-colors text-sm inline-block">Home</motion.a></li>
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#studio" className="text-[#4b5563] transition-colors text-sm inline-block">Studio</motion.a></li>
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#services" className="text-[#4b5563] transition-colors text-sm inline-block">Service</motion.a></li>
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#" className="text-[#4b5563] transition-colors text-sm inline-block">Blog</motion.a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Terms & Policies</h3>
            <ul className="space-y-6">
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#" className="text-[#4b5563] transition-colors text-sm inline-block">Privacy Policy</motion.a></li>
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#" className="text-[#4b5563] transition-colors text-sm inline-block">Terms & Conditions</motion.a></li>
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#" className="text-[#4b5563] transition-colors text-sm inline-block">Explore</motion.a></li>
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#" className="text-[#4b5563] transition-colors text-sm inline-block">Accesibility</motion.a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Follow Us</h3>
            <ul className="space-y-6">
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#" className="text-[#4b5563] transition-colors text-sm inline-block">Instagram</motion.a></li>
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#" className="text-[#4b5563] transition-colors text-sm inline-block">LinkedIn</motion.a></li>
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#" className="text-[#4b5563] transition-colors text-sm inline-block">Youtube</motion.a></li>
              <li><motion.a whileHover="hover" variants={footerLinkVariants} href="#" className="text-[#4b5563] transition-colors text-sm inline-block">Twitter</motion.a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Local Office</h3>
            <div className="space-y-6 text-[#4b5563] text-sm leading-relaxed">
              <p>1498w Fluton ste, STE<br/>2D Chicgo, IL 63867.</p>
              <p>(123) 456789000</p>
              <p><motion.a whileHover={{ color: "#111827" }} href="mailto:info@elementum.com" className="transition-colors">info@elementum.com</motion.a></p>
            </div>
          </div>

        </motion.div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#4b5563] text-xs font-light">
            ©2023 Elementum. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
