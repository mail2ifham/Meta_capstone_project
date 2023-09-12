import React from "react";
import './IntroReservation.css'
import "../Booking/Booking";
import reserveImage from "../../assets/restaurant.jpg";

function IntroReservation() {
  return (
    <section className="Intro-reservation">
      <div className="intro-reservation-container">
        <div className="reservation-header">
          <div className="reservation-header-text">
            <h1>Reserve a table</h1>
            <h2>At Chicago</h2>
            <p></p>
          </div>
            <img src={reserveImage} alt="restaurant" />
        </div>
      </div>
    </section>
  );
}

export default IntroReservation;
