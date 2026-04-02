import { motion } from 'framer-motion';

export default function Card({ children, className = "", animate = true, direction = "up", ...props }) {
  if (!animate) {
    return (
      <div className={`bg-white p-8 md:p-12 rounded-2xl shadow-xl ${className}`} {...props}>
        {children}
      </div>
    );
  }

  const variants = {
    initial: {
      opacity: 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };
  
  return (
    <motion.div 
      initial="initial"
      whileInView="visible"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      variants={variants}
      className={`bg-white p-8 md:p-12 rounded-2xl shadow-xl ${className} cursor-pointer transition-shadow`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
