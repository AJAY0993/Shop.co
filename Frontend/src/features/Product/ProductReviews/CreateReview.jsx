import { useRef } from "react";
import useCreateReview from "./useCreateReview";
import Row from "../../../ui/Row";
import Button from "./../../../ui/Button";
import { useParams } from "react-router-dom";

function CreateReview({ close }) {
  const reviewRef = useRef();
  const { id } = useParams();
  const { createReview, isCreating } = useCreateReview();
  const handleCreateReview = (e) => {
    e.preventDefault();
    if (reviewRef.current.value === "") return;
    createReview({ id, review: reviewRef.current.value }, { onSuccess: close });
  };

  return (
    <form className="my-2 mb-16 block sm:my-3" onSubmit={handleCreateReview}>
      <Row>
        <input
          className="border-bottom-2  flex-grow border-0 border-transparent outline-0 transition-all focus:border-0 focus:border-b-2 focus:border-stone-900"
          placeholder="Write a review"
          ref={reviewRef}
        />
        <Button
          type="primary"
          className="min-w-20 max-w-fit"
          loading={isCreating}
          disabled={isCreating}
        >
          Add
        </Button>
      </Row>
    </form>
  );
}

export default CreateReview;
