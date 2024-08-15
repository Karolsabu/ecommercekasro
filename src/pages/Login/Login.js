import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/image/login.jpg";

const Login = () => {
  return (
    <div className="login__wrapper">
      <div className="login__container">
        <div className="login_left_section ">
          <img id="t6" className="login__image__Style" src={login}></img>
        </div>

        <div className="login_right_section">
          {/* <Form.Label htmlFor="inputPassword5">Email</Form.Label> */}
          <Form.Control
            style={{ width: "94%" }}
            className="login__input__style"
            type="email"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Email address"
            name="email"
          />
          {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}
          <Form.Control
            style={{ width: "94%" }}
            className="login__input__style"
            type="password"
            id="inputPassword5"
            placeholder="Password"
            name="password"
          />
          <Button
            style={{
              marginTop: "23px",
              width: "95%",
              height: "53px",
              backgroundColor: "black",
              border: "none",
            }}
            className="mb-4"
          >
            SIGN IN
          </Button>
          <div className="account__check">
            <hr className="line__style" color="black" />
            <p className="account__style"> Don't have an account? </p>
            <hr className="second__line" />
          </div>

          <Link to={"/signup"} style={{ textDecoration: "none", width: "95%" }}>
            <Button
              style={{ backgroundColor: "black", border: "none" }}
              className="mb-4 signup__button-style"
            >
              SIGN UP
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
