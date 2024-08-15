import React from "react";
import "./checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const Shipping_Estimate=6
  const Tax_Estimate = 5;
  const cartData = useSelector((state) => state?.cart.cartData || []);

  // Calculate total price of items in the cart
  let total =
    cartData.length !== 0
      ? cartData.reduce((acc, item) => acc + parseFloat(item.price), 0)
      : 0;

  return (
    <div className="container mt-3 checkout_wrapper">
      <div className="card bg-white card__style__Wrapper">
        <div className="row g-0">
          <div className="col-lg-7 py-6 px-4">
            <div className="mx-auto max-w-lg checkout__form__wrapper">
              <div className="mb-5">
                <h1 className="text-2xl font-medium text-danger">
                  Checkout
                  <span
                    className="mt-2 d-block bg-teal-600"
                    style={{ width: "96px", border: "3px solid teal" }}
                  ></span>
                </h1>

                <h1 className="text-2md font-sm" style={{ color: "#ff0000ad" }}>
                  Billing Details
                </h1>
              </div>

              <form className="mt-10">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.capler@fang.com"
                    className="form-control"
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label
                    htmlFor="card-number"
                    className="form-label text-gray-500"
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="1234-5678-XXXX-XXXX"
                    className="form-control"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    className="position-absolute bottom-3 end-3 max-h-4"
                  />
                </div>
                <div className="mb-3">
                  <p className="form-label text-gray-500">Expiration date</p>
                  <div className=" checkout__dropwon__Wrapper">
                    <div className="me-3">
                      <select name="month" id="month" className="form-select">
                        <option value="">Month</option>
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="March">March</option>
                      </select>
                    </div>
                    <div className="me-3">
                      <select name="year" id="year" className="form-select">
                        <option value="">Year</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </select>
                    </div>
                    <div className="position-relative">
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        placeholder="Security code"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="card-name" className="form-label">
                    Card name
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Name on the card"
                    className="form-control"
                  />
                </div>
              </form>
              <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                By placing this order you agree to the{" "}
                <a href="#" className="text-teal-400 text-decoration-underline">
                  Terms and Conditions
                </a>
              </p>
              <button
                style={{ width: "100%" }}
                type="submit"
                className="mt-4 btn btn-danger"
              >
                Place Order
              </button>
            </div>
          </div>

          <div className="col-lg-5 py-6 pl-8 pr-4">
            <h2 className="visually-hidden">Order summary</h2>

            <div className="mb-3">
              {cartData.length > 0 ? (
                cartData.map((data, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between mb-3"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        style={{ height: "100px", width: "100px" }}
                        src={data.image}
                        alt=""
                        className="max-h-16"
                      />
                      <div className="ms-3">
                        <p className="text-base fw-bold text-black">
                          {data.name}
                        </p>
                        <p className="text-sm font-medium text-black-50">
                          {data.description?.length >= 40
                            ? data.description.slice(0, 40) + "..."
                            : data.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm fw-bold text-black mt-4">
                      ${data.price}
                    </p>
                  </div>
                ))
              ) : (
                <h1>No data available</h1>
              )}
            </div>
            <hr className="my-5 bg-white bg-opacity-30" />
            <div className="mb-3">
              <p className="d-flex justify-content-between text-lg fw-bold text-black">
                <span>Shipping Estimate:</span>
                <span>
                  {cartData.length > 0
                    ? `${Shipping_Estimate} days`
                    : "no data available"}
                </span>
              </p>

              <p className="d-flex justify-content-between text-lg fw-bold text-black">
                <span>Tax Estimate:</span>
                <span>
                  {cartData.length > 0
                    ? `$${Tax_Estimate}`
                    : "no data available"}
                </span>
              </p>

              <p className="d-flex justify-content-between text-lg fw-bold text-black">
                <span>Total price:</span>
                <span>
                  {cartData.length > 0
                    ? `$${total + Shipping_Estimate + Tax_Estimate}`
                    : "no data available"}
                </span>
              </p>
            </div>
            <div className="text-white mt-5">
              <h3 className="mb-5 text-lg fw-bold text-black">Support</h3>
              <p className="text-sm fw-semibold text-black">
                +01 653 235 211{" "}
                <span className="font-light text-black">(International)</span>
              </p>
              <p className="mt-1 text-sm fw-semibold text-black">
                support@nanohair.com{" "}
                <span className="font-light text-black">(Email)</span>
              </p>
              <p className="mt-2 text-xs fw-medium text-black">
                Call us now for payment related issues
              </p>
            </div>
            <div className="mt-5 d-flex flex-column">
              <span className="text-sm fw-bold text-black">
                Money Back Guarantee
              </span>
              <span className="text-xs fw-medium text-black">
                within 30 days of purchase
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
