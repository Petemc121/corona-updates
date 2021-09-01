import React from "react";
import GraphCountry from "./GraphCountry";

export default function GraphCountries({ graphCountryChange, covidData }) {
 
console.log(covidData)
  return (
    <select onChange={graphCountryChange} id="countrySelect">
      <option default="selected">Select a country</option>
      {
      covidData.map((datapoint, index) => {
        if (index > 0 && datapoint.Country !== "Total:")
        {
          if (datapoint.Country === "UK")
          {
            return <GraphCountry key={index} graphCountry="United Kingdom" />;
          }

          if (datapoint.Country === "USA")
          {
            return <GraphCountry key={index}graphCountry="United States" />;
          }
          
        return <GraphCountry key={index} graphCountry={datapoint.Country} />;
        }
      })}
    </select>
  );
}