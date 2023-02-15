import { lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useUserCurrentQuery } from "../../redux/authAPI";
import { isUserName } from "../../redux/sliceUser";

import { Layout } from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

const DashboardPage = lazy(() =>
  import("../../pages/DashboardPage/DashboardPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);

export const App = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const { data: auth } = useUserCurrentQuery("", { skip: !token });

  useEffect(() => {
    if (auth === undefined) {
      return;
    }
    dispatch(isUserName(auth.user.name));
  }, [auth, dispatch]);

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
