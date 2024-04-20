function Sorter({ top, right, BiLeftArrow, bottom, setSort }) {
  return (
    <div className={`absolute right-8 top-2`}>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value={"price"}>Price (Low to high) </option>
        <option value={"-price"}>Price (High to low) </option>
        <option value={"rating"}>Rating (Low to high) </option>
        <option value={"-rating"}>Rating (High to low) </option>
      </select>
    </div>
  );
}

export default Sorter;
