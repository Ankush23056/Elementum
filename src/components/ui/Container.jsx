export default function Container({ children, className = "", maxWidth = "max-w-7xl" }) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
}
