import "./product-card.scss";

export function ProductCard() {
  return (
    <a
      className="producto-card"
      href="#bb-cubana"
      data-slug="cubana"
      id="bb-cubana"
    >
      <div className="image">
        <img src="../assets/images/bb-cubana.jpg" alt="cubana" />
      </div>
      <div className="text">
        <h3>
          cubana
          <small>140 gr</small>
        </h3>
        <div className="price">15.00</div>
      </div>
    </a>
  );
}
