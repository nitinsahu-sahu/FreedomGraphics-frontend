import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Aboutscreen, Cartscreen, Contactscreen, Errorscreen, Homescreen, Productsscreen, SingleProductscreen
} from './screens';
import {
  ChackOut,
  Footercomponent, Headercomponent, Login,
  OrderDetails,
  Orders,
  ProductListPage,
  Profile,
  Signup
} from './components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from './redux/action/product.action';
import { findCategories } from './redux/action/category.action';
import { isUserLoggedIn } from './redux/action/userAuth.action';
import { getCartItems, updateCart } from './redux/action/cart.action';
import { getAddress } from './redux/action/address.action';
import { getOrders } from './redux/action/order.action';


function App() {
  const auth = useSelector(state => state.userAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems())
    }
    dispatch(updateCart());
  }, [auth.authenticate]);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [])
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(findCategories());
    dispatch(getAddress())
    dispatch(getOrders())
  }, [])

  return (
    <BrowserRouter>
      <Headercomponent />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/:slug" element={<ProductListPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/order_details" element={<OrderDetails />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<ChackOut />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contactscreen />} />
        <Route path="/about" element={<Aboutscreen />} />
        <Route path="/cart" element={<Cartscreen />} />
        <Route path="/products" element={<Productsscreen />} />
        <Route path="*" element={<Errorscreen />} />
        <Route path="/:slug/:id" element={<SingleProductscreen />} />
        {/* <Route path="/:slug" element={<ProductListPage />} /> */}
      </Routes>
      <Footercomponent />
    </BrowserRouter>
  )
}


export default App

