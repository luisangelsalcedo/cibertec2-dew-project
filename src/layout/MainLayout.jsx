import { Outlet } from "react-router";
import { Footer, Header } from "@/components";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
