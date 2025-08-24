import { MainSlider } from "./components/main-slider/MainSlider";
import { PromoGrid } from "./components/promo-grid/PromoGrid";
import "./home-page.scss";

export function HomePage() {
  return (
    <div>
      <MainSlider></MainSlider>
      <PromoGrid></PromoGrid>
    </div>
  );
}
