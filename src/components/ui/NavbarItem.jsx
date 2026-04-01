import { Link } from 'react-router-dom';

export default function NavbarItem({ to, children, isActive = false }) {
  const activeClass = isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900";
  return (
    <Link to={to} className={`font-medium transition-colors ${activeClass}`}>
      {children}
    </Link>
  );
}
