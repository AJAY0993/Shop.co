function CartSummaryListItem({ name, value, color = "neutral-950" }) {
  return (
    <li>
      <div className="flex justify-between capitalize">
        <span className="text-stone-500">{name}</span>
        <span className={`font-semibold text-${color}`}>{value}</span>
      </div>
    </li>
  );
}

export default CartSummaryListItem;
