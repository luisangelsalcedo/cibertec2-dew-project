import { useLocation } from "react-router";
import { Logo } from "@/assets/svg";
import { MainMenu } from "../main-menu/MainMenu";
import { Container } from "../container/Container";
import { config } from "@/config";
import "./header.scss";
import { ShoppingCartButton, useShoppingCart } from "../shopping-cart/";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  const { totalProductCount } = useShoppingCart();

  return (
    <header className={currentPath ? `h-${currentPath}` : "h-home"}>
      <Container>
        <ShoppingCartButton>{totalProductCount}</ShoppingCartButton>

        <a href={config.base}>
          <Logo className="logo" />
        </a>
        <MainMenu currentPath={currentPath} />
      </Container>
    </header>
  );
}
