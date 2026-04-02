import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function Hero() {
  const floatingTransition = (delay = 0) => ({
    duration: 3 + Math.random() * 2,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
    delay: delay
  });

  const customEase = [0.215, 0.61, 0.355, 1];

  return (
    <section className="relative bg-white pt-24 md:pt-32 pb-10 overflow-hidden flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: customEase }}
        className="w-full flex flex-col items-center"
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center mt-4">
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
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
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="text-[#4b5563] text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-14 mb-10 leading-relaxed font-light">
            We are a team of strategists, designers communicators, researchers. Togeather,<br className="hidden md:block" />
            we belive that progress only happens when you refuse to play things safe.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: customEase }}
          >
            <Button variant="primary">Get Started</Button>
          </motion.div>
        </div>

        {/* Scattered Avatars Section */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[200px] sm:h-[450px] lg:h-[400px] mt-8 sm:mt-16 z-10 overflow-hidden md:overflow-visible">
          {/* Avatar Cards with standard subtle motion */}
          {[
            { id: 1, img: "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?w=400&h=400&fit=crop", pos: "left-[2%] md:left-[5%] bottom-[5%] w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48", delay: 0.3 },
            { id: 2, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop", pos: "left-[15%] md:left-[20%] bottom-[15%] lg:bottom-[20%] w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44", delay: 0.4 },
            { id: 3, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop", pos: "left-[30%] top-[0%] lg:top-[10%] w-28 h-28 sm:w-44 sm:h-44 lg:w-56 lg:h-56", delay: 0.5 },
            { id: 4, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop", pos: "left-[40%] lg:left-[45%] bottom-[0%] w-24 h-24 sm:w-40 sm:h-40 lg:w-48 lg:h-48", delay: 0.6 },
            { id: 5, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop", pos: "right-[30%] lg:right-[35%] top-[10%] lg:top-[15%] w-20 h-20 sm:w-36 sm:h-36 lg:w-44 lg:h-44", delay: 0.5 },
            { id: 6, img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&h=500&fit=crop", pos: "right-[20%] lg:right-[25%] bottom-[15%] w-24 h-24 sm:w-40 sm:h-40 lg:w-[13rem] lg:h-[13rem]", delay: 0.6 },
            { id: 7, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop", pos: "right-[5%] lg:right-[10%] top-[-10%] lg:top-[5%] w-28 h-28 sm:w-44 sm:h-44 lg:w-56 lg:h-56", delay: 0.4 },
            { id: 8, img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop", pos: "right-[-5%] lg:right-[2%] bottom-[0%] lg:bottom-[5%] w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44", delay: 0.5 }
          ].map(avatar => (
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
