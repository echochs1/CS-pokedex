import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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

  // return (
  //       <ul>
  //         <li><a href="" className='navLink'>Home</a></li>
  //         <li><a href="/about" className='navLink'>About</a></li>
  //         <li><a href="" className='navLink'>Search</a></li>
  //         <li><a href="" className='navLink'>Log in</a></li>
  //         <li><a href="" className='navLink'>Sign up</a></li>
  //       </ul>
  // )
}

export default Navbar;