import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';

export default function Features() {
  const features = [
    { id: 1, title: "Collaborative & partnership", desc: "We focus on building strong relationships and understanding your needs to deliver the best results." },
    { id: 2, title: "We talk about our weight", desc: "Open communication ensures we're on the same page. We believe in transparent dialogue." },
    { id: 3, title: "Piloting digital confidence", desc: "Guiding your business with surety in an uncertain digital space through innovative tech." },
  ];

  return (
    <section className="py-24 bg-white relative">
      <Container>
        <SectionTitle align="center">
          What we can <br />offer you!
        </SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start md:items-center justify-between py-8 border-b border-gray-200 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full">
                <span className="text-gray-400 font-medium text-sm w-8">0{feature.id}</span>
                <p className="text-gray-500 max-w-sm text-sm hidden md:block">
                  {feature.desc}
                </p>
                <h3 className="text-xl md:text-2xl font-serif text-gray-900 group-hover:text-brand-purple transition-colors ml-auto md:ml-0 md:flex-grow font-medium">
                  {feature.title}
                </h3>
              </div>
              <div className="ml-8 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple group-hover:text-white transition-all shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
      
      {/* Decorative dashed path */}
      <div className="absolute top-1/4 right-0 w-64 h-64 border-r-2 border-dashed border-red-200 rounded-full opacity-50 -mr-32"></div>
    </section>
  );
}
