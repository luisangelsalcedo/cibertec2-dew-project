import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "@/layout/MainLayout";
import {
  AboutUsPage,
  ContactPage,
  HomePage,
  ProductsPage,
  TrackingPage,
} from "@/pages";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="productos" element={<ProductsPage />} />
          <Route path="nosotros" element={<AboutUsPage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="contactenos" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<div>Pagina no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}
