import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { useProductStore } from "../store/product.store";
import { products as productsData } from "@/data/products";
import { categories } from "@/data/categories";

export function useProduct() {
  const { category: categoryID } = useParams();
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  const searchValue = useProductStore((state) => state.searchValue);

  useEffect(() => {
    setProducts(
      productsData.filter((product) => product.category === categoryID)
    );
  }, [categoryID, setProducts]);

  const currentCategory = categories.find(
    (category) => category.id === categoryID
  );

  const filteredList = useMemo(
    () =>
      products.filter(
        (product) =>
          product.name.toLowerCase().trim().includes(searchValue) ||
          product.category.toLowerCase().trim().includes(searchValue)
      ),
    [products, searchValue]
  );

  return { products: filteredList, currentCategory };
}
