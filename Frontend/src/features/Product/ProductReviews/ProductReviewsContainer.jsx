import { useState } from "react";
import Subtitle from "../../../ui/Subtitle";
import Container from "../../../ui/Container";
import Row from "../../../ui/Row";
import Button from "../../../ui/Button";
import CreateReview from "./CreateReview";
import ProductReview from "./ProductReview";
import useReviews from "./useReviews";

function ProductReviewsContainer() {
  const [showCreateReviewForm, setShowCreateReviewForm] = useState(false);
  const { reviews, isLoading } = useReviews();
  const open = () => setShowCreateReviewForm(true);
  const close = () => setShowCreateReviewForm(false);

  return (
    <Container>
      <div className="my-2 px-4 sm:my-4">
        <Row classes="flex justify-between items-center my-2">
          <Subtitle className="my-3">All reviews</Subtitle>
          {!showCreateReviewForm && (
            <Button
              type="primary"
              className="max-w-fit"
              enlarge={false}
              onClick={open}
            >
              Write a Review
            </Button>
          )}
        </Row>
        {showCreateReviewForm && <CreateReview close={close} />}
        {(!reviews || reviews.length == 0) && (
          <Subtitle className="text-center">
            No reviews about this product yet! Be the first to write a review
          </Subtitle>
        )}
        <Row classes="flex-wrap gap-4">
          {reviews?.map((review) => (
            <ProductReview
              review={review}
              className="flex-grow"
              key={review._id}
            />
          ))}
        </Row>

        {reviews?.length > 0 && (
          <Button
            type="secondary"
            className="mx-auto my-4 max-w-52 "
            disabled={isLoading}
          >
            Load more
          </Button>
        )}
      </div>
    </Container>
  );
}

export default ProductReviewsContainer;
