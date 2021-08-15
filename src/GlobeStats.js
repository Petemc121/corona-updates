import React, {useState} from "react";

export default function GlobeStats({covidData}) {
const [countryList, setCountryList] = useState([]);
const countryArray = [];
        covidData.then(response => {
            response.data.forEach(dataPoint => {
              countryArray.push(dataPoint)
            })
        })


    function makeCountryList() {
        setCountryList(countryArray);
    }

        console.log(countryList)
    
    

  return (
    <>
      <div id="pieContain">
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
              ></circle>
            </svg>
            <circle
              class="progress-circle-prog"
              cx="100"
              cy="100"
              r="80"
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
                <p class="statsTitle">
                  Recovered
                </p>
                <p class="statsD" id="recoveredStat">fvd</p>
              </div>
              <div class="verticalCenter">
                <p class="statsTitle">
                  Infected
                </p>
                <div class="statsD" id="infectedStat">v</div>
              </div>
              <div class="verticalCenter">
                <p class="statsTitle">
                  Deceased
                </p>
                <p class="statsD" id="deceasedStat">fd</p>
              </div>
            
          </div>
        </div>

        <div class="center">
          <select id="countrySelect">
              {makeCountryList}
          </select>
        </div>
      </div>
    </>
  );
}
