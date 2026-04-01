export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyle = "font-semibold transition-all shadow-sm inline-flex items-center justify-center";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-xl shadow-gray-900/20 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg",
    secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-900 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg",
    text: "text-brand-purple hover:text-brand-purple/80 shadow-none px-0 py-0 text-base sm:text-lg group",
    textRed: "text-brand-red hover:text-brand-red/80 shadow-none px-0 py-0 text-base sm:text-lg group",
  };
  return (
    <button className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
