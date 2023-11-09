import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ ssid }) => {

  if (!ssid[0]) {
    return (
      <ul>
        <li>
          <Link to='/' className='navLink'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='navLink'>About</Link>
        </li>
  
        <li>
          <Link to='/login' className='navLink'>Log in</Link>
        </li>
        <li>
          <Link to='/signup' className='navLink'>Sign up</Link>
        </li>
      </ul>
    )
  } else {
    return (
      <ul>
        <li>
          <Link to='/' className='navLink'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='navLink'>About</Link>
        </li>
        <li>
          <Link to='/partyBox' className='navLink'>Box</Link>
        </li>
        <li>
          <Link to='/login' className='navLink'>Log out</Link>
        </li>
      </ul>
    )
  }
}

export default Navbar;