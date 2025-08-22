import { useParams } from "react-router";
import { Container } from "@/components";
import { ProductsMenu } from "./components/products-menu/ProductsMenu";
import { ProductList } from "./components/ProductList";
import { MainTitle } from "@/components";
import { categories } from "@/data/categories";
import "./products-page.scss";

export function ProductsPage() {
  const { category: categoryID } = useParams();

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
        <ProductList />
      </Container>
    </div>
  );
}
