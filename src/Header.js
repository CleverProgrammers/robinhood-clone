import React from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import "./Header.css";
import Logo from './stocki.svg'
import Signup from './signup.js'

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} width={100}/>
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchOutlined />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Portfolio</a>
        <a href="/market.html">Market</a>
        <a href="/bank.html">Bank</a>
        <a href="/">Sign Up</a>
      </div>
    </div>
  );
}

export default Header;
