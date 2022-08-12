import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to='/characters' activeclass='active'>Characters</NavLink>
      <NavLink to='/movies' activeclass='active'>Movies</NavLink>
      <NavLink to='/planets' activeclass='active'>Planets</NavLink>


    </div>
  )
}

export default Navbar
