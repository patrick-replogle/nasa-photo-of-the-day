import React, { useState, useEffect } from "react";
import "./App.css";
import { getNasaData } from "./Nasa-api.js";
import Nav from "./Components/NavComponents/Nav.js";
import Logo from "./Components/NavComponents/Logo.js";
import AboutComponent from "./Components/AboutComponents/AboutComponent.js"
import DateComponent from "./Components/DateComponents/DateComponent.js";
import Banner from "./Components/BannerComponent/Banner.js"
import banner from "./Img/banner.jpg"


function App() {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear(); 
  today = yyyy + '-' + mm + '-' + dd;

  const [spaceImg, setSpaceImg] = useState();
  const [date, setDate] = useState(today)

  // useEffect(() => {
  //   getNasaData(date, setSpaceImg)
  // }, [date]);


  return (
    <div className="container">
      <div className="App">
        <div className="header">
            <Logo />
            <Nav />
        </div>
        <Banner />
        <div>
          <AboutComponent />
        </div>
        <div>
          <DateComponent date={date} setDate={setDate}/>
        </div>
        <div className="img-container">
          <img className="nasa-img" src={spaceImg} alt="nasa render" />
        </div>
      </div>
    </div>
  );
}

export default App;
