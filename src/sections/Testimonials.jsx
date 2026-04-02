import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 overflow-hidden" id="testimonials">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20 mt-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-sans text-[#111827] leading-[1.05] tracking-tight">
            <span className="relative inline-block px-4 py-0 sm:py-1">
              <span className="relative z-10">What</span>
              <span className="absolute inset-y-0 left-0 right-0 top-1 bottom-1 bg-[#dcfce7] rounded-full -z-10"></span>
            </span>{' '}our customer
            <br />
            says{' '}
            <span className="relative inline-block mt-2">
              About Us
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-[105%] h-[12px] sm:h-[16px] text-[#fbbf24]" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M5 10 L 195 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M30 18 L 160 16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
              </svg>
            </span>
          </motion.h2>
        </div>

        {/* Distributed Collage Map */}
        <div className="relative w-full max-w-[1300px] mx-auto min-h-[500px] lg:min-h-[600px] flex items-center justify-center overvlow-hidden md:overflow-visible">

          {/* Center Review Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-30 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] bg-[#f2faf5] rounded-[2rem] p-6 sm:p-10 lg:p-14 text-center">
            {/* Top Quote Icon */}
            <svg className="w-12 h-12 lg:w-16 lg:h-16 text-[#cbd5e1] opacity-70 absolute top-4 left-4 lg:top-8 lg:left-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>

            <p className="text-[#334155] text-sm sm:text-[1.05rem] md:text-lg lg:text-[1.1rem] leading-relaxed lg:leading-[1.8] relative z-10 px-4 sm:px-8 py-4 font-light mix-blend-multiply">
              Elementum delivered the site with inthe timeline<br className="hidden lg:block" />
              as they requested. Inthe end, the client found a 50%<br className="hidden lg:block" />
              increase in traffic with in days since its launch. They<br className="hidden lg:block" />
              also had an impressive ability to use technologies that<br className="hidden lg:block" />
              the company hasn`t used, which have also proved to<br className="hidden lg:block" />
              be easy to use and reliable
            </p>

            {/* Bottom Quote Icon */}
            <svg className="w-12 h-12 lg:w-16 lg:h-16 text-[#cbd5e1] opacity-70 absolute bottom-4 right-4 lg:bottom-8 lg:right-8 rotate-180" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </motion.div>


          {/* Scattered Avatar Satellites */}

          {/* --- LEFT GROUP --- */}
          {/* 1. Medium-small (White shirt) Top-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="absolute hidden lg:block top-[10%] left-[-10%] xl:left-[15%] w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-[6px] border-white z-20">
            <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=300&h=300&fit=crop" alt="Customer 1" className="w-full h-full object-cover" />
          </motion.div>

          {/* 2. Very small (Red shirt) Mid-left edge  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="absolute hidden md:block top-[40%] left-[5%] lg:left-[5%] xl:left-[8%] w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-sm border-[3px] border-white z-20">
            <img src="https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?w=150&h=150&fit=crop" alt="Customer 2" className="w-full h-full object-cover" />
          </motion.div>

          {/* 3. Large (Glasses maroon shirt) Mid-left close */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="absolute hidden sm:block top-[50%] lg:top-[55%] left-[5%] md:left-[15%] xl:left-[22%] -translate-y-1/2 w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-xl border-[6px] border-white z-20">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop" alt="Customer 3" className="w-full h-full object-cover" />
          </motion.div>

          {/* 4. Medium-small (Confetti) Bottom-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="absolute hidden lg:block bottom-[10%] lg:bottom-[15%] left-[2%] lg:left-[5%] xl:left-[12%] w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-xl border-[6px] border-white z-20">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" alt="Customer 4" className="w-full h-full object-cover" />
          </motion.div>


          {/* --- RIGHT GROUP --- */}
          {/* 5. Medium (Red shirt folded arms) Top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="absolute hidden lg:block top-[5%] lg:top-[12%] right-[5%] xl:right-[15%] w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-md border-[6px] border-white z-20">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" alt="Customer 5" className="w-full h-full object-cover" />
          </motion.div>

          {/* 6. Very small (Cap outdoors) Top-mid-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="absolute hidden md:block top-[25%] lg:top-[30%] right-[1%] lg:right-[10%] xl:right-[15%] w-14 h-14 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-md border-[4px] border-white z-20">
            <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=200&h=200&fit=crop" alt="Customer 6" className="w-full h-full object-cover" />
          </motion.div>

          {/* 7. Small (Asian guy looking down) Mid-right close */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="absolute hidden lg:block top-[45%] lg:top-[50%] right-[10%] xl:right-[20%] w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg border-[4px] border-white z-20">
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop" alt="Customer 7" className="w-full h-full object-cover" />
          </motion.div>

          {/* 8. Very Large (Smiling guy red shirt) Bottom-right extreeme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="absolute hidden sm:block bottom-[0%] lg:bottom-[2%] right-[0%] lg:right-[-5%] xl:right-[2%] w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-[6px] lg:border-[10px] border-white z-20">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" alt="Customer 8" className="w-full h-full object-cover" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
