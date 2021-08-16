import "./App.css";
import Header from "./Header";
import GlobeStats from "./GlobeStats"
import Menu from "./Menu";
import React, { useState } from "react";
import aliveCorona from "./alive-corona.png";
import deadCorona from "./dead-corona.png";
import Graphs from "./Graphs";
import News from "./News";

export default function App() {
  const [active, setActive] = useState(false);
  const [carouselPosition, setCarouselPosition] = useState("0%");

 
  const activeHandler = () => {
    setActive(!active);
  };

  const inactiveHandler = () => {
    if (active === true) {
      setActive(false);
    }
  };

  const changePicHandler = () => {
    if (active === true) {
      return aliveCorona;
    } else {
      return deadCorona;
    }
  };



  const buttonDisplayHandler = () => {
    if (active === true) {
      return "block";
    } else {
      return "none";
    }
  };

  const growElementHandler = (e) => {
    if (active === true) {
      return "scale(1.2)";
    } else {
      return "scale(1)";
    }
  };

  const carouselPositionHandler = (value) => {
    setCarouselPosition(value);
  }



  return (
    <>
      <div id="container" onClick={inactiveHandler}></div>
        <Header />
        <Menu
          activeHandler={activeHandler}
          growElementHandler={growElementHandler}
          changePic={changePicHandler}
          buttonDisplayHandler={buttonDisplayHandler}
          carouselPositionHandler={carouselPositionHandler}
        />
        <div style={{right:carouselPosition}} id="statCarousel">
        <GlobeStats /> 
        <News /> 
        <Graphs />
        </div>
    </>
  );
}
