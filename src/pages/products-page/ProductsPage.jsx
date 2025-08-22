import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, MainTitle } from "@/components";
import { ProductsMenu, ProductList } from "./components/";
import { categories } from "@/data/categories";
import { products as productsData } from "@/data/products";
import "./products-page.scss";

export function ProductsPage() {
  const { category: categoryID } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      productsData.filter((product) => product.category === categoryID)
    );
  }, [categoryID]);

  const currentCategory = categories.find(
    (category) => category.id === categoryID
  );

  return (
    <div className="productos-page">
      <Container>
        <ProductsMenu current={categoryID} data={categories} />
        <MainTitle>
          <strong>{currentCategory.label}</strong>
        </MainTitle>
        <ProductList data={products} />
      </Container>
    </div>
  );
}
