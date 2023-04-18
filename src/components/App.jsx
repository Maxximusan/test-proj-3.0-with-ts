import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../pages/HomePage/Home"));
const UsersPage = lazy(() => import("../pages/UsersPage/Users"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<UsersPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
