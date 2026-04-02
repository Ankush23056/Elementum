import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { floatingTransition, customEase } from '../utils/motion';
import { SITE_CONTENT } from '../data';

export default function Hero() {
  const { title, description } = SITE_CONTENT.hero;

  const avatars = [
    { id: 1, img: "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?w=400&h=400&fit=crop", pos: "left-[5%] bottom-[15%] w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44", delay: 0.3 },
    { id: 2, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop", pos: "left-[12%] bottom-[0%] w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40", delay: 0.4 },
    { id: 3, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop", pos: "left-[28%] bottom-[25%] lg:bottom-[30%] w-28 h-28 sm:w-44 sm:h-44 lg:w-52 lg:h-52", delay: 0.5 },
    { id: 4, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop", pos: "left-[35%] bottom-[5%] w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48", delay: 0.6 },
    { id: 5, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop", pos: "right-[30%] bottom-[20%] lg:bottom-[25%] w-20 h-20 sm:w-36 sm:h-36 lg:w-44 lg:h-44", delay: 0.5 },
    { id: 6, img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&h=500&fit=crop", pos: "right-[20%] bottom-[0%] w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48", delay: 0.6 },
    { id: 7, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop", pos: "right-[5%] bottom-[15%] w-28 h-28 sm:w-44 sm:h-44 lg:w-52 lg:h-52", delay: 0.4 }
  ];

  return (
    <section className="relative bg-white pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden flex flex-col items-center">

      {/* Background Decorative Shapes from Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Left Wavy Lines */}
        <motion.svg
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 1, ease: customEase }}
          className="absolute left-[0%] top-[45%] w-[120px] h-[300px] text-gray-900 overflow-visible"
          viewBox="0 0 100 300">
          <path d="M 0,0 C 40,50 40,100 0,150 C 40,200 40,250 0,300" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M -15,10 C 25,60 25,110 -15,160 C 25,210 25,260 -15,310" stroke="#FF5252" strokeWidth="3" fill="none" opacity="0.6" />
        </motion.svg>

        {/* Right Purple Wedge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 15 }}
          transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
          className="absolute right-[5%] lg:right-[10%] top-[30%] lg:top-[35%] w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[#8b5cf6] rounded-tr-[8rem]"
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: customEase }}
        className="w-full flex flex-col items-center"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center mt-4">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-sans font-medium text-[#111827] leading-[1.05] tracking-tight mb-8">
            The{' '}
            <span className="relative inline-block">
              thinkers
              <svg className="absolute -bottom-2 lg:-bottom-3 left-0 w-full h-[12px] lg:h-[18px] text-[#fbbf24] overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 0,10 Q 50,15 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M 10,18 Q 50,22 90,16" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
              </svg>
            </span>{' '}
            and<br />
            doers were{' '}
            <span className="relative inline-block px-4 sm:px-10">
              <span className="relative z-10">changing</span>
              <span className="absolute inset-y-0 left-0 right-0 top-1 bottom-1 bg-[#fbccd6] rounded-full -z-10"></span>
            </span><br />
            the{' '}
            <span className="relative inline-block px-4 sm:px-10">
              <span className="relative z-10">status</span>
              <span className="absolute inset-y-0 left-0 right-0 top-1 bottom-1 bg-[#e4f4ea] rounded-full -z-10"></span>
            </span>{' '}
            Quo with
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="text-[#4b5563] text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-14 mb-10 leading-relaxed font-light">
            {description}
          </motion.p>
        </div>

        {/* Avatars Cluster matching image distribution */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] sm:h-[500px] lg:h-[450px] mt-12 sm:mt-24 z-10 overflow-visible">
          {avatars.map(avatar => (
            <motion.div
              key={avatar.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: avatar.delay },
                scale: { duration: 0.8, delay: avatar.delay },
                y: floatingTransition(avatar.delay)
              }}
              className={`absolute ${avatar.pos} rounded-full overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl z-20`}
            >
              <img src={avatar.img} className="w-full h-full object-cover" alt={`Team member ${avatar.id}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
