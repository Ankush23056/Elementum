import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, customEase } from '../utils/motion';
import { SITE_CONTENT } from '../data';

export default function Features() {
  const { features } = SITE_CONTENT;

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-t border-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Top Right Red Wavy Line Decoration */}
        <div className="absolute top-0 right-[-10%] w-[500px] h-[350px] pointer-events-none hidden lg:block transform -translate-y-[20%] z-0">
          <svg viewBox="0 0 600 400" fill="none" className="w-full h-full" stroke="#ff7676" strokeWidth="4" strokeLinecap="round">
            <defs>
              <filter id="wave-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.2" floodColor="#ff7676" />
              </filter>
            </defs>
            <path 
              d="M 120,350 C 140,360 170,370 190,280 C 220,150 300,50 400,60 C 500,70 550,150 650,40" 
              filter="url(#wave-shadow)"
            />
          </svg>
        </div>

        {/* Section Header */}
        <div className="mb-24 lg:mb-32">
          <motion.h2
            {...fadeInUp()}
            className="text-6xl sm:text-7xl lg:text-[7.5rem] font-sans font-medium text-[#111827] leading-[1.05] tracking-tight">
            What we{' '}
            <span className="relative inline-block px-4 sm:px-6">
              <span className="relative z-10">can</span>
              <span className="absolute inset-y-0 left-0 right-0 top-1 bottom-1 bg-[#dcfce7] rounded-full -z-10"></span>
            </span>{' '}
            <br />
            <span className="relative inline-block">
              offer
              <svg className="absolute -bottom-2 lg:-bottom-3 left-0 w-[105%] h-[12px] lg:h-[18px] text-[#fbbf24] overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 0,10 Q 50,15 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M 10,18 Q 50,22 90,16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
              </svg>
            </span>{' '}
            you!
          </motion.h2>
        </div>

        {/* Features List Table */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-gray-200">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: customEase } }
              }}
              whileHover={{ x: 10 }}
              className="group border-b border-gray-200 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 cursor-pointer transition-colors hover:bg-gray-50/50 -mx-4 px-4 sm:mx-0 sm:px-0">

              {/* Left Column: Descriptions */}
              <div className="w-full md:w-[25%] lg:w-[28%] flex-shrink-0">
                <div className={`${feature.isBox ? 'border-[2px] border-[#10b981] p-2 inline-block' : 'px-1'} max-w-[200px]`}>
                  <p className="text-[#4b5563] text-sm leading-relaxed font-normal">
                    {feature.subContent}
                  </p>
                </div>
              </div>

              {/* Center Column: Titles */}
              <div className="flex-grow w-full relative flex items-center">
                <h3 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-sans font-light text-[#111827] leading-tight tracking-tight relative z-10 w-full">
                  {feature.title}
                </h3>

                {/* Floating Graphic for 3rd row */}
                {feature.hasGraphic && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
                    className="absolute right-[15%] sm:right-[22%] lg:right-[25%] top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 z-0 pointer-events-none">
                    <div className="w-full h-full rounded-full shadow-lg overflow-hidden border-[4px] border-white bg-white">
                      <img src="/feature-graphic.png" loading="lazy" className="w-full h-full object-cover scale-110" alt="Collage graphic" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right Column: Arrow */}
              <div className="w-16 h-12 flex items-center justify-end flex-shrink-0">
                <svg className="w-12 h-6 text-gray-800 transition-transform group-hover:translate-x-2" viewBox="0 0 60 20" fill="none">
                  <path d="M 0,10 L 58,10 M 52,4 L 58,10 L 52,16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
