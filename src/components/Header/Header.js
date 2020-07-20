import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="appBar">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="primaryHdg">React Router (S.P.A.)</h1>

        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;