import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="relative bg-[#e4f4ea] pt-32 pb-16 overflow-hidden">
      
      {/* Absolute Purple Shape */}
      <div className="absolute right-[-5%] lg:right-[5%] top-[10%] lg:top-[20%] w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 z-0 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M0 100 A 100 100 0 0 1 200 100 L 200 200 L 0 200 Z" fill="#8b5cf6" transform="rotate(-45 100 100)" />
        </svg>
      </div>

      {/* Hand-drawn Red Arrows */}
      <div className="absolute top-[-5%] lg:top-[-10%] left-1/2 -translate-x-1/2 lg:-translate-x-[20%] w-[250px] lg:w-[350px] h-[150px] lg:h-[200px] z-0 pointer-events-none">
        <svg viewBox="0 0 300 200" fill="none" className="w-full h-full text-[#FF5252] opacity-80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Arrow 1 */}
          <path d="M 220,10 C 180,60 100,70 60,120" />
          <path d="M 50,100 L 60,120 L 85,115" />
          {/* Arrow 2 */}
          <path d="M 270,0 C 240,40 180,80 140,130" />
          <path d="M 130,110 L 140,130 L 165,125" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-[7rem] font-sans font-medium text-[#111827] leading-[1.05] tracking-tight mb-8">
          Subscribe to<br />
          our newsletter
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[#4b5563] text-sm sm:text-lg mb-12 font-light tracking-wide">
          To make your stay special and even more memorable
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#111827] text-white rounded-full px-12 lg:px-14 py-4 lg:py-5 text-sm lg:text-base font-semibold hover:bg-gray-800 transition-colors shadow-2xl tracking-wide">
          Subscribe Now
        </motion.button>
      </div>
    </section>
  );
}
