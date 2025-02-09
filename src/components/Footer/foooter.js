
import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../../assets/image/newsletter.png";
const Footer = () => {
  return (
    <>
      {/* <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="input-group mt-2">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-white mb-4">Contact us</h4>
              <div>
                <address className="text-white fs-6">
                59 hayden street
                  <br />
                  toronto
                  <br />
                  Ontario, Canada
                </address>
                <a
                  href="tel: +91 8304802069"
                  className="mt-3 d-block mb-1  text-white"
                >
                  +41 125487963
                </a>

                <a
                  href="mailto:aswinsudhakaran98@gmail.com "
                  className="mt-4 d-block mb-0 text-white"
                >
                  kasro98@gmail.com
                </a>
                <div className="soacial_icons d-flex align-items-center gap-30 mt-4">
                  <a href="#a">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a href="#a">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a href="#a">
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a href="#a">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  {" "}
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms of Service{" "}
                </Link>
                
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1"> About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1"> Contact</Link>
              </div>
            </div>
            <div className="col-md-2">
              <h4 className="text-white mb-4">Quik Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1"> Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1"> Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <footer className="py-4">
        <div className="container-xxl container-md">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()}: Powered by PixelMart
              </p>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
