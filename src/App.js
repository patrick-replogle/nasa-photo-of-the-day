import React, { useState, useEffect } from "react";
import "./App.css";
import { getNasaData } from "./Nasa-api.js";
import axios from "axios";
import Nav from "./Components/NavComponents/Nav.js";
import Logo from "./Components/NavComponents/Logo.js";
import AboutComponent from "./Components/AboutComponents/AboutComponent.js"
import DateComponent from "./Components/DateComponents/DateComponent.js";


function App() {

  const [spaceImg, setSpaceImg] = useState()

  // useEffect(() => {
  //   getNasaData(setSpaceImg)
  // }, [])


  return (
    <div className="container">
      <div className="App">
        <div className="header">
          <div>
            <Logo />
          </div>
          <div>
            <Nav />
          </div>
        </div>
        <div>
          <AboutComponent />
        </div>
        <div>
          <DateComponent />
        </div>
        <div className="img-container">
          <img className="nasa-img" src={spaceImg} alt="nasa photo" />
        </div>
      </div>
    </div>
  );
}

export default App;
