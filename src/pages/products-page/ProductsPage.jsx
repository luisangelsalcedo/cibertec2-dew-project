import { Container, MainTitle } from "@/components";
import { ProductsMenu, ProductList } from "./components/";
import { categories } from "@/data/categories";
import { useProduct } from "./hook/useProduct";
import { ProductSearch } from "./components/product-search/ProductSearch";
import "./products-page.scss";

export function ProductsPage() {
  const { products, currentCategory } = useProduct();
  console.log(currentCategory);
  return (
    <div className="productos-page">
      <Container>
        <ProductsMenu current={currentCategory.id} data={categories} />
        <div className="flex">
          <MainTitle>
            <strong>{currentCategory.label}</strong>
          </MainTitle>
          {products.length > 8 && (
            <ProductSearch>{`Buscar ${currentCategory.label}`}</ProductSearch>
          )}
        </div>
        <ProductList data={products} />
      </Container>
    </div>
  );
}
