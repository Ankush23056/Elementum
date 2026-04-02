import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const features = [
  {
    title: "Strategy",
    description: "We help you define your vision and chart a path to success with data-driven insights.",
    delay: 0.1
  },
  {
    title: "Design",
    description: "Our world-class design team creates beautiful, functional experiences that users love.",
    delay: 0.2
  },
  {
    title: "Digital",
    description: "We build modern, scalable digital products that drive growth and engagement.",
    delay: 0.3
  },
  {
    title: "Social",
    description: "We help you connect with your audience and build meaningful relationships across platforms.",
    delay: 0.4
  }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.211, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section className="bg-[#e4f4ea] py-24 md:py-32 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 lg:mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-4xl sm:text-5xl lg:text-[4.5rem] font-sans text-[#111827] leading-[1.1] max-w-2xl tracking-tight">
            We <span className="text-[#8b5cf6]">specialize</span> in<br />
            bringing your<br />
            ideas to life
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:max-w-md"
          >
            <p className="text-[#4b5563] text-sm md:text-base leading-relaxed font-light mb-4">
              Our multidisciplinary team combines strategy, design, and technology to solve complex problems and create lasting value.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 overflow-hidden md:overflow-visible">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
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
