import React from "react";
import Articles from "./Articles";

export default function News({ displayHandler, covidNews }) {
  return (
    <div style={{ display: displayHandler() }} id="newsContain">
      
      {covidNews.articles && <Articles covidNews={covidNews}/>}
    
    </div>
  );
}
