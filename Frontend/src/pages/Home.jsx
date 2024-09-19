import ProductCatalog from "../features/Product/ProductCatalog";
import Slider from "../ui/Slider";
import Hero from "../ui/Hero";
import AppLayout from "../ui/AppLayout";

function Home() {
  return (
    <AppLayout>
      <Hero />
      <Slider title="new arrivals" />
      <Slider title="top selling" query="?isSellingFast=true" />
      <ProductCatalog />
    </AppLayout>
  );
}

export default Home;
