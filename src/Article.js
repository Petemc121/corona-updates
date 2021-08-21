import React from "react";

export default function Article({ article }) {
  return (
    <div style={{ backgroundImage: article.urlToImage }} class="article">
      <a href={article.link}> {article.title}</a>
    </div>
  );
}
