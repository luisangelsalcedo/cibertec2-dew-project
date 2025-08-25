import { MainButton } from "@/components";
import "./shopping-cart-resume.scss";
import { useShoppingCart } from "../../hook/useShoppingCart";

export function ShoppingCartResume() {
  const { totalProductCount, shoppingCarList } = useShoppingCart();

  const IVG = 0.18;

  const totalPrice = shoppingCarList.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );

  const totalIGV = shoppingCarList.reduce(
    (sum, item) => sum + item.product.price * IVG * item.count,
    0
  );

  return (
    <div className="shoppingcart-resumen">
      <div>
        <h3>Resumen de la compra</h3>
        <ul>
          <li>
            <span>Subtotal ({totalProductCount} item)</span>
            <strong>S/ {totalPrice.toFixed(2)}</strong>
          </li>
          <li>
            <span>IGV </span>
            <strong>S/ {totalIGV.toFixed(2)}</strong>
          </li>
          <li>
            <span>Total a pagar</span>
            <strong>S/ {(totalPrice + totalIGV).toFixed(2)}</strong>
          </li>
        </ul>
        <MainButton>Pagar</MainButton>
      </div>
    </div>
  );
}
