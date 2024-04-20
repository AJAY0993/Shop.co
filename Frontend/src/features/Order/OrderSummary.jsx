function OrderSummary({ totalAmount }) {
  return (
    <div className="my-2 bg-stone-300">
      <div className="p-4">
        <span className="text-lg font-medium">
          Total Amount: ${`${totalAmount}`}
        </span>
      </div>
    </div>
  );
}

export default OrderSummary;
