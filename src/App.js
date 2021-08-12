import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import React, { useState, useEffect } from "react";
import aliveCorona from "./alive-corona.png";
import deadCorona from "./dead-corona.png";

export default function App() {
  const [active, setActive] = useState(false);

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

  return (
    <>
      <div id="container" onClick={inactiveHandler}>
        <Header />
        <Menu
          activeHandler={activeHandler}
          growElementHandler={growElementHandler}
          changePic={changePicHandler}
          buttonDisplayHandler={buttonDisplayHandler}
        />
      </div>
    </>
  );
}
