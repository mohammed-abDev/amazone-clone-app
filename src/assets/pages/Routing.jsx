import React from 'react'
import { useState,useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import LandingPages from './Landing/LandingPages';
import Auth from './Auth/Auth';
import Order from './Order/Order';
import Cart from './Cart/Cart';
import Payment from './Payment/Payment'
import Results from './Results/Results';
import ProductDetail from './ProductDetail/ProductDetail';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const stripePromise = loadStripe(
  "pk_test_51SfaVn8omiXhLvSCF5UGYjvWxiNNNOg7suHb7AS10xb2qj5hv7i5uefeXkQWaoTiqYzES3gITLKfmpW7KByCxkF700aCxZNreH"
);


function Routing() {
    // const [clientSecret, setClientSecret] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must Log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Order"
          element={
            <ProtectedRoute
              msg={"You must Log in to accses your order"}
              redirect={"/Order"}
            >
              <Elements stripe={stripePromise}>
                <Order />
              </Elements>
            </ProtectedRoute>
          }
        />
        {/* <Route path="/order" element={<Order />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:ProductId" element={<ProductDetail />} />
        <Route path="/category/:categoryname" element={<Results />} />
      </Routes>
    </Router>
  );
}  

export default Routing
