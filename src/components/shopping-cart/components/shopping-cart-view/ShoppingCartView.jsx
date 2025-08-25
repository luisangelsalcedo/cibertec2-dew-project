import { useShoppingCart } from "../../hook/useShoppingCart";
import { ShoppingCartList } from "../shopping-cart-list/ShoppingCartList";
import { ShoppingCartResume } from "../shopping-cart-resume/ShoppingCartResume";
import "./shopping-cart-view.scss";

export function ShoppingCartView() {
  const { shoppingCarList } = useShoppingCart();
  return (
    <div className="shoppingcar-view">
      {!!shoppingCarList.length && <ShoppingCartResume />}
      <ShoppingCartList />
    </div>
  );
}
