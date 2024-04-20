function PaginateBtn({ currentPage }) {
  return (
    <button className="aspect-square w-8 rounded-md bg-stone-300 sm:w-10">
      {currentPage}
    </button>
  );
}

export default PaginateBtn;
