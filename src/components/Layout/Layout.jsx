import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../Container/Container";
import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainBox } from "../Container/Container.styled";

export const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <Header />
          <MainBox>
            <Outlet />
          </MainBox>
          <Footer />
        </Container>
      </Suspense>
    </>
  );
};
