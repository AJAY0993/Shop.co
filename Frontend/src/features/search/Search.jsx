import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { searchProducts } from "../../services/productApi";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import StarRating from "../../ui/StarRating";

function Search() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (query) {
        const result = await searchProducts(query);
        setProducts(result);
      }
    }, 500);
    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <Modal>
      <Modal.Open id="search-box">
        <button>
          <FaSearch />
        </button>
      </Modal.Open>
      <Modal.Window id="search-box">
        <div className="md:h-90vh absolute left-[10%] top-[12.5%] flex h-[75dvh] min-h-[30rem] w-[80%] flex-col items-center overflow-auto rounded-md bg-white text-neutral-700">
          <div className="mb-2 w-full border-b-2">
            <input
              className="w-full rounded-md border-0 px-4 py-2 focus:outline-none"
              placeholder="Puma shoes..."
              onChange={handleChange}
              autoFocus
            />
          </div>
          <ul className="flex flex-wrap justify-center gap-4 px-4">
            {products.map((product) => (
              <SearchItem item={product} key={product._id} />
            ))}
          </ul>
        </div>
      </Modal.Window>
    </Modal>
  );
}

function SearchItem({ item }) {
  const navigate = useNavigate();
  return (
    <li
      className="mt-2 flex w-full min-w-[300px] cursor-pointer gap-2 overflow-hidden rounded-sm bg-neutral-800 text-white sm:w-full md:w-[calc(50%-16px)]"
      onClick={(e) => {
        e.preventDefault();
        navigate(`/shop/${item._id}`);
      }}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="aspect-square w-[3rem] object-cover"
      />
      <div>
        <p className="text-sm">{item.name}</p>
        <StarRating rating={item.rating} size="1rem" />
      </div>
    </li>
  );
}
export default Search;
