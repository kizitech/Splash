import Headroom from "react-headroom";
import { DataContext } from "./DataProvider";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useContext } from "react";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";

import cartIcon from "../assets/icons/cart.svg";
import searchIcon from "../assets/icons/search.svg";
import logoDark from "../assets/icons/logo-black.svg";

import instagram from "/src/assets/icons/instagram.svg";
import facebook from "/src/assets/icons/facebook.svg";
import twitter from "/src/assets/icons/twitter.svg";
import pintrest from "/src/assets/icons/pintrest.svg";

function NavBar({ setSearchQuery }) {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Set the search query when the user types in the search bar
  };

  return (
    <>
      <div className="dark-navbar">
        <Headroom>
          <header
            name="home"
            className={nav ? "navbar-dark navbar-dark-bg" : "navbar-dark"}
          >
            <Link to="/">
              <img src={logoDark} alt="logo" className="logo-dark" />
            </Link>

            <ul className="nav-menu">
              <NavLink to="/" duration={500}>
                <li>Home</li>
              </NavLink>
              <NavLink to="/shop" duration={500}>
                <li>Shop</li>
              </NavLink>
              <NavLink to="/blog" duration={500}>
                <li>Blog</li>
              </NavLink>
              <NavLink to="/about" duration={500}>
                <li>About</li>
              </NavLink>
              <NavLink to="/contact" duration={500}>
                <li>Contact</li>
              </NavLink>
            </ul>
            <div className="nav-icons">
              <div>
                <form className="search">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    onChange={handleSearch}
                  />
                  <button type="button">
                    <img
                      src={searchIcon}
                      alt="search product"
                      className="search-icon"
                    />
                  </button>
                </form>
              </div>
              <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/shop/cart">
                  <img src={cartIcon} alt="cart for product" />
                </Link>
              </div>
            </div>

            <div
              className="hamburger"
              style={{ cursor: "Pointer" }}
              onClick={handleNav}
            >
              {!nav ? (
                <HiOutlineMenuAlt4 size={30} className="icon open-menu" />
              ) : (
                <VscChromeClose
                  size={30}
                  style={{ color: "#000" }}
                  className="icon close-menu"
                />
              )}
            </div>

            <div className={nav ? "mobile-menu active" : "mobile-menu"}>
              <ul className="mobile-nav">
                <NavLink to="/" duration={500} onClick={handleNav}>
                  <li>Home</li>
                </NavLink>
                <NavLink to="/shop" duration={500} onClick={handleNav}>
                  <li>Shop</li>
                </NavLink>
                <NavLink to="/blog" duration={500} onClick={handleNav}>
                  <li>Blog</li>
                </NavLink>
                <NavLink to="/about" duration={500} onClick={handleNav}>
                  <li>About</li>
                </NavLink>
                <NavLink to="/contact" duration={500} onClick={handleNav}>
                  <li>Contact</li>
                </NavLink>
              </ul>
              <div className="mobile-menu-bottom">
                <div className="menu-icons">
                  <div role="input">
                    <input
                      type="text"
                      placeholder="Search"
                      onChange={handleSearch}
                    />
                  </div>
                  <Link to="/shop/cart">
                    <div className="cart-icon">
                      <span>{cart.length}</span>
                      <img src={cartIcon} alt="cart for product" />
                    </div>
                  </Link>
                </div>

                <div className="social-icons">
                  <Link to="https://www.linkedin.com/ohanikizito">
                    <img
                      src={pintrest}
                      alt="linkedin"
                      title="linkedin"
                      className="icon"
                    />
                  </Link>
                  <Link to="https://www.instagram.com/kizitothe_programmer">
                    <img
                      src={instagram}
                      alt="instagram"
                      title="instagram"
                      className="icon"
                    />
                  </Link>
                  <Link to="https://www.facebook.com/kizimanley">
                    <img
                      src={facebook}
                      alt="facebook"
                      title="facebook"
                      className="icon"
                    />
                  </Link>
                  <Link to="https://www.twitter.com/Ohani_Kizito">
                    <img
                      src={twitter}
                      alt="twitter"
                      title="twitter"
                      className="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </Headroom>
      </div>
    </>
  );
}

export default NavBar;
