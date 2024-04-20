import ProductCatalog from "../features/Product/ProductCatalog";
import Slider from "../ui/Slider";
import Hero from "../ui/Hero";
import NewsletterSubscriptionForm from "../ui/NewsletterSubscriptionForm";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Slider title="new arrivals" />
      <Slider title="top selling" query="?isSellingFast=true" />
      <ProductCatalog />
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
}

export default Home;
