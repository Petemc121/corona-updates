import React, { useState } from "react";
import {Line} from 'react-chartjs-2';
import GraphCountries from "./GraphCountries";

export default function Graphs({ displayHandler, covidData, covidHistory }) {
  const initConfig = {
    series: [
      {
        points: [],
      },
    ],
  };
  const [config, setConfig] = useState({
    country: "undefined",
    configuration: initConfig,
  });

  const options = {
    scales: {
      xAxes: [ {
          display: true,
          type: 'time',
          time: {
            parser: 'MM/DD/YYYY HH:mm',
            tooltipFormat: 'll HH:mm',
            unit: 'day',
            unitStepSize: 1,
            displayFormats: {
              'day': 'MM/DD/YYYY'
            }
          }
        }
      ]
  }
}


  const handleGraphCountryChange = (e) => {
    if (e.target.value === "Select a country") {
      return;
    }

    const countryData = covidHistory.filter(
      (datapoint) => datapoint.Country === e.target.value
    );

    const formatedCountryData = countryData.map((datapoint) => {
      // const dateObject = new Date(datapoint.date);
      return { x: datapoint.date, y: datapoint.total_cases };
    });

    const filteredCountryData = formatedCountryData.filter(
      (datapoint) => datapoint.y > 0
    );

    const sortedCountryData = filteredCountryData.sort((a, b) => {
      if (a.y < b.y) {
        return -1;
      }

      if (a.y > b.y) {
        return 1;
      }

      return 0;
    });

    const labels = sortedCountryData.map(datapoint => {
      return datapoint.x
    })

    const data = sortedCountryData.map(datapoint => {
      return datapoint.y
    })

  
    console.log(countryData);
    console.log(formatedCountryData);
    setConfig({
      country: e.target.value,
      configuration:  {
        labels: labels,
        datasets: [
          {
            label: 'Covid-19 Cases',
            data: data,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: '#ffb703',
          },
        ],
      }
    });
  };

  return (
    <div style={{ display: displayHandler() }} id="graphsContain">
      <div style={{ height: "300px" }}>
        {console.log(config.configuration)}
        <Line options={options} data={config.configuration}  />
      </div>
      <div class="center">
        <GraphCountries
          graphCountryChange={handleGraphCountryChange}
          covidData={covidData}
          covidHistory={covidHistory}
        />
      </div>
    </div>
  );
}
