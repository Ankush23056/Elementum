import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function Hero() {
  const avatars = [
    "https://ui-avatars.com/api/?name=Soumitra&background=ff5252&color=fff",
    "https://ui-avatars.com/api/?name=Rahul&background=10b981&color=fff",
    "https://ui-avatars.com/api/?name=Dolamani&background=8b5cf6&color=fff",
    "https://ui-avatars.com/api/?name=Ronak&background=f59e0b&color=fff"
  ];
  
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-32">
      <Container className="relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative inline-block mb-8">
             <div className="absolute -left-4 -top-4 w-10 h-10 border-2 border-brand-red rounded-full opacity-60"></div>
             <p className="text-brand-purple font-bold tracking-widest uppercase text-xs sm:text-sm">We are Elementum</p>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-gray-900 leading-[1.05] tracking-tight mb-10">
            The thinkers and doers reshaping the <span className="italic font-light text-brand-red">status quo</span> with
          </h1>
          
          <div className="flex justify-center -space-x-4 mb-12">
            {avatars.map((src, i) => (
              <img 
                key={i}
                src={src} 
                alt="Team member avatar" 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-white shadow-md relative object-cover"
                style={{ zIndex: avatars.length - i }}
              />
            ))}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-white bg-gray-100 flex items-center justify-center shadow-md relative z-0">
               <span className="text-xs sm:text-sm font-bold text-gray-700">5k+</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Button variant="primary" className="w-full sm:w-auto">Get Started</Button>
             <Button variant="secondary" className="w-full sm:w-auto">View Portfolio</Button>
          </div>
        </motion.div>
      </Container>

      {/* Decorative shapes */}
      <div className="hidden md:block absolute top-[20%] left-[10%] w-20 h-20 border-[5px] border-brand-purple rounded-2xl rotate-12 opacity-30"></div>
      <div className="hidden md:block absolute bottom-[20%] right-[10%] w-32 h-32 bg-brand-green rounded-full opacity-60 blur-3xl"></div>
    </section>
  );
}
