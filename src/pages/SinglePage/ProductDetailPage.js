import React, { useEffect, useState } from "react";
import "./productdetails.css";

import { Link, useParams } from "react-router-dom";
import { addToCartAsync, getSingleData } from "../../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishListData } from "../../redux/WishlistSlice";

const ProductDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getSingleData(id));
  }, []);

  return (
    <div className="single__page__wrapper">
      {/* single card section */}
      <div className="single__page__header__section">
        <h1>Product Detail</h1>
      </div>

      <div className="single__card__content">
        <div className="single__container__left-section">
          <img
            className="single__image__style"
            src={allProducts?.image}
            alt="food"
          />
        </div>
        <div className="single__container__right-section">
          <div className="single__heading__wrapper">
            <h2 className="single__heading-style">{allProducts?.name}</h2>
            <Link href="#pricing">
              <div style={{ position: "relative" }}>
                <i
                  onClick={() => dispatch(addToWishListData(allProducts))}
                  class="fa-regular fa-heart"
                  style={{ color: "white", fontSize: "30px" }}
                ></i>
              </div>
            </Link>
          </div>

          <p className="single__para-style">{allProducts?.discription}</p>

          <div style={{ display: "flex" }}>
            <h6
              class="line-through"
              style={{
                marginTop: "6px",
                marginRight: "17px",
                textDecoration: " line-through;",
              }}
            >
              {allProducts?.price}
            </h6>
            <h4 style={{ marginTop: "6px", color: "orangered" }}>
              {allProducts?.price}
            </h4>
          </div>

          <p className="single__para-style">Warenty :{allProducts?.warenty}</p>

          <div
            className="addtocart__wishlist__button-style"
            style={{ display: "flex" }}
          >
            <Link
              className="w-100"
              to={"/cart"}
              style={{ textDecoration: "none" }}
              onClick={() => {
                dispatch(addToCartAsync(allProducts));
              }}
            >
              <button className="single-page__button__style__wrapper">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;


