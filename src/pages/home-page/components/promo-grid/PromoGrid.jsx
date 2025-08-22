
import { PromoGridCards } from "./PromoGridCards";
import { promociones } from "@/data/promociones";
import { Container } from "@/components";
import "./promo-grid.scss";

export function PromoGrid() {
    return (
        <div className="container">
          <div className="columns">
            <h2><strong>Promociones</strong> solo por hoy</h2>
            <a className="btn">Ver mas</a>
          </div>
    
          <div className="promos">
            {promociones.map((promo) => (
              <PromoGridCards
                key={promo.id}
                icon={promo.icon}
                altText={promo.label}
              />
            ))}
          </div>
        </div>
      );
}
