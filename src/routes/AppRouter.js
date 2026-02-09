import React from "react";
import { Route, Routes } from "react-router";
import AdminOrderPage from "../page/admin/AdminOrderPage/AdminOrderPage";
import AdminProduct from "../page/admin/AdminProductPage/AdminProductPage";
import CartPage from "../page/customer/CartPage/CartPage";
import Login from "../page/common/LoginPage/LoginPage";
import MyPage from "../page/customer/MyPage/MyPage";
import OrderCompletePage from "../page/customer/OrderCompletePage/OrderCompletePage";
import PaymentPage from "../page/customer/PaymentPage/PaymentPage";
import ProductAll from "../page/common/LandingPage/LandingPage";
import ProductDetail from "../page/customer/ProductDetailPage/ProductDetailPage";
import RegisterPage from "../page/common/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductAll />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route element={<PrivateRoute permissionLevel="customer" />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/success" element={<OrderCompletePage />} />
        <Route path="/account/purchase" element={<MyPage />} />
      </Route>
      <Route element={<PrivateRoute permissionLevel="admin" />}>
        <Route path="/admin/product" element={<AdminProduct />} />
        <Route path="/admin/order" element={<AdminOrderPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
