import { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function ImageModal({ images }) {
  const length = images.length;
  const [index, setIndex] = useState(0);
  const handleChange = (operation) => {
    if (operation === "inc") {
      if (index === length - 1) {
        setIndex(0);
      } else {
        setIndex((i) => i + 1);
      }
    }
    if (operation === "dec") {
      if (index === 0) {
        setIndex(length - 1);
      } else {
        setIndex((i) => i - 1);
      }
    }
  };

  return (
    <div className="relative mx-auto max-w-[35rem] ">
      <div className=" mx-auto flex w-72 items-center justify-center bg-stone-50 sm:w-[35rem]">
        <button
          className="absolute left-12 top-1/2 -translate-y-1/2 "
          onClick={() => handleChange("dec")}
        >
          <FaLessThan />
        </button>
        <Img src={images[index]} />
        <button
          className="absolute right-12 top-1/2 -translate-y-1/2"
          onClick={() => handleChange("inc")}
        >
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
}

function Img({ src }) {
  return (
    <img
      className="mx-auto  aspect-square object-contain object-center"
      src={src}
    />
  );
}

export default ImageModal;
