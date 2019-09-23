import React from "react";
import "../../App.css";
import logo from "../../Img/logo.jpg"

const Logo = () => {
    return(
        <div className="logo-container">
            <img className ="logo" src={logo} alt="logo"/>
            <h3>NASA PICS</h3>
        </div>
    )
}

export default Logo;