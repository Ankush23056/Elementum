export default function SectionTitle({ children, className = "", align = "center" }) {
  const alignment = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
  return (
    <h2 className={`text-4xl md:text-5xl font-serif text-gray-900 leading-tight ${alignment} ${className}`}>
      {children}
    </h2>
  );
}
