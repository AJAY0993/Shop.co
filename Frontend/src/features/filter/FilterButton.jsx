function FilterButton({ name, active, onClick }) {
  return (
    <button
      disabled={active}
      className={`font-sm min-w-12 rounded-xl ${active ? " bg-neutral-950 text-stone-100 hover:bg-neutral-800" : " bg-stone-200 text-stone-800 hover:bg-stone-300"} px-2 py-1 font-medium capitalize  disabled:cursor-not-allowed`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default FilterButton;
