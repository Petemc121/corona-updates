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

  const extractedCountries = sortedCovidData.map(datapoint => {

      return datapoint.Country;
    
  })



extractedCountries.splice(extractedCountries.indexOf("World"), 1)
 

  extractedCountries.unshift("World")
 

  return (
    <select onChange={graphCountryChange} id="countrySelect">
      <option default="selected">Select a country</option>
      {
      extractedCountries.map((datapoint, index) => {
        if (index > 0 && datapoint !== "Total:")
        {
          if (datapoint === "UK")
          {
            return <GraphCountry key={index} graphCountry="United Kingdom" />;
          }

          if (datapoint === "USA")
          {
            return <GraphCountry key={index}graphCountry="United States" />;
          }
          
        return <GraphCountry key={index} graphCountry={datapoint} />;
        }
      })}
    </select>
  );
}