import React from "react";
import GraphCountry from "./GraphCountry";

export default function GraphCountries({ graphCountryChange, covidData }) {
  const sortedCovidData = covidData.sort(function(a, b) {
    var countryA = a.Country.toUpperCase(); // ignore upper and lowercase
    var countryB = b.Country.toUpperCase(); // ignore upper and lowercase
    if (countryA < countryB) {
      return -1;
    }
    if (countryA > countryB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  return (
    <select onChange={graphCountryChange} id="countrySelect">
      <option default="selected">Select a country</option>
      {
      sortedCovidData.map((datapoint, index) => {
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