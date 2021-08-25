import React from "react";
import GraphCountry from "./GraphCountry";

export default function GraphCountries({ graphCountryChange, covidData, covidHistory }) {

  if (covidHistory !== undefined){
  const countries = covidHistory.filter((datapoint,) => datapoint.Country === "United")

  console.log(countries)
  }


  return (
    <select onChange={graphCountryChange} id="countrySelect">
      <option default="selected">Select a country</option>
      {covidData.map((datapoint, index) => {
        if (index > 0)
        {
          if (datapoint.Country === "UK")
          {
            return <GraphCountry graphCountry="United Kingdom" />;
          }

          if (datapoint.Country === "USA")
          {
            return <GraphCountry graphCountry="United States" />;
          }
          
        return <GraphCountry graphCountry={datapoint.Country} />;
        }
      })}
    </select>
  );
}