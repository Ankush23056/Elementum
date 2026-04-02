import { motion } from 'framer-motion';

export default function SectionTitle({ children, className = "", align = "center" }) {
  const alignment = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 leading-[1.1] tracking-tight ${alignment} ${className}`}
    >
      {children}
    </motion.h2>
  );
}
