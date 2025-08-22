import { useCallback } from "react";
import { usePopup } from "@/components/popup";
import { ProductCard } from "../product-card/ProductCard";
import { memo } from "react";

export const ProductList = memo(({ data }) => {
  const { openModal } = usePopup();

  const handleClick = useCallback(
    (element) => {
      openModal(element);
    },
    [openModal]
  );

  return (
    <div className="producto-list">
      {!data.length
        ? "no hay productos"
        : data.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              handleClick={handleClick}
            />
          ))}
    </div>
  );
});
