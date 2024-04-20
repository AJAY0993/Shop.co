import Container from "../ui/Container";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import NewsletterSubscriptionForm from "../ui/NewsletterSubscriptionForm";
import OrderMain from "../features/Order/OrderMain";

function Order() {
  console.log("order");
  return (
    <>
      <Header />
      <Container className="px-2">
        <OrderMain />
      </Container>
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
}

export default Order;
