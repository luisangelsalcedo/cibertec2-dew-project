import { defaultBurguer } from "@/assets/images";
import { useShoppingCart } from "@/components/shopping-cart";
import "./product-details.scss";

export function ProductDetails({ data }) {
  const { name, price, weight, category, description } = data;

  const { addProductToShoppingCart } = useShoppingCart();
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
        <button className="btn" onClick={() => addProductToShoppingCart(data)}>
          Comprar
        </button>
      </div>
    </div>
  );
}
