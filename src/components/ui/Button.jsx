export default function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyle = "font-medium transition-all shadow-sm inline-flex items-center justify-center";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-lg px-8 py-3 rounded-full",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 px-8 py-3 rounded-full",
    text: "text-brand-purple hover:text-brand-purple/80 shadow-none px-0 py-0 group",
    textRed: "text-brand-red hover:text-brand-red/80 shadow-none px-0 py-0 group",
  };
  return (
    <button className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
