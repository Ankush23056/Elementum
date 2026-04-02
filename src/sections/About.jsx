import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden" id="studio">

      {/* Soft Background Glow */}
      <div className="absolute top-[-5%] left-[20%] w-[500px] h-[500px] bg-[#fbccd6] rounded-full blur-[100px] opacity-20 pointer-events-none z-0"></div>

      {/* Winding Red Line (Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block overflow-hidden">
        <svg className="w-full h-full text-[#FF5252] opacity-70" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 1500,450 C 1300,450 1100,750 800,600 C 500,450 300,550 0,600" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 lg:mb-40 gap-12 lg:gap-20">

          {/* Text Left */}
          <div className="lg:w-1/2 max-w-xl pr-0 lg:pr-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-sans text-[#111827] leading-[1.1] mb-6 tracking-tight">
              <span className="relative inline-block">
                Tomorrow
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-[105%] h-[12px] sm:h-[16px] text-[#fbbf24]" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                  <path d="M5 10 L 195 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="M30 18 L 160 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                </svg>
              </span>{' '}
              should<br className="hidden sm:block" />
              be better than{' '}
              <span className="relative inline-block px-4 py-0 sm:py-1 mt-2">
                <span className="relative z-10">today</span>
                <span className="absolute inset-y-0 left-0 right-0 top-1 bottom-1 bg-[#dcfce7] rounded-full -z-10"></span>
              </span>
            </motion.h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-10 leading-relaxed font-light">
              We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.
            </p>
            <a href="#" className="inline-flex items-center text-[#111827] font-semibold text-sm hover:text-brand-red transition-colors group">
              Read more
              <span className="ml-4 w-16 h-[1px] bg-gray-400 group-hover:bg-brand-red transition-colors relative">
                <span className="absolute right-0 top-1/2 -translate-y-[45%] w-2 h-2 border-r border-t border-gray-400 group-hover:border-brand-red rotate-45 transform"></span>
              </span>
            </a>
          </div>

          {/* Image Right */}
          <div className="lg:w-1/2 relative flex justify-end mt-10 lg:mt-0">
            {/* Coral Square Top Right */}
            <div className="absolute top-[-5%] right-[0%] lg:right-[5%] w-24 h-24 sm:w-36 sm:h-36 bg-[#FF5252] rotate-[15deg] z-0"></div>

            {/* Circular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[8px] sm:border-[12px] bg-white border-white shadow-xl relative z-10 ml-auto">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop" alt="Business meeting" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>


        {/* Bottom Block */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Image Left */}
          <div className="lg:w-1/2 relative flex justify-start mt-10 lg:mt-0">
            {/* Coral Triangle Left */}
            <div className="absolute top-[35%] left-[-2%] lg:left-[5%] w-16 h-16 sm:w-20 sm:h-20 z-0">
              <svg viewBox="0 0 100 100" fill="#FF5252" className="w-full h-full transform -rotate-[20deg]">
                <polygon points="50,0 100,100 0,100" />
              </svg>
            </div>

            {/* Coral Triangle Bottom */}
            <div className="absolute bottom-[-0%] right-[5%] lg:right-[15%] w-24 h-24 sm:w-32 sm:h-32 z-20">
              <svg viewBox="0 0 100 100" fill="#FF5252" className="w-full h-full transform rotate-[0deg]">
                <polygon points="50,0 100,100 0,100" />
              </svg>
            </div>

            {/* Circular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden bg-white border-[8px] sm:border-[12px] border-white shadow-xl relative z-10 mr-auto">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop" alt="Team working" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Text Right */}
          <div className="lg:w-1/2 max-w-xl pl-0 lg:pl-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-sans text-[#111827] leading-[1.1] mb-6 mt-10 lg:mt-0 tracking-tight">
              <span className="relative inline-block px-4 py-0 sm:py-1">
                <span className="relative z-10">See</span>
                <span className="absolute inset-y-0 left-0 right-0 top-1 bottom-1 bg-[#dcfce7] rounded-full -z-10"></span>
              </span>{' '}
              how we can<br className="hidden sm:block" />
              help you{' '}
              <span className="relative inline-block mt-2">
                progress
                <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-[105%] h-[12px] sm:h-[16px] text-[#fbbf24]" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none">
                  <rect x="0" y="5" width="100" height="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
            </motion.h2>
            <p className="text-[#4b5563] text-sm md:text-base mb-10 leading-relaxed font-light">
              We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
            </p>
            <a href="#" className="inline-flex items-center text-[#111827] font-semibold text-sm hover:text-brand-red transition-colors group">
              Read more
              <span className="ml-4 w-16 h-[1px] bg-gray-400 group-hover:bg-brand-red transition-colors relative">
                <span className="absolute right-0 top-1/2 -translate-y-[45%] w-2 h-2 border-r border-t border-gray-400 group-hover:border-brand-red rotate-45 transform"></span>
              </span>
            </a>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
