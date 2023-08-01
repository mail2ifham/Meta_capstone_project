import React from "react";
import "../App";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <img src="/assets/restaurant.jpg" alt="restaurent image" />
        <div className="footer-nav">
          <section>
            <h3>Doormat Navigation</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Reservations</a>
              </li>
              <li>
                <a href="#">Order Online</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </section>
          <section>
            <h3>Contact</h3>
            <p>Address</p>
            <p>Phone number</p>
            <p>Email</p>
          </section>
          <section>
            <h3>Social Media Links</h3>
            <p>facebook</p>
            <p>tiktok</p>
            <p>twitter</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
