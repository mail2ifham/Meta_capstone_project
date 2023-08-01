import React, { useState } from 'react'
import {useRef} from 'react'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

function Nav() {

  const showRef = useRef(null);
  const [useShow, setUseShow] = useState(true); 
  // let show ;

  function handleClick(){
    setUseShow(!showRef.current.classList.toggle('dropDownMenu-show'));

  }
  return (
    <nav className='Nav'>
    <div className="nav-container">
      <img src='/assets/logo.svg' alt="Little Lemon logo" />
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
      </ul>
      <div className="toggle-btn" onClick={handleClick}>
          {useShow?<FaBars /> : <FaTimes />}
      </div>
    </div>
    <div ref={showRef} className='dropDownMenu'>
      <ul className='animation'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </div>

    </nav>

  )
}

export default Nav