import { useShoppingCart } from "../../hook/useShoppingCart";
import { ShoppingCartCard } from "../shopping-cart-card/ShoppingCartCard";
import "./shopping-cart-list.scss";

export function ShoppingCartList() {
  const { shoppingCarList } = useShoppingCart();
  return (
    <div className="shoppingcart-list">
      {shoppingCarList.length <= 0 ? (
        <div className="empty-cart">Aun no hay productos en el carrito</div>
      ) : (
        shoppingCarList.map((item, index) => (
          <ShoppingCartCard
            item={item}
            index={index}
            key={`item-${item.product.id}`}
          />
        ))
      )}
    </div>
  );
}
