import { usePopup } from "@/components/popup";
import { ShoppingcartIcon } from "@/assets/svg";
import { ShoppingCartView } from "../shopping-cart-view/ShoppingCartView";
import "./shopping-cart-button.scss";

export function ShoppingCartButton({ children }) {
  const { openModal } = usePopup();
  return (
    <button
      id="shopping-cart-button"
      className="shopping-cart-button"
      onClick={() => openModal(<ShoppingCartView />)}
    >
      <ShoppingcartIcon />
      <span>{children}</span>
    </button>
  );
}
