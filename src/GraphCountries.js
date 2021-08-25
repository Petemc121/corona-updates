import React from "react";
import GraphCountry from "./GraphCountry";

export default function GraphCountries({ graphCountryChange, covidData }) {
  return (
    <select onChange={graphCountryChange} id="countrySelect">
      <option default="selected">Select a country</option>
      {covidData.map((datapoint, index) => {
        if (index > 0)
        {
        return <GraphCountry graphCountry={datapoint.Country} />;
        }
      })}
    </select>
  );
}