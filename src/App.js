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
      const request1 = await Axios.get(
        "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
      ).then(response => {
        setCovidData(response.data);
      })

     

      var options2 = {
        method: "GET",
        url: "https://free-news.p.rapidapi.com/v1/search",
        params: { q: "COVID-19", lang: "en", country: "US" },
        headers: {
          "x-rapidapi-key":
            "20cc5a8dc0msh36a172f0c13ba0ap10be23jsn17505f9c312a",
          "x-rapidapi-host": "google-news.p.rapidapi.com",
        },
      };
      const request2 = await Axios.request(options2)
        .then(function (response) {
          setCovidNews(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

        var options3 = {
          method: 'GET',
          url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/0',
          headers: {
            'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
            'x-rapidapi-key': 'ac32115283msh882c33e41c22ec5p1ef67ejsn8ed88a89107b'
          }
        };
        
        const request3 = Axios.request(options3).then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.error(error);
        });

       
        


      return (request1 + request2 + request3);
    }

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
