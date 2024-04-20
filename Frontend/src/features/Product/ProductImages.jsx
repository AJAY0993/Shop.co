import { useState } from "react";

function ProductImages({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const handleClick = (e) => {
    e.stopPropagation();
    setCurrentImage(e.target.currentSrc);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 p-4 md:flex-row-reverse">
      <div>
        <img
          className="w-full rounded-2xl border-[1px] border-stone-300 object-cover  md:h-[33.125rem] md:w-[27.75rem]"
          src={currentImage}
        />
      </div>
      <div className="flex justify-between gap-4 sm:justify-start sm:gap-2 sm:p-2 md:flex-col">
        {images.slice(0, 3).map((image, i) => (
          <SmallImage src={images[i]} key={i} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

function SmallImage({ src, onClick }) {
  return (
    <img
      className=" aspect-square w-[5.3rem] flex-shrink cursor-pointer rounded-2xl border-[1px] border-stone-300 object-cover object-top sm:w-[30%] md:aspect-[152/167] md:w-[9.5rem]"
      src={src}
      alt="product image"
      onClick={onClick}
    />
  );
}
export default ProductImages;
