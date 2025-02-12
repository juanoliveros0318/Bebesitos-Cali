import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🍼 Baby Store</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/checkout">Carrito 🛒</Link></li>
        <li><Link to="/contact">Contacto 📞</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
