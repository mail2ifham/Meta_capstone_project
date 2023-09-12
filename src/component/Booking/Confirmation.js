import React from "react";
import "./Booking.css";
import { FaSquareCheck } from "react-icons/fa6";

function Confirmation() {
  return (
    <section>
      <div className="confirmation-container">
        <FaSquareCheck className="confirm-icon" size="100px" />
        <h2>Your reservation has been confirmed.</h2>
        <p>You will notify via email with all the details. enjoy your food.</p>
      </div>
    </section>
  );
}

export default Confirmation;
