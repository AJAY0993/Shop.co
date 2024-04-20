import Button from "../../ui/Button";

function ProductSizeSelector({ size, setSize }) {
  return (
    <div className="px-4 ">
      <h4 className="mb-4 font-medium text-stone-400">Choose size</h4>
      <ul className="flex flex-wrap gap-4">
        <li>
          <Button
            type="selector"
            selected={size === "s"}
            onClick={() => setSize("s")}
          >
            small
          </Button>
        </li>
        <li>
          <Button
            type="selector"
            selected={size === "m"}
            onClick={() => setSize("m")}
          >
            medium
          </Button>
        </li>
        <li>
          <Button
            type="selector"
            selected={size === "l"}
            onClick={() => setSize("l")}
          >
            large
          </Button>
        </li>
        <li>
          <Button
            type="selector"
            selected={size === "xl"}
            onClick={() => setSize("xl")}
          >
            x-large
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default ProductSizeSelector;
