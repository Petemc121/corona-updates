import React from "react";
import Articles from "./Articles";

export default function News({ displayHandler, covidNews }) {
  return (
    <div style={{ display: displayHandler() }} id="newsContain">
      <div id="articlesContain">
      {covidNews.articles && <Articles covidNews={covidNews}/>}
      </div>
    </div>
  );
}
