import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Dashboard, Home, Login } from "../pages";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
