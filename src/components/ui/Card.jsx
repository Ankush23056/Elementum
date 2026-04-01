import { motion } from 'framer-motion';

export default function Card({ children, className = "", animate = true, ...props }) {
  if (!animate) {
    return (
      <div className={`bg-white p-8 md:p-12 rounded-2xl shadow-xl ${className}`} {...props}>
        {children}
      </div>
    );
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`bg-white p-8 md:p-12 rounded-2xl shadow-xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
