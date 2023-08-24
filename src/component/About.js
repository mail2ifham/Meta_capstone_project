import React from "react";
import marioAndAdrian from "../assets/Mario and Adrian A.png"
import chef from "../assets/restaurant chef B.png"

function About() {
  return (
    <section className="About" id="about">
      <div className="about-container">
        <div className="about-text-area">
          <div className="about-title">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
            enim velit mollit.
          </p>
        </div>
        <div className="abut-images">
          <img className="about-img1" src={marioAndAdrian} alt="Mario and Adrian" />
          <img className="about-img2" src={chef} alt="chef" />
        </div>
      </div>
    </section>
  );
}

export default About;
