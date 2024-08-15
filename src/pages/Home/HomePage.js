import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/image/img1.jpg";
import img2 from "../../assets/image/img2.jpg";
import img3 from "../../assets/image/img3.jpg";
import img4 from "../../assets/image/img4.jpg";
import brand1 from "../../assets/image/brand-01.png";
import brand2 from "../../assets/image/brand-02.png";
import brand3 from "../../assets/image/brand-03.png";
import brand4 from "../../assets/image/brand-04.png";
import brand5 from "../../assets/image/brand-05.png";
import brand6 from "../../assets/image/brand-06.png";
import brand7 from "../../assets/image/brand-07.png";
import brand8 from "../../assets/image/brand-08.png";
import mainBanner from "../../assets/image/main-banner-1.jpg";
import catbanner1 from "../../assets/image/catbanner-01.jpg";
import catbanner2 from "../../assets/image/catbanner-02.jpg";
import catbanner3 from "../../assets/image/catbanner-03.jpg";
import catbanner4 from "../../assets/image/catbanner-04.jpg";

import famous1 from "../../assets/image/famous-1.webp";
import famous2 from "../../assets/image/famous-2.webp";
import famous3 from "../../assets/image/famous-3.webp";
import famous4 from "../../assets/image/famous-4.webp";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/CartSlice";
import { Link } from "react-router-dom";

import { services } from "../../utils/data";
import Marquee from "react-fast-marquee";
const HomePage = () => {
  //create an object for useDispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //apicalling
  const { allProducts, loading } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  //useffect
  // console.log("product", allProducts);

  const singleData = (id) => {
    navigate(`detail/${id}`);
  };
  return (
    <div className="home__wrapper">
      {/* carousel */}

      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              style={{ height: "80vh" }}
              className="d-block w-100 carousel-image__wrapper"
              src={img3}
              alt="First slide"
            />
            {/* caption */}
            <Carousel.Caption>
              <h1 className="banner__header__style text-uppercase">
                Best Collection for <br /> Electronics{" "}
              </h1>
              <Button
                variant="dark"
                onClick={() => {
                  navigate("/product");
                }}
                class="button__Style"
              >
                Shop Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
      </div>

      <div className="home-wrapper-1 container mt-5 mb-5 py-5 col-lg-12">
        <div className="row">
          <div className="col-lg-6 col-md-12 ">
            <div className="main-banner position-relative ">
              <img
                src={mainBanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={catbanner1}
                  className="img-fluid image__style__wrapper rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={catbanner2}
                  className="img-fluid image__style__wrapper rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={catbanner3}
                  className="img-fluid image__style__wrapper rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={catbanner4}
                  className="img-fluid image__style__wrapper rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services */}

      <div style={{ backgroundColor: "#f5f5f7" }}>
        <div className="home-wrapper-2 py-5 mt-3 mb-3 container">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {services?.map((i, j) => {
                  return (
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* search */}

        {/*  */}
        {/* product */}

        <div className="container product__Wrapper">
          <h1 className="mt-5">Best Deals</h1>
          <div className="product__container">
            {/* card 1 */}
            {allProducts?.length > 0
              ? allProducts.slice(0, 5)?.map((data) => (
                  <div
                    className="card__styles"
                    id="t1"
                    accordion
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
              : "No data available"}
          </div>
        </div>

        {/* feature products */}

        <div className="famous-wrapper py-5 home-wrapper-2 mt-5 mb-5 container">
          <h1 className="mt-5 mb-4">Featured Collection</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="famous-card  position-relative">
                <img src={famous1} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series</h6>
                  <p>From $399 or 16/mo for 24 mo.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="famous-card  position-relative">
                <img src={famous2} className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits brightness</h6>
                  <p className="text-dark">27 inch 5k </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="famous-card  position-relative">
                <img src={famous3} alt="famous" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphones</h5>
                  <h6 className="text-dark">Smart Phone 13pro</h6>
                  <p className="text-dark">
                    Now in green From $999 or $14 62/mo for 24 note
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="famous-card  position-relative">
                <img src={famous4} alt="famous" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room Filling Sound</h6>
                  <p className="text-dark">
                    From $699 or $99 month . for 12 month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee-wrapper home-wrapper-2 py-5 container mb-5 mt-5">
          <div className="row" style={{ boxShadow: " 0 0 10px #0000001a" }}>
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand5} alt="" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
