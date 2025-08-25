import { memo } from "react";
import { defaultBurguer } from "@/assets/images";
import { MainButton } from "@/components";
import { config } from "@/config";
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
        <img
          src={`${config.base}images/${data.image}`}
          alt="cubana"
          onError={(e) => {
            e.target.src = defaultBurguer; // ruta de imagen por defecto
          }}
        />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <div className="price">S/ {price}</div>
      </div>
    </MainButton>
  );
});
