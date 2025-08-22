import { defaultBurguer } from "@/assets/images";

export function ProductDetails({ data }) {
  const { name, price, weight, category, description } = data;
  return (
    <div className="producto-detalle">
      <div className="image">
        <img src={defaultBurguer} />
      </div>
      <div className="description">
        <span className="category">{category}</span>
        <h2>
          {name}
          <small>{weight} gr</small>
        </h2>
        <p>{description}</p>
        <span className="price">S/ {price}</span>
        <button className="btn">Comprar</button>
      </div>
    </div>
  );
}
