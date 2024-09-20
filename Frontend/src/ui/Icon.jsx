function LinkIcon({ children, to, className }) {
  return (
    <a
      href={to}
      className={`aspect-square cursor-pointer overflow-hidden rounded-full bg-stone-300 p-2 ${className}`}
    >
      {children}
    </a>
  );
}

export default LinkIcon;
