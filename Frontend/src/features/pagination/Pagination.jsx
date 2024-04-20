import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import PaginateBtn from "./PaginateBtn";
import { useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";

const initialState = { page: 1 };
function reducer(state, action) {
  switch (action.type) {
    case "/next":
      return { ...state, page: state.page + 1 };
    case "/previous":
      return state.page > 1 ? { ...state, page: state.page - 1 } : { ...state };
    default:
      return state;
  }
}

function Pagination() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePagination = () => {
    searchParams.set("page", state.page);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    const timerId = setTimeout(handlePagination, 500);
    return () => clearTimeout(timerId);
  }, [state.page]);

  return (
    <div className="flex justify-between sm:ml-[19rem]">
      <button
        className="text-xl"
        onClick={() => {
          dispatch({ type: "/previous" });
        }}
      >
        <span>
          <FaArrowLeft className="inline transition-all hover:translate-x-4" />{" "}
          Previous
        </span>
      </button>
      <div className="flex justify-center gap-4">
        <PaginateBtn currentPage={state.page} />
      </div>
      <button
        className="text-xl"
        onClick={() => {
          dispatch({ type: "/next" });
        }}
      >
        <span>
          Next <FaArrowRight className="inline" />
        </span>
      </button>
    </div>
  );
}

export default Pagination;
