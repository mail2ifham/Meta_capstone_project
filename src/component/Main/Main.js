import React from "react";
import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';


function Main() {
  return (
    <main>
      <div className="grid-container">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      </div>
    </main>
    
  );
}

export default Main;
