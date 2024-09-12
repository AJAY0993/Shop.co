import { useNavigate } from "react-router-dom";
import Title from "../../ui/Title";

function ProductCatalog() {
  return (
    <div className="m-4 rounded-lg bg-stone-300 px-4 py-2">
      <Title>Browse by categories</Title>
      <CatalogRow>
        <CatlogItem name={"shirts"} img="bg-shirts" />
        <CatlogItem name={"jeans"} img="bg-jeans" grow={true} />
      </CatalogRow>
      <CatalogRow>
        <CatlogItem name={"shoes"} img="bg-shoes" grow={true} />
        <CatlogItem name={"accessories"} img="bg-accessories" />
      </CatalogRow>
    </div>
  );
}

function CatlogItem({ name, img, grow }) {
  const navigate = useNavigate();
  const navigateToCategory = (e) => {
    e.preventDefault();
    navigate(`/shop?category=${name}`);
  };
  return (
    <div
      className={`${img} relative flex h-40 min-w-64 cursor-pointer items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat text-transparent transition-all hover:text-white ${grow && "flex-grow"} group`}
      onClick={navigateToCategory}
    >
      <div className="absolute inset-0 rounded-lg bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>
      <h3 className="relative z-10 text-lg font-semibold capitalize">{name}</h3>
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
