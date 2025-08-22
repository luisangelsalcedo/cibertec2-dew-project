import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "@/layout/MainLayout";
import {
  AboutUsPage,
  ContactPage,
  HomePage,
  ProductsPage,
  TrackingPage,
  WorkWithUs,
} from "@/pages";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="productos/:category" element={<ProductsPage />} />
          <Route path="nosotros" element={<AboutUsPage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="contactenos" element={<ContactPage />} />
          <Route path="trabaja-con-nosotros" element={<WorkWithUs />} />
        </Route>
        <Route path="*" element={<div>Pagina no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}
