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
  useEffect(() => {
    async function fetchGlobalData() {
      const request = await Axios.get(
        "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
      );

      setCovidData(request.data);
      return request;
    }

    function fetchNewsInfo() {
     
      var options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q:'COVID-19', lang: 'en', country: 'US'},
        headers: {
          'x-rapidapi-key': '20cc5a8dc0msh36a172f0c13ba0ap10be23jsn17505f9c312a',
          'x-rapidapi-host': 'google-news.p.rapidapi.com'
        }
      };
       
      const request = Axios.request(options).then(function (response) {
        console.log(response.data);
        setCovidNews(response.data)
      }).catch(error => {
        console.error(error);
      });

      return request;
    }

    fetchNewsInfo()
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
