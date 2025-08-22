import { Patron } from "@/assets/svg";
import { hamburguesa } from "@/assets/images";
import "./main-slider.scss";

export function MainSlider() {
  return (
    <div className="banner">
      <img src={hamburguesa} alt="hamburguesa" className="hamburguesa" />
      <div className="patron">
        <Patron alt="patron" className="img-patron" />
      </div>
    </div>
  );
}
