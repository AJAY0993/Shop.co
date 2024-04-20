import Header from "../ui/Header";
import NewsletterSubscriptionForm from "../ui/NewsletterSubscriptionForm";
import Footer from "../ui/Footer";
import Container from "./../ui/Container";
import List from "../ui/List";
import NoMatchFound from "../ui/NoMatchFound";
import ProductItem from "../features/Product/ProductItem";
import useWishList from "../features/wishlist/useWishList";
import Spinner from "../ui/Spinner";

function WishList() {
  const { wishListProducts, isLoading, isError, error } = useWishList();
  if (isLoading) return <Spinner />;
  if (isError) return <h3>{error.message}</h3>;
  return (
    <>
      <Header />
      <Container className="px-2">
        <List
          className="flex flex-wrap gap-2 py-2 sm:py-4"
          items={wishListProducts}
          render={(item) => <ProductItem product={item} key={item._id} />}
          emptyListItem={
            <NoMatchFound
              message="You have't added any product into wishlist yet"
              btnText="Explore ->"
            />
          }
        />
      </Container>
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
}

export default WishList;
