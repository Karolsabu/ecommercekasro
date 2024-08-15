import React from "react";
import "./signup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import signup1 from "../../assets/image/signup 1.jpg";
const Signup = () => {
  return (
    <div className="signup__wrapper">
      <div className="signup__container">
        <div className="signup_left_section ">
          <img id="t6" className="signup__image__Style" src={signup1}></img>
        </div>

        <div className="signup_right_section">
          <Form.Control
            name="username"
            style={{ width: "94%" }}
            className="signup__input__style"
            type="text"
            id="inputPassword5"
            placeholder=" username"
          />
          {/* <Form.Label htmlFor="inputPassword5">Email</Form.Label> */}
          <Form.Control
            name="email"
            style={{ width: "94%" }}
            className="signup__input__style"
            type="email"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Email address"
          />
          {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}
          <Form.Control
            name="password"
            style={{ width: "94%" }}
            className="signup__input__style"
            type="password"
            id="inputPassword5"
            placeholder="Password"
          />
          {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}

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
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
