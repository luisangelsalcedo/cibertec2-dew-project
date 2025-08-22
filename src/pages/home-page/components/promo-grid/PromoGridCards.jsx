
// import "./product-card.scss";

export function PromoGridCards({ icon, altText }) {
    return (
        <a href={icon} data-fancybox="promos">
          <img src={icon} alt={altText} />
        </a>
      );
}