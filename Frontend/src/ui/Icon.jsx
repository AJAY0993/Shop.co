function Icon({ children, classes }) {
  return (
    <span className="aspect-square cursor-pointer overflow-hidden rounded-full bg-stone-300 p-2">
      {children}
    </span>
  );
}

export default Icon;
