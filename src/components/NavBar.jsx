import Headroom from "react-headroom";
import { DataContext } from './DataProvider';
import { Link, NavLink } from "react-router-dom";
import React, { useState, useContext } from 'react'

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";

import logo from "../assets/icons/logo.svg";
import cartIcon from "../assets/icons/cart.svg";
import searchIcon from "../assets/icons/search.svg";
import logoDark from "../assets/icons/logo-black.svg";

import instagram from "src/assets/icons/instagram.svg";
import facebook from "src/assets/icons/facebook.svg";
import twitter from "src/assets/icons/twitter.svg";
import pintrest from "src/assets/icons/pintrest.svg";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const [menu, setMenu] = useState(false)
  const value = useContext(DataContext)
  const [cart] = value.cart


  return (
    <>
      <div className="light-navbar">
      <Headroom>
    <div name="home"className={nav ? "navbar navbar-bg" : "navbar"}>
      <Link to="/">{!nav ? (<img src={logo} alt="logo" />) : (<img src={logoDark} alt="logo" className="logo-dark" />)}</Link>

      <ul className="nav-menu">
        <NavLink to="/" smooth={true} duration={500}><li>Home</li></NavLink>
        <NavLink to="/shop" smooth={true} duration={500}><li>Shop</li></NavLink>
        <NavLink to="/blog" smooth={true} duration={500}><li>Blog</li></NavLink>
        <NavLink to="/about" smooth={true} duration={500}><li>About</li></NavLink>
        <NavLink to="/contact" smooth={true} duration={500}><li>Contact</li></NavLink>
      </ul>
      <div className="nav-icons">
            <form className="search">
                <Link to="/shop"><input type="text" className="search-input" /></Link>
                <img src={searchIcon} alt="search product" className="search-icon" />
            </form>
            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/shop/cart"><img src={cartIcon} alt="cart for product" /></Link>
            </div>
      </div>

      <div className="hamburger" style={ {cursor: "Pointer"} } onClick={handleNav}>
        {!nav ? (<HiOutlineMenuAlt4 size={30}  className="icon open-menu" />) : (<VscChromeClose size={30} style={{ color: "#000" }} className="icon close-menu" />)}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <NavLink to="/" smooth={true} duration={500} onClick={handleNav}><li>Home</li></NavLink>
          <NavLink to="/shop" smooth={true} duration={500} onClick={handleNav}><li>Shop</li></NavLink>
          <NavLink to="/blog" smooth={true} duration={500} onClick={handleNav}><li>Blog</li></NavLink>
          <NavLink to="/about" smooth={true} duration={500} onClick={handleNav}><li>About</li></NavLink>
          <NavLink to="/contact" smooth={true} duration={500} onClick={handleNav}><li>Contact</li></NavLink>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <Link to="/shop"><div role='input'><input type="text" placeholder="Search" /></div></Link>
            <Link to="/shop/cart" role="cart">
                <div className="cart-icon">
                    <span>{cart.length}</span>
                    <img src={cartIcon} alt="cart for product" />
                </div>
            </Link>
          </div>

          <div className="social-icons">
            <Link to="https://www.linkedin.com/ohanikizito"><img src={pintrest} alt="linkedin" title="linkedin" className="icon" /></Link>
            <Link to="https://www.instagram.com/kizitothe_programmer"><img src={instagram} alt="instagram" title="instagram" className="icon" /></Link>
            <Link to="https://www.facebook.com/kizimanley"><img src={facebook} alt="facebook" title="facebook"  className="icon" /></Link>
            <Link to="https://www.twitter.com/Ohani_Kizito"><img src={twitter} alt="twitter" title="twitter" className="icon" /></Link>
          </div>
        </div>
      </div>
    </div>
    </Headroom>
      </div>
    </>
  );
}

export default NavBar;
