import React from "react";
import { MdStar } from "react-icons/md";

function Testimonials() {
  return (
    <section className="Testimonials">
      <div className="testimonials-container">
        <h2>Testimonials</h2>
        <div className="testimonials-card-container">
          <div className="testimonials-card">
            <div className="rating">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <img src="assets/testimonials_img1.jpg" alt="avatar" />
            <h3>Nastiya</h3>
            <p>
              I went to Little Lemon for lunch and was pleasantly surprised by
              the quality of the food. The service was great and the atmosphere
              was cozy. I would definitely recommend this restaurant to anyone
              looking for a nice meal.
            </p>
          </div>
          <div className="testimonials-card">
            <div className="rating"> 
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <img src="assets/testimonials_img2.jpg" alt="avatar" />
            <h3>Peter</h3>
            <p>
              Little Lemon is one of my favorite restaurants in town. The food
              is always fresh and delicious, and the staff is friendly and
              attentive. I highly recommend the lemon chicken!
            </p>
          </div>
          <div className="testimonials-card">
            <div className="rating">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <img src="assets/testimonials_img3.jpg" alt="avatar" />
            <h3>Stephen</h3>
            <p>
              I had dinner at Little Lemon last night and it was amazing! The
              food was delicious and the presentation was beautiful. The staff
              was friendly and helpful, and the atmosphere was perfect for a
              romantic dinner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
