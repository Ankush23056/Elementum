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
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      <Container className="relative z-10">
        <SectionTitle align="center" className="mb-12 md:mb-20">
          What we can <br className="hidden sm:block" />offer you!
        </SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 md:py-10 border-b border-gray-200 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-16 w-full">
                <span className="text-gray-400 font-semibold text-sm w-10">0{feature.id}</span>
                <p className="text-gray-500 max-w-sm text-sm sm:text-base hidden md:block leading-relaxed">
                  {feature.desc}
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 group-hover:text-brand-purple transition-colors sm:ml-auto md:ml-0 md:flex-grow font-medium">
                  {feature.title}
                </h3>
              </div>
              <div className="mt-6 sm:mt-0 lg:ml-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple group-hover:text-white transition-all shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
      
      {/* Decorative dashed path */}
      <div className="hidden lg:block absolute top-[30%] right-[-10%] w-[500px] h-[500px] border-r-2 border-dashed border-brand-red rounded-full opacity-30"></div>
    </section>
  );
}
