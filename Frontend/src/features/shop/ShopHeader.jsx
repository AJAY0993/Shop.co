import { useSearchParams } from "react-router-dom";
import Subtitle from "../../ui/Subtitle";

function ShopHeader() {
  const [searchParams] = useSearchParams();
  const currentFilter = searchParams.get("category") || "all";
  return (
    <header className="flex h-10 items-center md:ml-[19rem]">
      <Subtitle>{currentFilter}</Subtitle>
    </header>
  );
}

export default ShopHeader;
