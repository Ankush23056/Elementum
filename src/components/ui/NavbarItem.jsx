import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavbarItem({ to, children, isActive = false }) {
  const activeClass = isActive ? "text-gray-900 underline decoration-brand-purple decoration-2 underline-offset-4" : "text-gray-600 hover:text-gray-900";
  return (
    <Link to={to} className={`font-medium transition-colors ${activeClass} relative group`}>
      <motion.span 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </Link>
  );
}
