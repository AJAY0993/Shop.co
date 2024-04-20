function Title({ children, align = "center", className }) {
  return (
    <h2
      className={`my-4 text-${align} text-2xl font-extrabold uppercase ${className}`}
    >
      {children}
    </h2>
  );
}

export default Title;
