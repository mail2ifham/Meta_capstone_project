import React from "react";

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
        <button>Reserve a Table</button>
      </div>
      <img src="/assets/hero_image.jpg" alt="Hero food" />
    </section>
  );
}

export default Hero;
