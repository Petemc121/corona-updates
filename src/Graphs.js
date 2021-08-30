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
    maintainAspectRatio:false,
    radius:0,
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

      console.log(countryData)

    const formatedInfectionData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.total_cases };
    });

    const formatedDeathData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.total_deaths };
    });

    const filteredDeathData = formatedDeathData.filter(
      (datapoint) => datapoint.y > 0
    );

    const sortedDeathData = filteredDeathData.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }

      if (a.x > b.x) {
        return 1;
      }

      return 0;
    });
  
    const filterFunction = (datapoint) => {
      console.log(e.target.value)
      if (e.target.value === "World") {
       return (datapoint.y > 300000)
      } else {
     
          return datapoint.y > 500
      }
     
    }

    const filteredInfectionData = formatedInfectionData.filter(filterFunction);

    console.log(filteredInfectionData)
    




    const sortedInfectionData = filteredInfectionData.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }

      if (a.x > b.x) {
        return 1;
      }

      return 0;
    });
  
    setConfig({
      country: e.target.value,
      configuration:  {
        responsive:true,
        datasets: [
          {
            label: 'Infections',
            data: sortedInfectionData,
            fill: false,
            backgroundColor: '#ffb703',
            borderColor: '#ffb703',
          },
          {
            label: 'Deaths',
            data: sortedDeathData,
            fill: false,
            backgroundColor: 'rgb(126, 3, 3)',
            borderColor: 'rgb(126, 3, 3)',
          }
        ],
      }
    });
    console.log(sortedDeathData)
  };

  return (
    <div style={{ display: displayHandler() }} id="graphsContain">
      <div style={{ height: "300px" }}>
        {console.log(config.configuration)}
        <Line width={100} height={50} options={options} data={config.configuration}  />
      </div>
      <div style={{ height: "200px" }}>
      <Line width={100} height={50} options={options} data={config.configuration}  />
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
