import React, { useState } from 'react'
import {useRef} from 'react'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.svg'; 
import { Link } from 'react-router-dom';

function Nav() {

  const showRef = useRef(null);
  const [useShow, setUseShow] = useState(true); 

  function handleMenuClick(){
    setUseShow(!showRef.current.classList.toggle('dropDownMenu-show'));
  }
  function handleCloseMenu() {
    handleMenuClick();
  }
  return (
    <nav className='Nav'>
    <div className="nav-container">
    <Link to="/" ><img src={logo} alt="Little Lemon logo" /></Link>
      <ul>
          <li><Link  to="/" >Home</Link></li>
          <li><Link to="underConstruction" >About</Link></li>
          <li><Link to="underConstruction" >Menu</Link></li>
          <li><Link to="reservations" >Reservations</Link></li>
          <li><Link to="underConstruction" >Order Online</Link></li>
          <li><Link to="underConstruction" >Login</Link></li>
      </ul>
      <div className="toggle-btn" onClick={handleMenuClick}>
          {useShow?<FaBars /> : <FaTimes />}
      </div>
    </div>
    <div ref={showRef} className='dropDownMenu'>
      <ul className='animation' onClick={handleCloseMenu}>
            <li ><Link to="/" >Home</Link></li>
            <li ><Link to="underConstruction" >About</Link></li>
            <li ><Link to="underConstruction" >Menu</Link></li>
            <li ><Link to="reservations" >Reservations</Link></li>
            <li ><Link to="underConstruction" >Order Online</Link></li>
            <li ><Link to="underConstruction" >Login</Link></li>
        </ul>
    </div>
    </nav>
  )
}

export default Nav