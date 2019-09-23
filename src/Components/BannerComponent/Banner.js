import React from "react";
import "../../App.css";
import banner from "../../Img/banner.jpg"

const Banner = () => {
    return(
        <div className="banner-container">
            <img className="banner" src={banner} alt="banner"/>
        </div>
    )
};

export default Banner;