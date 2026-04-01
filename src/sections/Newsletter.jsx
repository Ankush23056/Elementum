import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

export default function Newsletter() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-white">
      <Container maxWidth="max-w-6xl" className="relative z-10">
        <div className="bg-[#eef8f0] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-16 md:p-24 text-center relative overflow-hidden shadow-sm border border-[#e2efe4]">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <SectionTitle className="!mb-6">
              Subscribe to <br className="hidden sm:block" />our newsletter
            </SectionTitle>
            <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-light">
              Get the latest updates, design news, and strategy tips straight to your inbox. Join 5k+ subscribers today.
            </p>
            
            <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow px-8 py-4 md:py-5 rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#8b5cf6] bg-white shadow-sm text-lg"
                required
              />
              <Button type="submit" variant="primary" className="!py-4 md:!py-5 !px-10 h-full w-full sm:w-auto mt-2 sm:mt-0">
                Subscribe Now
              </Button>
            </form>
          </motion.div>

          {/* Decorative shapes inside the newsletter card */}
          <div className="hidden sm:block absolute top-10 left-10 w-24 h-24 border-[6px] border-brand-purple rounded-full opacity-20"></div>
          <div className="hidden sm:block absolute bottom-[-20%] right-10 w-48 h-48 bg-white rounded-3xl rotate-12 opacity-60"></div>
        </div>
      </Container>
    </section>
  );
}
