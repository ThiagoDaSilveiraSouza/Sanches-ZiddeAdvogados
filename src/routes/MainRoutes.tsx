import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import {
  DashboardConfig,
  Dashboard,
  Error404,
  Home,
  Login,
  DashboardBlog,
} from "../pages";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/blog" element={<DashboardBlog />} />
          <Route path="/dashboard/config" element={<DashboardConfig />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
