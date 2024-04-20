function List({ items, className, render, emptyListItem }) {
  return (
    <ul className={`${className}`}>
      {items.length < 1 && emptyListItem}
      {items.map(render)}
    </ul>
  );
}

export default List;
