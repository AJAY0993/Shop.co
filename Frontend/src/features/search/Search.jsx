import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { searchProducts } from "../../services/productApi";
import { useNavigate } from "react-router-dom";

function Search() {
  const [focus, setFocus] = useState(false);
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
        console.log(query);
      }
    }, 500);
    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <div
      className="relative"
      onBlur={() => {
        setQuery("");
        setFocus(false);
      }}
    >
      <div className=" ml-auto md:ml-0">
        <label
          htmlFor="search"
          className="absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer"
        >
          <FaSearch />
        </label>
        <input
          id="search"
          className="w-0 rounded-full px-2 py-1 transition-all md:px-4 md:py-2 md:focus:w-80"
          placeholder="Type here to search"
          onChange={handleChange}
          onFocus={() => setFocus(true)}
        />
      </div>
      {focus && (
        <div className="bottom-[-calc(100%  + 1rem)] absolute  z-50 bg-neutral-50">
          <ul className="space-y-4">
            {products.map((item) => (
              <SearchItem item={item} key={item._id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function SearchItem({ item }) {
  const navigate = useNavigate();
  return (
    <li
      className="flex cursor-pointer justify-between gap-2 "
      onClick={(e) => {
        e.preventDefault();
        navigate(`/${item._id}`);
        alert("booga booga boo");
      }}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        className="aspect-square w-[3rem]
"
      />
      <p>{item.name.slice(0, 30) + "..."}</p>
    </li>
  );
}
export default Search;
