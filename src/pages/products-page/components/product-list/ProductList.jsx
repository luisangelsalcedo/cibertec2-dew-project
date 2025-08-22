import { ProductCard } from "../product-card/ProductCard";

export function ProductList({ data }) {
  return (
    <div className="producto-list">
      {!data.length
        ? "no hay productos"
        : data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
    </div>
  );
}
