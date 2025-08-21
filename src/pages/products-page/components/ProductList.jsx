import { useState } from "react";
import { ProductCard } from "./product-card/ProductCard";

export function ProductList() {
  const [products, _setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className="producto-list">
      {products.map((product) => (
        <ProductCard key={product} />
      ))}
    </div>
  );
}
