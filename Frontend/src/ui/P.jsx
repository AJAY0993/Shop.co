function P({ children, className }) {
  return (
    <p
      className={`my-4 max-w-[60ch] text-base font-medium text-stone-500 ${className}`}
    >
      {children}
    </p>
  );
}

export default P;
