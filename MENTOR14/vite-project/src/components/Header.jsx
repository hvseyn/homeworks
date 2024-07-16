import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../components/CSS/Header.css"

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <NavLink>
            <h1>
              <img src="https://doggystickers.vercel.app/icon.svg" alt="logo" />
              <span> Doggy Stickers</span>
            </h1>
          </NavLink>
          <NavLink to="cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
