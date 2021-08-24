import React from "react";

export default function Article({ article }) {
  return (
    <div class="article">
      <a class="articleLink" href={article.link}>
        {article.title}
        
      </a>
      <div class="published">
      {article.published}
      </div>
    </div>
  );
}
