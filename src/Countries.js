import React from "react";
import Country from "./Country";

export default function Countries({ covidData }) {
  return (
    <select id="countrySelect">
      {covidData.map((datapoint) => {
        console.log(datapoint.country);
        return <Country country={datapoint.country} />;
      })}
    </select>
  );
}
