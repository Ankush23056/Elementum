import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

export default function About() {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <Container className="space-y-20 md:space-y-40">
        
        {/* Block 1: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6 md:space-y-8"
          >
            <SectionTitle align="left" className="!mb-0">
              Tomorrow should be better than today
            </SectionTitle>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              We focus on building sustainable, impactful solutions that empower your business to navigate the future. Our holistic design approach brings clarity to complex digital landscapes.
            </p>
            <Button variant="text">
              Learn more about us
              <svg className="ml-2 w-6 h-6 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 relative mt-8 md:mt-0"
          >
            <div className="absolute inset-0 bg-brand-green rounded-full blur-[80px] opacity-40 transform translate-x-10 translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
              alt="Team collaborating" 
              className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover h-[350px] md:h-[500px]"
            />
          </motion.div>
        </div>

        {/* Block 2: Text Right, Image Left */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6 md:space-y-8"
          >
            <SectionTitle align="left" className="!mb-0">
              See how we can help you progress
            </SectionTitle>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              By combining creative strategy with technological innovation, we deliver solutions that are not only beautiful but also inherently scalable and effective.
            </p>
            <Button variant="textRed">
              Explore our services
              <svg className="ml-2 w-6 h-6 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 relative mt-8 md:mt-0"
          >
            <div className="absolute inset-0 bg-brand-red rounded-full blur-[80px] opacity-20 transform -translate-x-10 -translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" 
              alt="Strategy session" 
              className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover h-[350px] md:h-[500px]"
            />
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
