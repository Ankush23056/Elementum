import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function Hero() {
  const avatars = [
    "https://ui-avatars.com/api/?name=Soumitra&background=ff7461&color=fff",
    "https://ui-avatars.com/api/?name=Rahul&background=10b981&color=fff",
    "https://ui-avatars.com/api/?name=Dolamani&background=6366f1&color=fff",
    "https://ui-avatars.com/api/?name=Ronak&background=f59e0b&color=fff"
  ];
  
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32">
      <Container className="relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative inline-block mb-6">
             <div className="absolute -left-6 -top-6 w-12 h-12 border-2 border-brand-red rounded-full opacity-60"></div>
             <p className="text-brand-purple font-medium tracking-wide uppercase text-sm">We are Elementum</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-8">
            The thinkers and doers reshaping the <span className="italic font-light text-brand-red">status quo</span> with
          </h1>
          
          <div className="flex justify-center -space-x-3 mb-10">
            {avatars.map((src, i) => (
              <img 
                key={i}
                src={src} 
                alt="Team member avatar" 
                className="w-12 h-12 rounded-full border-2 border-white shadow-md relative"
                style={{ zIndex: avatars.length - i }}
              />
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center shadow-md relative z-0">
               <span className="text-xs font-semibold text-gray-600">5k+</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
             <Button variant="primary">Get Started</Button>
             <Button variant="secondary">View Portfolio</Button>
          </div>
        </motion.div>
      </Container>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-10 md:left-32 w-16 h-16 border-4 border-brand-purple rounded-lg rotate-12 opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 md:right-32 w-20 h-20 bg-brand-green rounded-full opacity-50 blur-xl"></div>
    </section>
  );
}
