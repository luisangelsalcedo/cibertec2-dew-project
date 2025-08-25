import { defaultBurguer } from "@/assets/images";
import { useShoppingCart } from "@/components/shopping-cart";
import { usePopup } from "@/components/popup";
import "./product-details.scss";
import { config } from "@/config";

export function ProductDetails({ data }) {
  const { name, price, weight, category, description } = data;
  const { addProductToShoppingCart } = useShoppingCart();
  const { closeModal } = usePopup();

  const addProduct = () => {
    addProductToShoppingCart(data);
    closeModal();
  };

  return (
    <div className="producto-detalle">
      <div className="image">
        <img
          src={`${config.base}images/${data.image}`}
          alt="cubana"
          onError={(e) => {
            e.target.src = defaultBurguer; // ruta de imagen por defecto
          }}
        />
      </div>
      <div className="description">
        <span className="category">{category}</span>
        <h2>
          {name}
          <small>{weight} gr</small>
        </h2>
        <p>{description}</p>
        <span className="price">S/ {price}</span>
        <button className="btn" onClick={() => addProduct()}>
          Comprar
        </button>
      </div>
    </div>
  );
}
