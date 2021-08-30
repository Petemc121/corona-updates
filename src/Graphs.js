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
  const [config1, setConfig1] = useState({
    country: "undefined",
    configuration: initConfig,
  });
  const [config2, setConfig2] = useState({
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

        
    const filterInfectionsFunction = (datapoint) => {
      console.log(e.target.value)
      if (e.target.value === "World") {
       return (datapoint.y > 300000)
      } else {
     
          return datapoint.y > 500
      }
     
    }
    const formatedInfectionData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.total_cases };
    });

    const formatedDailyInfectionData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.new_cases };
    });


    const sortedDailyInfectionData = formatedDailyInfectionData.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }

      if (a.x > b.x) {
        return 1;
      }

      return 0;
    });

    const formatedDailyIDeathData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.new_deaths };
    });


    const sortedDailyDeathData = formatedDailyIDeathData.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }

      if (a.x > b.x) {
        return 1;
      }

      return 0;
    });

    const filteredInfectionData = formatedInfectionData.filter(filterInfectionsFunction);


    const sortedInfectionData = filteredInfectionData.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }

      if (a.x > b.x) {
        return 1;
      }

      return 0;
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

    console.log(filteredInfectionData)
    
  
    setConfig1({
      country: e.target.value,
      configuration:  {
        responsive:true,
        datasets: [
          {
            label: 'Infections',
            data: sortedInfectionData,
            yAxisID:'A',
            fill: false,
            backgroundColor: '#ffb703',
            borderColor: '#ffb703',
          },
          {
            label: 'Deaths',
            data: sortedDeathData,
            yAxisID:'B',
            fill: false,
            backgroundColor: 'rgb(126, 3, 3)',
            borderColor: 'rgb(126, 3, 3)',
          }
        ],
      }
    });

    setConfig2({
      country: e.target.value,
      configuration:  {
        responsive:true,
        datasets: [
          {
            label: 'Daily Infections',
            data: sortedDailyInfectionData,
            yAxisID:'A',
            fill: false,
            backgroundColor: '#ffb703',
            borderColor: '#ffb703',
          },
          {
            label: 'Daily Deaths',
            data: sortedDailyDeathData,
            yAxisID:'B',
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
        {console.log(config1.configuration)}
        <Line width={100} height={50} options={options} data={config1.configuration}  />
      </div>
      <div style={{ height: "300px" }}>
        {console.log(config1.configuration)}
        <Line width={100} height={50} options={options} data={config2.configuration}  />
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
