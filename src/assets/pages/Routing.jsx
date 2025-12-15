import React from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import LandingPages from './Landing/LandingPages';
import SignIn from './Auth/SignIn';
import Order from './Order/Order';
import Cart from './Cart/Cart';
import Payment from './Payment/Payment'
import Results from './Results/Results';
import ProductDetail from './ProductDetail/ProductDetail';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:ProductId" element={<ProductDetail />} />
        <Route path="/category/:categoryname" element={<Results />} />
      </Routes>
    </Router>
  );
}  

export default Routing
