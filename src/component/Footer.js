import React from 'react'
import '../App'

function Footer() {
  return (
    <footer className='footer'>
      <img src="/assets/restaurant.jpg" alt="restaurent image" />
<section >
      <h4>Doormat Navigation</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
    </ul>
    </section>
      <section>
        <h4>Contact</h4>
        <p>Adress</p>
        <p>Phone number</p>
        <p>Email</p>
      </section>

      <section>
        <h4>Social Media Links</h4>
        <p>facebook</p>
        <p>tiktok</p>
        <p>twitter</p>
      </section>


    </footer>
  )
}

export default Footer