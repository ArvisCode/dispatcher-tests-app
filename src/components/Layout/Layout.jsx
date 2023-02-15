import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";
import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <Header />
          <Outlet />
          <Footer />
        </Container>
      </Suspense>
    </>
  );
};
