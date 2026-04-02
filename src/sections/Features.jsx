import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { staggerContainer, fadeInLeft, fadeInUp, customEase } from '../utils/motion';
import { SITE_CONTENT } from '../data';

export default function Features() {
  const { features } = SITE_CONTENT;

  return (
    <section className="bg-[#e4f4ea] py-24 md:py-32 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 lg:mb-24 gap-8">
          <motion.h2 
            {...fadeInLeft()}
            className="text-4xl sm:text-5xl lg:text-[4.5rem] font-sans text-[#111827] leading-[1.1] max-w-2xl tracking-tight">
            We <span className="text-[#8b5cf6]">specialize</span> in<br />
            bringing your<br />
            ideas to life
          </motion.h2>
          
          <motion.div
            {...fadeInUp(0.2)}
            className="lg:max-w-md"
          >
            <p className="text-[#4b5563] text-sm md:text-base leading-relaxed font-light mb-4">
              Our multidisciplinary team combines strategy, design, and technology to solve complex problems and create lasting value.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 overflow-hidden md:overflow-visible">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: customEase } }
              }}
            >
              <Card 
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
