import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import hamburger from './images/menu.svg';


export default class Navbar extends React.Component {
  handleClick = () => {
    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
      mainNav.classList.toggle('open');
    }
  };

  render() {
    return (
      <header className="main-head">
      <img src={logo} className="main-logo" alt="logo" />
      <nav id="main-nav" className="main-nav">
        <Link className="nav-links nav-home" to="/">Home</Link>
        <Link className="nav-links nav-menu" to="/menu">Menu</Link>
        <img  className="nav-logo" id="logo" src={logo} alt="logo" />
        <Link className="nav-links nav-about-us" to="/about">About Us</Link>
        <Link className="nav-links nav-contact" to="/contact">Contact</Link>
      </nav>
      <div className="icon" onClick={this.handleClick}>
        <img src={hamburger} id="hamburger-icon" alt="hamburger-icon" />
      </div>
      </header>
    )
  };
}
