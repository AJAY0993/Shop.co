import CartItemsContainer from "../features/cart/CartItemsContainer";
import Container from "./../ui/Container";
import CartTitle from "../features/cart/CartTitle";
import Row from "../ui/Row";
import CartSummary from "../features/cart/CartSummary";
import AppLayout from "./../ui/AppLayout";

function Cart() {
  return (
    <AppLayout>
      <Container className="px-2">
        <CartTitle />
        <Row classes="flex-wrap gap-2">
          <CartItemsContainer />
          <CartSummary />
        </Row>
      </Container>
    </AppLayout>
  );
}

export default Cart;
Cart;
