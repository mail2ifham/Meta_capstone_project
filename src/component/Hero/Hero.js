import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero_image.jpg";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section className="Hero">
      <div className="hero-text-area">
        <div className="hero-title">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        
        <Link to="/reservations" ><button>Reserve a Table</button></Link>
      </div>
      <img src={heroImage} alt="Hero food" />
    </section>
  );
}

export default Hero;
