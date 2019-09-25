import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/NavComponents/Nav.js";
import Logo from "./Components/NavComponents/Logo.js";
import AboutComponent from "./Components/AboutComponents/AboutComponent.js";
import DateComponent from "./Components/DateComponents/DateComponent.js";
import Banner from "./Components/BannerComponent/Banner.js";
import NasaImage from "./Components/NasaImageComponent/NasaImage.js";
import axios from "axios";

function App() {
  //set date variable so it defaults to today's date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  const [spaceImg, setSpaceImg] = useState();
  const [date, setDate] = useState(today);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const nasaImages = await axios.get(
  //         `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
  //       );
  //       console.log(nasaImages);
  //       setSpaceImg(nasaImages.data.hdurl);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   }
  //   fetchData();
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
        <DateComponent date={date} setDate={setDate} />
        <NasaImage spaceImg={spaceImg} />
      </div>
    </div>
  );
}

export default App;
