import Title from "../../ui/Title";

function ProductCatalog() {
  return (
    <div className="m-4 rounded-lg bg-stone-300 px-4 py-2">
      <Title>Browse by categories</Title>
      <CatalogRow>
        <CatlogItem name={"shirts"} img="shirts.webp" />
        <CatlogItem name={"jeans"} img="jeans.webp" grow={true} />
      </CatalogRow>
      <CatalogRow>
        <CatlogItem name={"shoes"} img="shoes.webp" grow={true} />
        <CatlogItem name={"accessories"} img="accessories.webp" />
      </CatalogRow>
    </div>
  );
}

function CatlogItem({ name, img, grow }) {
  return (
    <div
      className={`relative h-40 min-w-64 rounded-lg bg-[url('${img}')] bg-cover bg-center  bg-no-repeat ${grow && "flex-grow"}`}
    >
      <h3 className="absolute left-4 top-4  text-lg font-semibold capitalize">
        {name}
      </h3>
    </div>
  );
}

function CatalogRow({ children }) {
  return (
    <div className="m-auto  my-4 flex max-w-[52rem] flex-wrap justify-center gap-4">
      {children}
    </div>
  );
}

export default ProductCatalog;
