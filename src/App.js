import "./App.css";
import Header from "./Header";
import GlobeStats from "./GlobeStats";
import Menu from "./Menu";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import aliveCorona from "./alive-corona.png";
import deadCorona from "./dead-corona.png";
import Graphs from "./Graphs";
import News from "./News";

export default function App() {
  const [active, setActive] = useState(false);
  const [carouselPosition, setCarouselPosition] = useState("0%");
  const [covidData, setCovidData] = useState([]);
  const [covidNews, setCovidNews] = useState([]);

  console.log(covidData);
  console.log(covidNews);
  useEffect(() => {
    async function fetchGlobalData() {
      const request = await Axios.get(
        "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
      );

      setCovidData(request.data);
      console.log(fetchGlobalData());
      return request;
    }

    async function fetchNewsInfo() {
      const request = await Axios.get(
        "https://newsapi.org/v2/everything?qInTitle=COVID-19&apiKey=7521ed286755491d9f27093d1f8d22c3"
      );
      setCovidNews(request.data);
      return request;
    }
    console.log(fetchNewsInfo());
    fetchGlobalData();
  }, []);

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

  const displayHandler = () => {
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
  };

  return (
    <>
      <div id="container" onClick={inactiveHandler}></div>
      <Header />
      <Menu
        activeHandler={activeHandler}
        growElementHandler={growElementHandler}
        changePic={changePicHandler}
        buttonDisplayHandler={displayHandler}
        carouselPositionHandler={carouselPositionHandler}
      />
      <div style={{ right: carouselPosition }} id="statCarousel">
        <GlobeStats displayHandler={displayHandler} covidData={covidData} />
        <News covidNews={covidNews} displayHandler={displayHandler} />
        <Graphs displayHandler={displayHandler} />
      </div>
    </>
  );
}
