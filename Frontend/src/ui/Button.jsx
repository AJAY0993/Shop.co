import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function Button({
  children,
  type,
  selected,
  className,
  size,
  full,
  enlarge,
  onClick,
  loading,
  disabled,
  to,
}) {
  const baseStyle = `text-center bottom-0 block tracking-wide rounded-full  py-2 px-4 md:py-3 disabled:cursor-not-allowed capitalize text-neutral-50 outline-0 font-semibold text-base  sm:text-l ${size === "sm" ? "text-sm px-2 py-2" : ""} capitalize ${!enlarge ? "" : "md:hover:scale-110"} active:scale-90 transition-all`;
  const inncAndDecBaseStyle =
    " border-1 py-3 px-4 bg-stone-200 hover:bg-stone-300 active:bg-stone-400 inline-block text-neutral-950 ";
  const styles = {
    primary: baseStyle + " bg-neutral-950 w-full ",
    secondary: `${baseStyle} border-2 border-stone-400 bg-transparent py-3   text-neutral-950 w-full`,
    fit: baseStyle + "w-fit",
    selector: `${baseStyle} +  w-fit ${!selected ? " bg-stone-200 text-neutral-950" : "bg-neutral-950 text-neutral-50"} `,
    increment: `${inncAndDecBaseStyle} ${size === "sm" ? "text-[.8rem]" : ""} rounded-r-full`,
    decrement: `${inncAndDecBaseStyle} ${size === "sm" ? "text-[.8rem]" : ""} rounded-l-full`,
    raw: "border-0 outline-0 bg-transparent",
  };

  if (to) {
    return (
      <Link className={`${styles[type]} ${className} `} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${styles[type]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}

export default Button;
