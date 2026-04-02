import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data';
import { customEase, fadeInUp } from '../utils/motion';

export default function Testimonials() {
  const { quote, author, role } = SITE_CONTENT.testimonials;

  const avatars = [
    { id: 1, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop", pos: "top-[5%] left-[5%] sm:top-[10%] sm:left-[10%] w-20 h-20 sm:w-28 sm:h-28" },
    { id: 2, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop", pos: "top-[0%] right-[10%] sm:top-[5%] sm:right-[15%] w-16 h-16 sm:w-24 sm:h-24" },
    { id: 3, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop", pos: "top-[40%] left-[-5%] sm:left-[0%] w-14 h-14 sm:w-20 sm:h-20" },
    { id: 4, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop", pos: "top-[35%] right-[-2%] sm:right-[5%] w-18 h-18 sm:w-26 sm:h-26" },
    { id: 5, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop", pos: "bottom-[15%] left-[0%] sm:bottom-[20%] sm:left-[5%] w-16 h-16 sm:w-24 sm:h-24" },
    { id: 6, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop", pos: "bottom-[5%] right-[5%] sm:bottom-[10%] sm:right-[10%] w-20 h-20 sm:w-28 sm:h-28" },
    { id: 7, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop", pos: "top-[20%] left-[15%] sm:top-[25%] sm:left-[22%] w-12 h-12 sm:w-16 sm:h-16" },
    { id: 8, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop", pos: "bottom-[20%] right-[15%] sm:bottom-[25%] sm:right-[20%] w-12 h-12 sm:w-16 sm:h-16" }
  ];

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden" id="testimonials">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            {...fadeInUp()}
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
        <motion.div 
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative h-[650px] sm:h-[800px] w-full max-w-5xl mx-auto flex items-center justify-center">
          
          {avatars.map((avatar, index) => (
            <motion.div 
              key={avatar.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: customEase }}
              className={`absolute ${avatar.pos} rounded-full overflow-hidden border-4 border-white shadow-lg z-10`}
            >
              <img src={avatar.img} loading="lazy" alt={`User ${avatar.id}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}

          {/* Central Card */}
          <motion.div
            {...fadeInUp(0.6)}
            className="relative z-20 w-[90%] sm:w-[500px] lg:w-[600px]">
            <div className="bg-white rounded-3xl p-10 sm:p-14 md:p-20 shadow-2xl relative text-center">
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#FF5252] rounded-full"></div>
              <p className="text-[#111827] text-2xl sm:text-3xl lg:text-[2.3rem] font-sans leading-[1.2] mb-12 tracking-tight italic">
                {quote}
              </p>
              <div className="flex flex-col items-center">
                <span className="text-[#111827] font-bold text-lg mb-1 tracking-wide uppercase">{author}</span>
                <span className="text-[#9ca3af] text-sm uppercase tracking-[0.2em] font-medium">{role}</span>
              </div>
              <div className="absolute bottom-1 right-10 sm:right-16 text-[10rem] text-[#f3f4f6] font-serif leading-none select-none -z-10">”</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
