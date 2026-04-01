export default function SectionTitle({ children, className = "", align = "center" }) {
  const alignment = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
  return (
    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 leading-[1.1] tracking-tight ${alignment} ${className}`}>
      {children}
    </h2>
  );
}
