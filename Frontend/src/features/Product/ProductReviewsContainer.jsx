import Subtitle from "../../ui/Subtitle";
import ProductReview from "./ProductReview";
import Container from "./../../ui/Container";
import Row from "../../ui/Row";
import Button from "../../ui/Button";

function ProductReviewsContainer() {
  return (
    <Container>
      <div className="my-2 px-4 sm:my-4">
        <Row classes="flex justify-between items-center my-2">
          <Subtitle className="my-3">All reviews</Subtitle>
          <Button type="primary" className="max-w-fit" enlarge={false}>
            Write a Review
          </Button>
        </Row>
        <Row classes="flex-wrap gap-4">
          <ProductReview className="flex-grow" />
          <ProductReview className="flex-grow" />
          <ProductReview className="flex-grow" />
          <ProductReview className="flex-grow" />
        </Row>
        <Button type="secondary" className="mx-auto my-4 max-w-52 ">
          Load more
        </Button>
      </div>
    </Container>
  );
}

export default ProductReviewsContainer;
