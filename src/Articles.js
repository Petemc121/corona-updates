import React from 'react'
import Article from './Article'

export default function Articles({covidNews}) {
   

        
    return (
        <div class="articlesContain">
         {
            covidNews.articles.map((article, index) => {
                   
                if (index < 10)
                {
                    return  <Article key={index} article={article} />
                }
            })
         }
        </div>
    )
    }

