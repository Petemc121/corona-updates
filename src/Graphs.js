import React, {useState} from "react";
import JSCharting from "jscharting-react"
import GraphCountries from "./GraphCountries"





export default function Graphs({ displayHandler, covidData, covidHistory }) {
  console.log(covidHistory)
  const initConfig = {
    type: 'line',
    series: [
        {
            points: [
                
            ]
        }
    ]
  };
  const [config, setConfig] = useState({country:"undefined", configuration:initConfig})

  const handleGraphCountryChange= (e) => {
      if (e.target.value === "Select a country")
      {
        return
      }

      console.log(e.target.value)

    const countryData = covidHistory.map((datapoint,index) => {
      return datapoint.Country = e.target.value

    })

    console.log(countryData);

    // setConfig({country:e.target.value, configuration:{series: [{points: countryData}]}})
      

  }




  return <div style={{ display: displayHandler() }} id="graphsContain">
<div style={{height:"300px"}}>
<JSCharting options={config.configuration} />
</div>
<div class="center">
<GraphCountries graphCountryChange={handleGraphCountryChange} covidData={covidData} /> 
</div>
  </div>;
}
