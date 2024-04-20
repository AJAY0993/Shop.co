import ProductImages from "../features/Product/ProductImages";
import ProductOverview from "../features/Product/ProductOverview";
import ProductReviewsContainer from "../features/Product/ProductReviewsContainer";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import NewsletterSubscriptionForm from "../ui/NewsletterSubscriptionForm";
import Row from "../ui/Row";
import Slider from "../ui/Slider";
import Container from "./../ui/Container";
import useProduct from "../features/Product/useProduct";
import Spinner from "../ui/Spinner";

function Product() {
  const { product, isError, isLoading, error } = useProduct();
  if (isLoading) return <Spinner />;
  if (isError) return error.message;
  const images = [product.imageUrl, ...product.additionalImageUrls];
  return (
    <>
      <Header />
      <Container>
        <Row classes="no-wrap">
          <ProductImages images={images} />
          <ProductOverview product={product} />
        </Row>
      </Container>
      <ProductReviewsContainer />
      <Slider className="" title="you might also like" />
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
}

export default Product;
