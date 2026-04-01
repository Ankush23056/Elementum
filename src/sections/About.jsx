import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container className="space-y-32">
        
        {/* Block 1: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6"
          >
            <SectionTitle align="left" className="!mb-6">
              Tomorrow should be better than today
            </SectionTitle>
            <p className="text-gray-500 text-lg leading-relaxed">
              We focus on building sustainable, impactful solutions that empower your business to navigate the future. Our holistic design approach brings clarity to complex digital landscapes.
            </p>
            <Button variant="text">
              Learn more about us
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-brand-green rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaborating" 
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[400px]"
            />
          </motion.div>
        </div>

        {/* Block 2: Text Right, Image Left */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6"
          >
            <SectionTitle align="left" className="!mb-6">
              See how we can help you progress
            </SectionTitle>
            <p className="text-gray-500 text-lg leading-relaxed">
              By combining creative strategy with technological innovation, we deliver solutions that are not only beautiful but also inherently scalable and effective.
            </p>
            <Button variant="textRed">
              Explore our services
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-red-100 rounded-full blur-3xl opacity-40 transform -translate-x-10 -translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Strategy session" 
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[400px]"
            />
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
