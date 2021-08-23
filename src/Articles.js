import React from 'react'
import Article from './Article'

export default function Articles({covidNews}) {
    console.log(covidNews.articles)
   

        
    return (
        <div>
         {
            covidNews.articles.map((article, index) => {
                   
                if (index < 10)
                {
                    return  <Article article={article} />
                }
            })
         }
        </div>
    )
    }

