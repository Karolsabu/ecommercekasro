import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state?.cart.cartData);
  console.log(cartArray);

  // Calculate total price of items in the cart
  let total =
    cartArray.length !== 0
      ? cartArray.reduce((acc, item) => acc + parseFloat(item.price), 0)
      : 0;

  const handleRemoveData = (data) => {
    dispatch(removeFromCart(data));
  };

  return (
    <div className="container cart__container__Wrapper mt-3">
      <h1 className="text-center cart__heading-style">List of Items</h1>
      <div className="list__item__wrapper">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-light">
              <tr>
                <th scope="col">Product name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cartArray.length > 0 ? (
                cartArray.map((data, index) => (
                  <tr key={index} className="bg-white border-bottom">
                    <td className="px-6 py-4 font-medium">{data.name}</td>
                    <td className="px-6 py-4">{data.price}</td>
                    <td className="px-6 py-4">
                      {data.discription?.length >= 40
                        ? data.discription.slice(0, 40) + "..."
                        : data.discription}
                    </td>
                    <td className="px-6 py-4">
                      <img
                        style={{ height: "100px", width: "100px" }}
                        src={data.image}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">
                      <i
                        onClick={() => {
                          handleRemoveData(data.id);
                        }}
                        class="fa-solid fa-trash"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bottom__section__container">
        <div className="bottom-top__section d-flex  align-items-center">
          <h1>Subtotal</h1>
          <h1>${total}</h1>
        </div>
        <p className="subheading__style">
          Shipping and Taxes Will be calculated at checkout
        </p>
        <div>
          <Link
            to={{
              pathname: "/checkout",
            }}
            style={{ textDecoration: "none", width: "100%" }}
            className="button__wrapper mt-5 mb-5"
          >
            <button className="btn btn-danger button__style">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
