import { motion } from 'framer-motion';
import { customEase } from '../../utils/motion';

export default function Card({ 
  title, 
  description, 
  index = 0, 
  variant = 'default' 
}) {
  const cardVariants = {
    hover: { 
      scale: 1.03, 
      y: -5,
      transition: { duration: 0.3, ease: customEase }
    }
  };

  return (
    <motion.div 
      whileHover="hover"
      variants={cardVariants}
      className={`bg-white rounded-3xl p-10 sm:p-12 shadow-md hover:shadow-2xl transition-shadow ${variant === 'dark' ? 'bg-[#111827] text-white' : ''}`}
    >
      <div className="flex flex-col h-full">
        <span className="text-[#8b5cf6] font-bold text-lg mb-6 block">0{index + 1}</span>
        <h3 className="text-2xl sm:text-3xl font-sans font-medium text-[#111827] mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
