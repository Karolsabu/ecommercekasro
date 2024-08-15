import React, { useEffect } from "react";
import catbanner4 from "../../assets/image/catbanner-04.jpg";
import { fetchData } from "../../redux/CartSlice";

import Card from "react-bootstrap/Card";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Product = () => {
  //create an object for useDispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //apicalling
  const { allProducts, loading } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  // console.log("product", allProducts);

  const singleData = (id) => {
    navigate(`detail/${id}`);
  };

  return (
    <div className="container All__product__Wrapper">
      <h1 className="mt-5 mb-5 text-center ">All Products</h1>
      <div className="All__product__container">
        {allProducts?.length > 0
          ? allProducts?.map((data) => (
              <div
                className="AllProduct__card__styles"
                id="t1"
                onClick={() => {
                  singleData(data.id);
                }}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    class="w-full"
                    style={{ height: "250px" }}
                    variant="top"
                    src={data?.image}
                  />
                  <Card.Body>
                    <Card.Title>{data?.name}</Card.Title>
                    <Card.Text>
                      {data?.discription?.length >= 40
                        ? data.discription.slice(0, 40) + "..."
                        : data.discription}
                    </Card.Text>

                    <Card.Text>${data?.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Product;
