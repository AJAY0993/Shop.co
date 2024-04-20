function Container({ children, className }) {
  const baseStyle = "mx-auto max-w-[77.5rem]";
  return <div className={`${baseStyle} ${className}`}>{children}</div>;
}

export default Container;
