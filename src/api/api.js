/**
 * Challenge 2 - query an api to provide search results and return them
 * This file should be used to construct the fetch for the data and return the results
 * Use a GET request against `https://api.tvmaze.com/search/shows?q=` where q= the query string
 * For example to query the term 'gold' the request should look like `https://api.tvmaze.com/search/shows?q=golden`
 * 
 */
const api = "https://api.tvmaze.com/search/shows?q="

export default async function retrieveData(query) { 
  // console.log(query);
  const movie_url= api + query;
  const state= {
    shows:[]
  }
  
  await fetch(movie_url)
          .then(response => response.json())
          .then(jsonResponse => {
            state.shows=jsonResponse;
            console.log('js',state.shows);
            //state.loading = false;
            // return state.shows;
          });
          
        return [...state.shows];
};

