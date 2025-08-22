import { useLocation } from "react-router";
import { Logo, ShopingCarIcon } from "@/assets/svg";
import { MainMenu } from "../main-menu/MainMenu";
import { Container } from "../container/Container";
import { config } from "@/config";
import "./header.scss";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname.slice(1, -1);

  return (
    <header className={currentPath ? `h-${currentPath}` : "h-home"}>
      <Container>
        <div className="shopping-cart" id="shopping-cart">
          <ShopingCarIcon alt="icono shopping cart" /> <span>0</span>
        </div>
        <a href={config.base}>
          <Logo className="logo" />
        </a>
        <MainMenu currentPath={currentPath} />
      </Container>
    </header>
  );
}
