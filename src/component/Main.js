import React from "react";
import Hero from '../component/Hero';
import Specials from '../component/Specials';
import Testimonials from '../component/Testimonials';
import About from '../component/About';


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
