import React from "react";
import Country from "./Country";

export default function Countries({ countryChange, covidData }) {
  const sortedCovidData = covidData.sort(function (a, b) {
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
    <select onChange={countryChange} id="countrySelect">
      {console.log(sortedCovidData)}
      <option default="selected">Select a country</option>
      {sortedCovidData.map((datapoint, index) => {
        if (index > 0 && datapoint.Country !== "Total:") {
          return <Country key={index} country={datapoint.Country} />;
        }
      })}
    </select>
  );
}
