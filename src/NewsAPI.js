// To query /v2/everything
// You must include at least one q, source, or domain
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('7521ed286755491d9f27093d1f8d22c3', { corsProxyUrl: '"https://cors-anywhere.herokuapp.com/"' });

export default newsapi.v2.everything({
    q: 'bitcoin',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',

  }).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });
