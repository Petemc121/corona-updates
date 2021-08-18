import React from "react";
import Country from "./Country";

export default function Countries({ countryChange, covidData }) {
  return (
    <select onChange={countryChange} id="countrySelect">
      <option default="selected">Select a country</option>
      {covidData.map((datapoint) => {
        return <Country country={datapoint.country} />;
      })}
    </select>
  );
}
