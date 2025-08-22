import { defaultBurguer } from "@/assets/images";
import "./product-card.scss";

export function ProductCard({ data }) {
  const { name, price } = data;
  return (
    <a
      className="producto-card"
      href="#bb-cubana"
      data-slug="cubana"
      id="bb-cubana"
    >
      <div className="image">
        <img src={defaultBurguer} alt="cubana" />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <div className="price">S/ {price}</div>
      </div>
    </a>
  );
}
