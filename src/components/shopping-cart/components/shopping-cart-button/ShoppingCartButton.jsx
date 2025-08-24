import { usePopup } from "@/components/popup";
import { ShoppingcartIcon } from "@/assets/svg";
import "./shopping-cart-button.scss";

export function ShoppingCartButton({ children }) {
  const { openModal } = usePopup();
  return (
    <button
      id="shopping-cart-button"
      className="shopping-cart-button"
      onClick={() => openModal(<>shopping cart</>)}
    >
      <ShoppingcartIcon />
      <span>{children}</span>
    </button>
  );
}
