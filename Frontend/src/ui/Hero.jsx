import Button from "./Button";

function Hero() {
  return (
    <>
      <section className="min-h-screen bg-[#f2f0f1]   bg-fixed bg-right-top bg-no-repeat  md:flex md:flex-col md:bg-[url('/heroImage.png')]">
        <div className="mx:auto max-w-[77.5rem] px-4 py-2 pt-4 md:my-auto md:w-2/5 md:px-10">
          <h1 className="text-4xl font-extrabold uppercase leading-10 xl:text-7xl">
            find clothes that matches your style
          </h1>
          <p className="my-4 text-xs font-medium text-stone-500 xl:text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="md:w-52">
            <Button type="primary" to="/shop">
              Shop now
            </Button>
          </div>
          <ul className=" my-4 mb-0  flex w-full list-none flex-wrap justify-around  text-xl font-bold md:my-8  md:text-2xl">
            <li className="basis">
              <h4>200+</h4>
              <span className="text-xs text-stone-600">
                International Brands
              </span>
            </li>
            <li>
              <h4>2000+</h4>
              <span className="text-xs text-stone-600">
                High-Quality Products
              </span>
            </li>
            <li>
              <h4>30,000+</h4>
              <span className="text-xs text-stone-600">Happy Customers</span>
            </li>
          </ul>
        </div>
        <div className="w-full md:hidden">
          <picture>
            <source
              srcSet="/heroImag.png"
              media="(min-width:750px)"
              style={{
                margin: 0,
              }}
            />
            <img src="/heroImagesm.png" />
          </picture>
        </div>
        <footer className="mt-auto">
          <ul className="flex flex-wrap justify-center gap-4 bg-stone-950 px-2 py-4 md:justify-around">
            <li>
              <img src="/versace.png" />
            </li>
            <li>
              <img src="/zara.png" />
            </li>
            <li>
              <img src="/gucci.png" />
            </li>
            <li>
              <img src="/prada.png" />
            </li>
            <li>
              <img src="/calvinKlein.png" />
            </li>
          </ul>
        </footer>
      </section>
    </>
  );
}

export default Hero;
