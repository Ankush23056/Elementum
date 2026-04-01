import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

export default function Testimonials() {
  const avatars = [
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop", pos: "top-10 left-10 md:top-20 md:left-1/4" },
    { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", pos: "top-1/4 right-10 md:right-1/4" },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", pos: "bottom-1/4 left-5 md:left-1/3" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", pos: "bottom-10 right-20 md:bottom-20 md:right-1/3" },
    { src: "https://ui-avatars.com/api/?name=MK&background=random", pos: "top-1/2 left-4 md:left-20" },
    { src: "https://ui-avatars.com/api/?name=AB&background=random", pos: "top-1/3 right-4 md:right-20" }
  ];

  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      <Container className="relative z-10 text-center min-h-[400px] flex flex-col justify-center">
        <SectionTitle>
          What our customer <br />says About Us
        </SectionTitle>
        
        <Card className="max-w-3xl mx-auto relative z-20">
          <svg className="w-10 h-10 text-brand-purple mb-6 opacity-40 mx-auto" fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
          </svg>
          <p className="text-xl md:text-2xl text-gray-700 italic font-serif leading-relaxed mb-8">
            "Elementum understood our vision perfectly. They transformed our abstract ideas into a beautiful, functional platform. Their strategic approach and design expertise are unmatched."
          </p>
          <div className="flex flex-col items-center">
             <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
             <p className="text-gray-500 text-sm">CEO, InnovateTech</p>
          </div>
        </Card>
      </Container>

      {/* Floating Avatars */}
      {avatars.map((avatar, idx) => (
        <motion.div
           key={idx}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: idx * 0.1 + 0.3 }}
           className={`absolute ${avatar.pos} w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg overflow-hidden shrink-0 z-0 hidden sm:block`}
        >
          <img src={avatar.src} alt="Customer avatar" className="w-full h-full object-cover" />
        </motion.div>
      ))}
      
      {/* Small decorative bubbles */}
      <div className="absolute top-20 right-1/2 w-4 h-4 bg-brand-red rounded-full opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-brand-green rounded-full"></div>
    </section>
  );
}
