import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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
    maintainAspectRatio: false,
    radius: 2,
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            parser: "MM/DD/YYYY HH:mm",
            tooltipFormat: "ll HH:mm",
            unit: "day",
            unitStepSize: 1,
            displayFormats: {
              day: "MM/DD/YYYY",
            },
          },
        },
      ],
    },
  };

  const handleGraphCountryChange = (e) => {
    if (e.target.value === "Select a country") {
      return;
    }

    const countryData = covidHistory.filter(
      (datapoint) => datapoint.Country === e.target.value
    );

    const filterInfectionsFunction = (datapoint) => {
      if (e.target.value === "World") {
        return datapoint.y > 300000;
      } else {
        return datapoint.y > 500;
      }
    };

    const filterDeathsFunction = (datapoint) => {
      if (e.target.value === "World") {
        return datapoint.y > 5000;
      } else {
        return datapoint.y > 50;
      }
    };

    const filterDailyFunction = (datapoint) => {
      return datapoint.y > 0;
    };

    const formatedInfectionData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.total_cases };
    });

    const formatedDailyInfectionData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.new_cases };
    });

 
    const formatedDailyIDeathData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.new_deaths };
    });

  
    const formatedDeathData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.total_deaths };
    });

    const filteredDailyInfectionData =
    formatedDailyInfectionData.filter(filterDailyFunction);


    const filteredDailyDeathData =
    formatedDailyIDeathData.filter(filterDailyFunction);

    const filteredInfectionData = formatedInfectionData.filter(
      filterInfectionsFunction
    );

    const filteredDeathData = formatedDeathData.filter(filterDeathsFunction);


    const sortedDailyInfectionData = filteredDailyInfectionData.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }

      if (a.x > b.x) {
        return 1;
      }

      return 0;
    });

    const sortedDailyDeathData = filteredDailyDeathData.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }

      if (a.x > b.x) {
        return 1;
      }

      return 0;
    });

    const sortedInfectionData = filteredInfectionData.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }

      if (a.x > b.x) {
        return 1;
      }

      return 0;
    });



    const sortedDeathData = filteredDeathData.sort((a, b) => {
      if (a.x < b.x) {
        return -1;
      }

      if (a.x > b.x) {
        return 1;
      }

      return 0;
    });

    setConfig1({
      country: e.target.value,
      configuration: {
        responsive: true,
        datasets: [
          {
            label: "Infections",
            data: sortedInfectionData,
            yAxisID: "A",
            fill: false,
            backgroundColor: "#ffb703",
            borderColor: "#ffb703",
          },
          {
            label: "Deaths",
            data: sortedDeathData,
            yAxisID: "B",
            fill: false,
            backgroundColor: "rgb(126, 3, 3)",
            borderColor: "rgb(126, 3, 3)",
          },
        ],
      },
    });

    setConfig2({
      country: e.target.value,
      configuration: {
        responsive: true,
        datasets: [
          {
            type: "scatter",
            label: "Daily Infections",
            data: sortedDailyInfectionData,
            yAxisID: "A",
            fill: false,
            backgroundColor: "#ffb703",
            borderColor: "#ffb703",
          },
          {
            type: "scatter",
            label: "Daily Deaths",
            data: sortedDailyDeathData,
            yAxisID: "B",
            fill: false,
            backgroundColor: "rgb(126, 3, 3)",
            borderColor: "rgb(126, 3, 3)",
          },
        ],
      },
    });
  };

  return (
    <div style={{ display: displayHandler() }} id="graphsContain">
      <div style={{ height: "200px" }}>
        <Line
          width={100}
          height={50}
          options={options}
          data={config1.configuration}
        />
      </div>
      <div style={{ height: "200px" }}>
        <Line
          width={100}
          height={50}
          options={options}
          data={config2.configuration}
        />
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
