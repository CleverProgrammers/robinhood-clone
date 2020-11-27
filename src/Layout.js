import React from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

function Layout() {
  return (
    <div className="header">
      <h1> Logo </h1>
      <div clasName="header__search">
        <div className="header__searchContainer">
          <SearchOutlined />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/">PortFolio</a>
        <a href="/">Cash</a>
        <a href="/">Messages</a>
        <a href="/">Account</a>
      </div>
    </div>
  );
}

export default Layout;
