import { config } from "@/config";
import { Link } from "react-router";

export function MainMenu({ currentPath }) {
  const menuItems = [
    { path: "", label: "Inicio" },
    { path: "productos/burguers", label: "Menu" },
    { path: "nosotros", label: "Nosotros" },
    // { path: "tracking", label: "Sigue tu pedido" },
    { path: "contactenos", label: "Contactenos" },
  ];

  return (
    <ul className="menu">
      {menuItems.map(({ path, label }) => (
        <li key={label}>
          <Link
            to={`${config.base}${path}`}
            className={currentPath === path ? "active" : null}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
