import React from "react";
import "./wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/WishlistSlice";
import { addToCartAsync } from "../../redux/CartSlice";
const WishList = () => {
  const dispatch = useDispatch();
  const WishListArray = useSelector((state) => state?.wishList.allProducts);
  console.log("ss", WishListArray);

  //remove from wishlist
  const handleRemoveItem = (ids) => {
    dispatch(removeFromWishlist(ids));
  };

  const handleSubmit = (i, ids) => {
    handleRemoveItem(ids);
    dispatch(addToCartAsync(i));
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
              {WishListArray.length > 0 ? (
                WishListArray.map((data, index) => (
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
                          handleRemoveItem(data.id);
                        }}
                        class="fa-solid fa-trash"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </td>

                    <td className="px-6 py-4">
                      <i
                        onClick={() => {
                          handleSubmit(data, data?.id);
                        }}
                        class="fa-solid fa-cart-shopping"
                        style={{ fontSize: "13px", cursor: "pointer" }}
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
    </div>
  );
};

export default WishList;
