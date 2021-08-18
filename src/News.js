import React from "react";
import Article from "./Article";

export default function News({ displayHandler, covidNews }) {
  console.log(covidNews);
  const first10Articles = covidNews.articles.slice(0, 9);
  return (
    <div style={{ display: displayHandler() }} id="newsContain">
      <div id="articlesContain">
        {first10Articles.map((article) => {
          return <Article article={article} />;
        })}
      </div>
    </div>
  );
}
