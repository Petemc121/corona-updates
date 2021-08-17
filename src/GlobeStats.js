import React, { useState } from "react";
import Countries from "./Countries";

export default function GlobeStats({ covidData, displayHandler }) {
  const [country, setCountry] = useState({});
  
  const countryChangeHandler = (e) => {

    if (e.target.value === 'Select a country') {
      return
    }
    
    const infected = covidData.find(
      (datapoint) => datapoint.country === e.target.value
    ).infected;
    const recovered = covidData.find(
      (datapoint) => datapoint.country === e.target.value
    ).recovered;
    const deceased = covidData.find(
      (datapoint) => datapoint.country === e.target.value
    ).deceased;

  

    setCountry({name: e.target.value, recovered: recovered, infected: infected, deceased: deceased});

  };

  const circleChangeHandler = (value, infectedValue, strokeValRatio) => {

    const strokeVal = (strokeValRatio * 100) /  infectedValue;
    return value * strokeVal + ' 999'
  }

  return (
    <>
      <div id="pieContain" style={{display: displayHandler()}} >
        <div id="pieChart" class="center">
          <svg
            class="progress-circle"
            width="200px"
            height="200px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <svg
              class="progress-circle"
              width="200px"
              height="200px"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="progress-circle-back"
                cx="100"
                cy="100"
                r="90"
                style={{strokeDasharray: circleChangeHandler(country.infected, country.infected, 5.7)}}
              ></circle>
            </svg>
            <svg
              class="progress-circle"
              width="200px"
              height="200px"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="progress-circle-mid"
                cx="100"
                cy="100"
                r="70"
                style={{strokeDasharray: circleChangeHandler(country.deceased, country.infected, 4.64)}}
              ></circle>
            </svg>
            <circle
              class="progress-circle-prog"
              cx="100"
              cy="100"
              r="80"
              style={{strokeDasharray: circleChangeHandler(country.recovered, country.infected, 4.64)}}
            ></circle>
          </svg>
        </div>
        <div id="pieNumbers" class="center">
          <div class="textStats" data-progress="0">
            <p class="title">Recovery rate</p>
            <p id="RR">xz </p>
          </div>
          <div class="textStats" data-progress="0">
            <p class="title">Death rate</p>
            <p id="DR">c z</p>
          </div>
        </div>

        <div id="stats">
          <div id="statsCenter">
            <div class="verticalCenter">
              <p style={{color:"rgb(38, 160, 7)"}} class="statsTitle">Recovered</p>
              <p class="statsD" id="recoveredStat">
                {country.recovered}
              </p>
            </div>
            <div class="verticalCenter">
              <p style={{color:"rgb(245, 202, 10)"}} class="statsTitle">Infected</p>
              <div class="statsD" id="infectedStat">
              {country.infected}
              </div>
            </div>
            <div class="verticalCenter">
              <p style={{color:"rgb(151, 1, 1)"}} class="statsTitle">Deceased</p>
              <p class="statsD" id="deceasedStat">
              {country.deceased}
              </p>
            </div>
          </div>
        </div>

        <div class="center">
          <Countries
            countryChange={countryChangeHandler}
            covidData={covidData}
          />
        </div>
      </div>
    </>
  );
}
