import React, { useState } from 'react';
import './navbar.css';

import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
const logo = require("../../assets/logo.png") as string;

//BEM -> Block Element Modifier

const Menu = () => (
<>
  <p><a href="#home">Home</a></p>
  <p><a href="#wcu">Explore</a></p>
  <p><a href="#possibility">About CU</a></p>
  <p><a href="#features">Careers</a></p>
  <p><a href="#blog">CU Blogs</a></p>
</>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className='cu__navbar'>
      <div className='cu__navbar-links'>
        <div className='cu__navbar-links_logo'>
          <img src={logo} alt="CU" />
        </div>
        <div className='cu__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='cu__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='cu__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='cu__navbar-menu_container scale-up-center'>
            <div className='cu__navbar-menu_container-links'>
              <Menu/>
              <div className='cu__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar