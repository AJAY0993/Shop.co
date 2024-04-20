import Footer from "../ui/Footer";
import Header from "../ui/Header";
import NewsletterSubscriptionForm from "../ui/NewsletterSubscriptionForm";
import ShopPage from "./../features/shop/Shop";

function Shop() {
  return (
    <>
      <Header />
      <ShopPage />
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
}

export default Shop;
