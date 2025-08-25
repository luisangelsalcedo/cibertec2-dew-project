import { useShoppingCart } from "../../hook/useShoppingCart";
import { TrashIcon } from "@/assets/svg";
import "./shopping-cart-card.scss";
import { defaultBurguer } from "@/assets/images";
import { config } from "@/config";

export function ShoppingCartCard({ item, index }) {
  const {
    removeProductToShoppingCart,
    addProductToShoppingCart,
    deleteProductToShoppingCart,
  } = useShoppingCart();
  return (
    <div className="shoppingcart-card">
      <div className="image">
        <img
          src={`${config.base}images/${item.product.image}`}
          alt="cubana"
          onError={(e) => {
            e.target.src = defaultBurguer; // ruta de imagen por defecto
          }}
        />
      </div>
      <div className="info">
        <div className="info-top">
          <small>{item.product.category}</small>
          <div>
            <h3>{item.product.name}</h3>
            <h3>S/ {item.product.price}</h3>
          </div>
        </div>
        <div className="info-bottom">
          <div>
            <span>Cantidad: </span>
            <button
              onClick={() => removeProductToShoppingCart(index)}
              className="btn"
            >
              -
            </button>
            <div className="count">{item.count}</div>
            <button
              onClick={() => addProductToShoppingCart(item.product)}
              className="btn"
            >
              +
            </button>
          </div>

          <button
            className="delete"
            onClick={() => deleteProductToShoppingCart(index)}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
