import { Link } from "react-router";
import { config } from "@/config";
import "./products-menu.scss";

export function ProductsMenu({ data, current }) {
  return (
    <div className="menu-productos">
      {data.map(({ id, label, icon }) => (
        <Link
          to={`${config.base}productos/${id}`}
          key={id}
          className={current === id ? "active" : null}
        >
          <img src={icon} alt={label} />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}
