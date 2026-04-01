export default function Footer() {
  return (
    <footer className="bg-[#e4f4ea] pt-10 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Divider Line */}
        <div className="w-full border-t border-[#c0d4ca] mb-16 lg:mb-24"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-24 lg:mb-32">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Company</h3>
            <ul className="space-y-6">
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Studio</a></li>
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Service</a></li>
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Terms & Policies</h3>
            <ul className="space-y-6">
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Explore</a></li>
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Accesibility</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Follow Us</h3>
            <ul className="space-y-6">
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Youtube</a></li>
              <li><a href="#" className="text-[#4b5563] hover:text-[#111827] transition-colors text-sm">Twitter</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            {/* Mirrored exact typos and double header mapping from reference */}
            <h3 className="text-lg lg:text-xl font-sans text-[#111827] mb-8 font-medium">Terms & Policies</h3>
            <div className="space-y-6 text-[#4b5563] text-sm leading-relaxed">
              <p>1498w Fluton ste, STE<br/>2D Chicgo, IL 63867.</p>
              <p>(123) 456789000</p>
              <p><a href="mailto:info@elementum.com" className="hover:text-[#111827] transition-colors">info@elementum.com</a></p>
            </div>
          </div>

        </div>

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
