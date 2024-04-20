import CartItemsContainer from "../features/cart/CartItemsContainer";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import NewsletterSubscriptionForm from "../ui/NewsletterSubscriptionForm";
import Container from "./../ui/Container";
import CartTitle from "../features/cart/CartTitle";
import Row from "../ui/Row";
import CartSummary from "../features/cart/CartSummary";

function Cart() {
  return (
    <>
      <Header />
      <Container className="px-2">
        <CartTitle />
        <Row classes="flex-wrap gap-2">
          <CartItemsContainer />
          <CartSummary />
        </Row>
      </Container>
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
}

export default Cart;
Cart;
