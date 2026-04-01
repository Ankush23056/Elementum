// Pale green background section
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

export default function Newsletter() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <Container maxWidth="max-w-5xl" className="relative z-10">
        <div className="bg-brand-green rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-sm">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <SectionTitle className="!mb-6">
              Subscribe to <br />our newsletter
            </SectionTitle>
            <p className="text-gray-600 mb-10 max-w-md mx-auto">
              Get the latest updates, design news, and strategy tips straight to your inbox.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow px-6 py-4 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-purple shadow-sm bg-white"
                required
              />
              <Button type="submit" variant="primary">
                Subscribe Now
              </Button>
            </form>
          </motion.div>

          {/* Decorative shapes inside the newsletter card */}
          <div className="absolute top-10 left-10 w-16 h-16 border-4 border-brand-purple rounded-full opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-xl rotate-12 opacity-40"></div>
        </div>
      </Container>
    </section>
  );
}
