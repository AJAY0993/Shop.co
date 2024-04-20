import Button from "../../ui/Button";
import Subtitle from "../../ui/Subtitle";

function EmptyCart() {
  return (
    <div className="mx-auto flex  max-w-80 flex-col gap-8 text-center">
      <img src="/emptyCart.svg" />
      <Subtitle>I am empty</Subtitle>
      <div>
        <Button type="primary" to="/shop">
          Go and Add
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;
