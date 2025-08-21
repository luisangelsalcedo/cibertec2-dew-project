import {
  alitas,
  burgers,
  mostros,
  enrrollados,
  salchipapas,
  bebidas,
} from "@/assets/images";
import "./products-menu.scss";

export function ProductsMenu() {
  return (
    <div className="menu-productos">
      <a href="#">
        <img src={alitas} alt="Alitas" />
        <span>Alitas</span>
      </a>
      <a href="#" className="active">
        <img src={burgers} alt="Big burguer's" />
        <span>Big burguer&#39;s</span>
      </a>
      <a href="#">
        <img src={mostros} alt="Mostritos" />
        <span>Mostritos</span>
      </a>
      <a href="#">
        <img src={enrrollados} alt="Enrrollados" />
        <span>Enrrollados</span>
      </a>
      <a href="#">
        <img src={salchipapas} alt="Salchipapas" />
        <span>Salchipapas</span>
      </a>
      <a href="#">
        <img src={bebidas} alt="Bebidas" />
        <span>Bebidas</span>
      </a>
    </div>
  );
}
