import React, { Suspense } from "react";

import "./App.css";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/foooter";

// lazyloading
const LazyHome = React.lazy(() => import("./pages/Home/HomePage"));

const LazyLogin = React.lazy(() => import("./pages/Login/Login"));
const LazySignup = React.lazy(() => import("./pages/SignUp/SignUp"));
const LazyProduct = React.lazy(() => import("./pages/Product/Product"));
const LazyContact = React.lazy(() => import("./pages/Contact/Contact"));
const LazyProductDetails = React.lazy(() =>
  import("./pages/SinglePage/ProductDetailPage")
);
const LazyCheckOut = React.lazy(() => import("./pages/Checkout/Checkout"));
const LazyCart = React.lazy(() => import("./pages/Cart/Cart"));
const LazyWishList = React.lazy(() => import("./pages/Wishlist/WishList"));

function App() {
  const login = true;
  return (
    <>
      {login ? <Header /> : ""}
      <Suspense fallback={"loading"}>
        <Routes>
          <Route path="/" element={<LazyHome></LazyHome>}></Route>
          <Route path="/login" element={<LazyLogin></LazyLogin>}></Route>
          <Route path="/signup" element={<LazySignup></LazySignup>}></Route>
          <Route path="/product" element={<LazyProduct></LazyProduct>}></Route>
          <Route path="/contact" element={<LazyContact></LazyContact>}></Route>
          <Route
            path="detail/:id"
            element={<LazyProductDetails></LazyProductDetails>}
          ></Route>
          {/* this is from complete product page */}
          <Route
            path="product/detail/:id"
            element={<LazyProductDetails></LazyProductDetails>}
          ></Route>
          <Route
            path="/checkout"
            element={<LazyCheckOut></LazyCheckOut>}
          ></Route>

          <Route path="/cart" element={<LazyCart></LazyCart>}></Route>
          <Route
            path="/wishlist"
            element={<LazyWishList></LazyWishList>}
          ></Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
