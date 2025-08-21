import { Container } from "@/components";
import { ProductsMenu } from "./components/products-menu/ProductsMenu";
import { ProductList } from "./components/ProductList";
import { MainTitle } from "@/components";
import "./products-page.scss";

export function ProductsPage() {
  return (
    <div className="productos-page">
      <Container>
        <ProductsMenu />
        <MainTitle>
          Big <strong>Burgers</strong>
        </MainTitle>
        <ProductList />
      </Container>
    </div>
  );
}
