import React, {useEffect, useState} from 'react'
import Country from './Country'
import Axios from "axios";


export default function Countries() {
  let covidData = [];
    
    
    useEffect(() => {
        fetchGlobalData()
        console.log(covidData)
       })
     
     
       const fetchGlobalData = () => {
        return Axios.get("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true").then(response => {
           response.data.forEach(dataPoint => {
             covidData.push(dataPoint)
             
           })
       })
     }
     
    return (
        <select id="countrySelect">
            {covidData.map(datapoint => {
                console.log(datapoint)
                return <Country datapoint={datapoint} />
            }
            )}
        </select>
    )
}
