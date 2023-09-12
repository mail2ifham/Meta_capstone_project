import React from "react";
import "./Footer.css"
import "../../App";
import {
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLocationPin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import logo from "../../assets/logo-white.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-img">
          <img src={logo} alt="restaurant" />
        </div>
        <div className="footer-nav">
          <section>
            <h3>Site Navigation</h3>
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="menu">Menu</a>
              </li>
              <li>
                <a href="reservations">Reservations</a>
              </li>
              <li>
                <a href="Order_Online">Order Online</a>
              </li>
              <li>
                <a href="Login">Login</a>
              </li>
            </ul>
          </section>
          <section className="no-wrap">
            <h3>Contact</h3>
            <address>
              <span>
                <span>
                  <FaLocationPin />
                </span>
                234 West Drive, Chicago, IL, 60603.
              </span>
              <br />
              <span>
                <span>
                  <FaPhone />
                </span>
                (312) 484-7638
              </span>
              <br />
              <span>
                <span>
                  <FaEnvelope />
                </span>
                customer@littlelemon.com
              </span>
            </address>
          </section>
          <section className="social-media-container">
            <h3>Contact with us</h3>
            <div className="social-media">
              <FaFacebook className="icons" />
              <FaTiktok className="icons" />
              <FaTwitter className="icons" />
              <FaYoutube className="icons" />
              <FaInstagram className="icons" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
