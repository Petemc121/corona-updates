import React, { useState } from "react";
import JSCharting from "jscharting-react";
import GraphCountries from "./GraphCountries";

export default function Graphs({ displayHandler, covidData, covidHistory }) {
  console.log(covidHistory);
  const initConfig = {
    type: "line",
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

  const handleGraphCountryChange = (e) => {
    if (e.target.value === "Select a country") {
      return;
    }

    console.log(e.target.value);

    const countryData = covidHistory.filter(
      (datapoint) => datapoint.Country === e.target.value
    );

    const formatedCountryData = countryData.map((datapoint) => {
      return { x: datapoint.date, y: datapoint.total_cases };
    });

    const filteredCountryData = formatedCountryData.filter(datapoint => datapoint.y > 0)

    const sortedCountryData = filteredCountryData.sort((a, b) => {
      if (a.y < b.y) {
        return -1;
      }

      if (a.y > b.y) {
        return 1;
      }

      return 0;
    });


    console.log(countryData);
    console.log(formatedCountryData);
    setConfig({
      country: e.target.value,
      configuration: {
        series: [
          {
            points: sortedCountryData,
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    unit: "month",
                    unitStepSize: 1,
                  },
                },
              ],
            },
          },
        ],
      },
    });
  };

  return (
    <div style={{ display: displayHandler() }} id="graphsContain">
      <div style={{ height: "300px" }}>
        <JSCharting options={config.configuration} />
      </div>
      <div class="center">
        <GraphCountries
          graphCountryChange={handleGraphCountryChange}
          covidData={covidData}
        />
      </div>
    </div>
  );
}
