import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-white pt-24 md:pt-32 pb-10 overflow-hidden flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col items-center"
      >
        {/* Abstract Doodle Left */}
        <div className="hidden lg:block absolute left-0 top-[40%] -translate-y-1/2 z-0">
          <svg width="120" height="300" viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-20 40 Q 60 70, 30 130 T -20 220" stroke="#FF5252" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M-20 80 Q 90 110, 40 180 T -20 280" stroke="#111827" strokeWidth="6" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Abstract Shape Right */}
        <div className="hidden lg:block absolute right-[-2%] top-[35%] z-0">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60 A 60 60 0 0 1 120 60 L 120 120 L 0 120 Z" fill="#8b5cf6" transform="rotate(25 60 60)" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center mt-4">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-sans font-medium text-[#111827] leading-[1.05] tracking-tight mb-8">
            The{' '}
            <span className="relative inline-block">
              thinkers and
              <svg className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-4 left-0 w-[105%] h-[12px] sm:h-[18px] lg:h-[24px] text-[#fbbf24]" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                <path d="M5 10 Q 100 8 195 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M70 18 Q 130 16 160 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
              </svg>
            </span>
            <br />
            doers were{' '}
            <span className="relative inline-block z-10 px-4 md:px-8 py-1">
              <span className="relative z-10 text-[#111827]">changing</span>
              <span className="absolute inset-y-0 left-0 right-0 top-1 bottom-1 bg-[#ffcce0] rounded-full -z-10"></span>
            </span>
            <br />
            the{' '}
            <span className="relative inline-block z-10 px-4 md:px-6 py-1">
              <span className="relative z-10 text-[#111827]">status</span>
              <span className="absolute inset-y-0 left-0 right-0 top-2 bottom-0 bg-[#dcfce7] rounded-full -z-10"></span>
            </span>{' '}
            Quo with
          </motion.h1>

          {/* Sub-paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#4b5563] text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-14 mb-8 leading-relaxed font-light">
            We are a team of strategists, designers communicators, researchers. Togeather,<br className="hidden md:block" />
            we belive that progress only hghappens when you refuse to play things safe.
          </motion.p>
        </div>

        {/* Scattered Avatars Section */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[200px] sm:h-[450px] lg:h-[400px] mt-8 sm:mt-16 z-10 overflow-hidden md:overflow-visible">
          {/* 1. Hat guy - Left lowest */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="absolute left-[2%] md:left-[5%] bottom-[5%] w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl z-20">
            <img src="https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?w=400&h=400&fit=crop" className="w-full h-full object-cover" alt="Team member 1" />
          </motion.div>
          {/* 2. Glasses guy (blue striped) - Left middle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="absolute left-[15%] md:left-[20%] bottom-[15%] lg:bottom-[20%] w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-lg z-10">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop" className="w-full h-full object-cover" alt="Team member 2" />
          </motion.div>

          {/* 3. Dreads guy (red jacket) - Center-left high */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="absolute left-[30%] top-[0%] lg:top-[10%] w-28 h-28 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl z-20">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop" className="w-full h-full object-cover" alt="Team member 3" />
          </motion.div>

          {/* 4. Hoodie guy - Center low */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="absolute left-[40%] lg:left-[45%] bottom-[0%] w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl z-20">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop" className="w-full h-full object-cover" alt="Team member 4" />
          </motion.div>

          {/* 5. Glasses guy (blue shirt) - Center-right high */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="absolute right-[30%] lg:right-[35%] top-[10%] lg:top-[15%] w-20 h-20 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-md z-10">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" className="w-full h-full object-cover" alt="Team member 5" />
          </motion.div>

          {/* 6. Asian guy - Center-right middle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="absolute right-[20%] lg:right-[25%] bottom-[15%] w-24 h-24 sm:w-40 sm:h-40 lg:w-[13rem] lg:h-[13rem] rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl z-20">
            <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&h=500&fit=crop" className="w-full h-full object-cover" alt="Team member 6" />
          </motion.div>

          {/* 7. Smiling guy - Far right top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="absolute right-[5%] lg:right-[10%] top-[-10%] lg:top-[5%] w-28 h-28 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl z-20">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop" className="w-full h-full object-cover" alt="Team member 7" />
          </motion.div>

          {/* 8. Blue cap guy - Far right low */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="absolute right-[-5%] lg:right-[2%] bottom-[0%] lg:bottom-[5%] w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl z-20">
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop" className="w-full h-full object-cover" alt="Team member 8" />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
