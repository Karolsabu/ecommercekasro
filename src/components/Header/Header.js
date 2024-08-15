import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/CartSlice";

const Header = () => {
  //reduxil ulla data kanikkan
  const cartArrayLength = useSelector((state) => state.cart.cartData);
  const wishListArrayLength = useSelector(
    (state) => state.wishList.allProducts
  );
  const { allProducts, loading } = useSelector((state) => state?.cart);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearchChange = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // if (allProducts.length > 0) {
    //   const filteredProducts =
    //     (await allProducts) &&
    //     allProducts?.filter((product) =>
    //       product.name.toLowerCase().includes(term.toLowerCase())z
    //     );
    if (Array.isArray(allProducts) && allProducts.length > 0) {
      const filteredProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchData(filteredProducts);
      setShowSearchResults(term !== ""); // Show results only if search term is not empty
    }
  };

  const handleSearchItemClick = () => {
    setShowSearchResults(false); // Close search results when item is clicked
  };

  
  return (
    <div>
      <div>
        <header className="header-top-strip py-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <p className="text-white mb-0">Free Shipping & Free Returns</p>
              </div>
              <div className="col-6">
                <p className="text-end text-white mb-0">
                  Hotline:
                  <a className="text-white" href="tel:+91 8264954234">
                    +41 125487963
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>
        

        <Navbar className="bgcolor" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">
              {/* <i class="fa-solid fa-cart-flatbed fa-bounce"></i> */}
              <img className="logosize" src={logo}></img>
            </Navbar.Brand>
            <div className="nav__style__wrapper">
              {/* className="me-auto " */}
              <Nav>
                <Link to={"/"} className="nav_style" href="#home">
                  Home
                </Link>
                <Link to={"/product"} className="nav_style" href="#features">
                  Product
                </Link>
                {/* <Nav.Link className="nav_style" href="#pricing">
                  About
                </Nav.Link> */}
                <Link className="nav_style" to={"/contact"} >
                  Contact us
                </Link>
              </Nav>
              <div className="header__input__Wrapper">
                <Form.Control
                  size="md"
                  type="text"
                  placeholder="Search !!"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {showSearchResults && searchData && searchData?.length !== 0 ? (
                  <div
                    className="position-absolute min-vh-30 bg-light shadow-sm z-9 p-4"
                    style={{
                      zIndex: "100",
                      display: "flex",
                      flexDirection: "column",
                      width: "25rem",
                    }}
                  >
                    {searchData.map((item, index) => {
                      console.log(item);
                      //    const productName = item.name.replace(/\s+/g, "-");
                      return (
                        <Link
                          to={`detail/${item.id}`}
                          key={index}
                          className="text-decoration-none text-dark"
                          onClick={handleSearchItemClick} // Close search results on item click
                        >
                          <div className="d-flex w-100 align-items-start py-3">
                            <img
                              style={{ width: "40px", height: "40px" }}
                              src={item?.image}
                              alt=""
                              className="mr-3"
                            />
                            <h1
                              style={{ fontSize: "20px", marginLeft: "20px" }}
                            >
                              {item?.name}
                            </h1>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>

              {/* whishlist */}
              <div>
              <Link to={"/login"}> 
                <i class="fa-regular fa-user"
                
                    style={{ color: "white", fontSize: "20px", padding: "16px", }}
                    ></i>
                
                 </Link>
                <Link to={"/wishlist"}>
                  <div style={{ position: "relative" }}>
                    <p
                      style={{
                        position: "absolute",
                        top: "-13px",
                        right: "-6px",
                        color: "white",
                      }}
                    >
                      {wishListArrayLength?.length}
                    </p>
                    <i
                      class="fa-regular fa-heart"
                      style={{ color: "white", fontSize: "13px" }}
                    ></i>
                  </div>
                </Link>

                {/* cart */}
                <Link to={"/cart"} className="px-4">
                  <div style={{ position: "relative" }}>
                    <p
                      style={{
                        position: "absolute",
                        top: "-13px",
                        right: "-6px",
                        color: "white",
                      }}
                    >
                      {cartArrayLength?.length}
                    </p>
                    <i
                      class="fa-solid fa-cart-shopping"
                      style={{ color: "white", fontSize: "13px" }}
                    ></i>
                  </div>
                </Link>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
