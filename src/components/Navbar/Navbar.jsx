import React, { useContext, useState } from "react"; 
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Company Logo" className="navbar-logo" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            onClick={() => setActiveMenu("Home")}
            className={activeMenu === "Home" ? "active" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setActiveMenu("Menu")}
            className={activeMenu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setActiveMenu("Mobile App")}
            className={activeMenu === "Mobile App" ? "active" : ""}
          >
            Mobile App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setActiveMenu("Contact")}
            className={activeMenu === "Contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="navbar-search-icon"
        />
        <div className="navbar-basket">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getTotalCartAmount() ? "dot" : ""}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
