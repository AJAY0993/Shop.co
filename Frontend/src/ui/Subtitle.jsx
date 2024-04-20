function Subtitle({ children, className = "" }) {
  const baseStyle = "text-xl font-semibold capitalize";
  return <h3 className={`${baseStyle} ${className}`}>{children}</h3>;
}

export default Subtitle;
