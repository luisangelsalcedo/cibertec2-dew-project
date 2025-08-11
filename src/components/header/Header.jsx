import { Container } from "../container/Container";
import { useLocation } from "react-router";
import { config } from "@/config";
import { Logo, ShopingCarIcon } from "@/assets/svg";
import "./header.scss";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname.slice(1, -1);
  console.log(currentPath);

  return (
    <header className={currentPath ? `h-${currentPath}` : "h-home"}>
      <Container>
        <div className="shopping-cart" id="shopping-cart">
          <ShopingCarIcon alt="icono shopping cart" /> <span>0</span>
        </div>
        <a href={config.base}>
          <Logo className="logo" />
        </a>
        <ul className="menu">
          <li>
            <a
              href={config.base}
              className={currentPath === "" ? "active" : null}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href={`${config.base}productos/`}
              className={currentPath === "productos" ? "active" : null}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href={`${config.base}nosotros/`}
              className={currentPath === "nosotros" ? "active" : null}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href={`${config.base}tracking/`}
              className={currentPath === "tracking" ? "active" : null}
            >
              Sigue tu pedido
            </a>
          </li>
          <li>
            <a
              href={`${config.base}contactenos/`}
              className={currentPath === "contactenos" ? "active" : null}
            >
              Contactenos
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
}
