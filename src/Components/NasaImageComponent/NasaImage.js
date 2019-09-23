import React from "react";
import "../../App.css";

const NasaImage = (props) => {
    return (
        <div className="img-container">
            <img className="nasa-img" src={props.spaceImg} alt="nasa render" />
        </div>
    )
};

export default NasaImage;