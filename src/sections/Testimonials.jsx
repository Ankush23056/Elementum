import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

export default function Testimonials() {
  const avatars = [
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop", pos: "top-[5%] left-[5%] md:top-[15%] md:left-[20%]", size: "w-16 h-16 md:w-24 md:h-24" },
    { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop", pos: "top-[10%] right-[5%] md:top-[20%] md:right-[20%]", size: "w-14 h-14 md:w-20 md:h-20" },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop", pos: "bottom-[10%] left-[2%] md:bottom-[15%] md:left-[25%]", size: "w-12 h-12 md:w-20 md:h-20" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop", pos: "bottom-[5%] right-[5%] md:bottom-[10%] md:right-[25%]", size: "w-16 h-16 md:w-28 md:h-28" }
  ];

  return (
    <section className="py-16 md:py-32 bg-gray-50 relative overflow-hidden">
      <Container className="relative z-10 text-center flex flex-col justify-center min-h-[500px]">
        <SectionTitle className="mb-10 md:mb-16">
          What our customer <br className="hidden sm:block" />says About Us
        </SectionTitle>
        
        <Card className="max-w-4xl mx-auto relative z-20 rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-gray-100 shadow-2xl shadow-gray-200/50">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-brand-purple mb-8 opacity-20 mx-auto" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
          </svg>
          <p className="text-xl sm:text-3xl md:text-4xl text-gray-800 italic font-serif leading-[1.4] mb-10 md:mb-12">
            "Elementum understood our vision perfectly. They transformed our abstract ideas into a beautiful, functional platform. Their strategic approach and design expertise are unmatched."
          </p>
          <div className="flex flex-col items-center">
             <h4 className="font-bold font-serif text-xl text-gray-900 mb-1">Sarah Jenkins</h4>
             <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">CEO, InnovateTech</p>
          </div>
        </Card>
      </Container>

      {/* Floating Avatars */}
      {avatars.map((avatar, idx) => (
        <motion.div
           key={idx}
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, delay: idx * 0.15 + 0.2, type: "spring" }}
           className={`absolute ${avatar.pos} ${avatar.size} rounded-full border-[4px] md:border-[6px] border-white shadow-xl overflow-hidden shrink-0 z-10 hidden sm:block`}
        >
          <img src={avatar.src} alt="Customer avatar" className="w-full h-full object-cover" />
        </motion.div>
      ))}
      
      {/* Small decorative bubbles */}
      <div className="absolute top-[15%] right-[40%] w-5 h-5 bg-brand-red rounded-full opacity-60 blur-[1px]"></div>
      <div className="absolute bottom-[20%] left-[30%] w-4 h-4 bg-brand-green rounded-full shadow-sm"></div>
    </section>
  );
}
