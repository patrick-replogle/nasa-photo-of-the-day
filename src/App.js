import React, { useState, useEffect } from "react";
import "./App.css";
import { getNasaData } from "./Nasa-api.js";
import Nav from "./Components/NavComponents/Nav.js";
import Logo from "./Components/NavComponents/Logo.js";
import AboutComponent from "./Components/AboutComponents/AboutComponent.js"
import DateComponent from "./Components/DateComponents/DateComponent.js";
import Banner from "./Components/BannerComponent/Banner.js"
import NasaImage from "./Components/NasaImageComponent/NasaImage.js"

function App() {

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear(); 
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
        <AboutComponent />
        <DateComponent date={date} setDate={setDate}/>
        <NasaImage spaceImg={spaceImg}/>
      </div>
    </div>
  );
}

export default App;
