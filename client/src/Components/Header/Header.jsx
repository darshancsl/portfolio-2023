import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../Assets/Images/logo.png";
import { navBarList } from "../../Utils/navbarlist";

const Header = () => {
  const clickHandler = () => {
    const nav = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger-box");
    nav.classList.toggle("isActive");
    hamburger.classList.toggle("isActive");
  };
  return (
    <header className='header'>
      <div className='container d-flex justify-between align-center'>
        <div className='logo-wrap'>
          <Link to='/'>
            <img src={logo} alt='Logo' />
          </Link>
        </div>
        <nav className='navbar'>
          <ul
            className='list d-flex justify-between'
            aria-labelledby='Navbar-List'
          >
            {navBarList.map(({ name, url }) => {
              return (
                <li key={name} className='item' onClick={clickHandler}>
                  <Link className='link' to={url}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className='hamburger-box' onClick={clickHandler}>
          <div className='hamburger'></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
