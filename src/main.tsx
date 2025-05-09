import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./components/pages/NotFound.tsx";
import Login from "./components/pages/auth/Login.tsx";
import SignUpPhone from "./components/pages/auth/SignUpPhone.tsx";
import OtpVerify from "./components/pages/auth/OtpVerify.tsx";
import Home from "./components/pages/Home/Home.tsx";
import FavoriteProduct from "./components/pages/Home/FavoriteProduct.tsx";
import AllPopularProduct from "./components/pages/Home/AllPopularProduct.tsx";
import Filter from "./components/pages/Home/Filter.tsx";
import CategoryFilter from "./components/pages/Home/CategoryFilter.tsx";
import Order from "./components/pages/Order/Order.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="/signInPhone" element={<SignUpPhone />} />
        <Route path="/otpVerify" element={<OtpVerify />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favProduct" element={<FavoriteProduct />} />
        <Route path="/AllPopularProduct" element={<AllPopularProduct />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/categoryFilter" element={<CategoryFilter />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
