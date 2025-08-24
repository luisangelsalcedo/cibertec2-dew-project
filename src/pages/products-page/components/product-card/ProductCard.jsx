import { memo } from "react";
import { defaultBurguer } from "@/assets/images";
import { MainButton } from "@/components";
import { ProductDetails } from "../product-details/ProductDetails";
import "./product-card.scss";

export const ProductCard = memo(({ data, handleClick }) => {
  const { name, price } = data;

  return (
    <MainButton
      className="producto-card"
      href={null}
      data-slug="cubana"
      id="bb-cubana"
      onClick={() => handleClick(<ProductDetails data={data} />)}
    >
      <div className="image">
        <img src={defaultBurguer} alt="cubana" />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <div className="price">S/ {price}</div>
      </div>
    </MainButton>
  );
});
