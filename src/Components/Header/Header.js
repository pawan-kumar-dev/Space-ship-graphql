import React from "react";
import logo from "../../assets/logo.png";
import Toggler from "../Toggler/Toggler";
import "./Header.css";
const Header = () => {
     return (
          <div className="header">
               <a href="/">
                    <img src={logo} alt="logo" />
               </a>
               <div>
                    <p style={{ marginRight: "15px" }}>
                         <strong>Toggle Dark Mode</strong>
                    </p>
                    <Toggler />
               </div>
          </div>
     );
};
export default Header;
