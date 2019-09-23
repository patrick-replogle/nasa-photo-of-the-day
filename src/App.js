import React, { useState } from "react";
import "./App.css";
import { getNasaData } from "./Nasa-api.js";
import Nav from "./Components/NavComponents/Nav.js";
import Logo from "./Components/NavComponents/Logo.js";
import AboutComponent from "./Components/AboutComponents/AboutComponent.js"
import DateComponent from "./Components/DateComponents/DateComponent.js";
import banner from "./Img/banner.jpg"


function App() {

  const [spaceImg, setSpaceImg] = useState([]);
  const [date, setDate] = useState(1)

  // useEffect(() => {
  //   getNasaData(date, setSpaceImg)
  // }, [date])


  return (
    <div className="container">
      <div className="App">
        <div className="header">
            <Logo />
            <Nav />
        </div>
        <div className="banner-container">
          <img className="banner" src={banner} alt="banner"/>
        </div>
        <div>
          <AboutComponent />
        </div>
        <div>
          <DateComponent date={date} setDate={setDate}/>
        </div>
        <div className="img-container">
          {spaceImg.map((image, index) => {
            return <img className="nasa-img" key={index } src={spaceImg} alt={`space image${index}`} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
