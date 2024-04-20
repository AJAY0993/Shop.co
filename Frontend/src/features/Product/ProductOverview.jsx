import P from "../../ui/P";
import StarRating from "../../ui/StarRating";
import Title from "./../../ui/Title";
import ProductSizeSelector from "./ProductSizeSelector";
import Row from "./../../ui/Row";
import Container from "../../ui/Container";
import ProductPrice from "./ProductPrice";
import CartController from "../cart/CartController";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem, getItemQuantity } from "../cart/cartSlice";
import Button from "../../ui/Button";
import { useState } from "react";

function ProductOverview({ product }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const navigate = useNavigate();
  const itemQuantity = useSelector(getItemQuantity(product._id));
  const dispatch = useDispatch();
  const btnText = itemQuantity ? "Go to cart" : "Add Item";

  const handleAddingOrGoToCart = () => {
    if (itemQuantity === 0) {
      dispatch(
        addItem({
          name: product.name,
          _id: product._id,
          imageUrl: product.imageUrl,
          quantity: 1,
          price: product.price,
          color: color,
          size: size,
        }),
      );
    } else {
      navigate("/cart");
    }
  };

  return (
    <Container className="flex flex-col gap-8 overflow-hidden">
      <div className=" px-4">
        <Title align="left" className="max-w-96">
          {product.name}
        </Title>
        <StarRating rating={product.rating.rate} />
        <ProductPrice price={product.price} />
        <P>{product.description}</P>
      </div>
      <div className="px-4">
        <h4 className="mb-4 font-medium text-stone-400">Choose color</h4>
        <Row classes="gap-4">
          <Color color="bg-red-400" onChange={setColor} />
          <Color color="bg-blue-400" onChange={setColor} />
          <Color color="bg-green-400" onChange={setColor} />
        </Row>
      </div>
      <ProductSizeSelector size={size} setSize={setSize} />
      <Row classes=" gap-4 items-center px-4">
        <CartController product={product} />
        <div className="flex-grow">
          <Button type="primary" onClick={handleAddingOrGoToCart}>
            {btnText}
          </Button>
        </div>
      </Row>
    </Container>
  );
}

function Color({ color, onChange }) {
  const handleChange = (e) => {
    e.preventDefault();
    onChange((s) => e.target.id);
  };
  return (
    <div
      className={`aspect-square w-12 rounded-full ${color}`}
      onClick={handleChange}
    ></div>
  );
}
export default ProductOverview;
