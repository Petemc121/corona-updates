import React, { useState } from "react";
import {JSC,JSCharting} from "jscharting-react";
import GraphCountries from "./GraphCountries";

export default function Graphs({ displayHandler, covidData, covidHistory }) {
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

    const countryData = covidHistory.filter(
      (datapoint) => datapoint.Country === e.target.value
    );

    const formatedCountryData = countryData.map((datapoint) => {
      const dateObject = new Date(datapoint.date);
      return { x: dateObject, y: datapoint.total_cases };
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

    console.log(countryData);
    console.log(formatedCountryData);
    setConfig({
      country: e.target.value,
      configuration: JSC.JSCChartConfig = {
        type:'area',
        xAxis: {
          scale_type: "time",
          formatString: "MMM-dd-yyyy",
          label_text: "Date",
        },
        yAxis: {
          label_text: "Number of People",
        },
        series: [
          {
            points: sortedCountryData,
            name: "Cases",
          },
        ],
      },
    });
  };

  return (
    <div style={{ display: displayHandler() }} id="graphsContain">
      <div style={{ height: "300px" }}>
        {console.log(config.configuration)}
        <JSCharting options={config.configuration} />
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
