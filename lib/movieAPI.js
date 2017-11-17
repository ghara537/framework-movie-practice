var request = require('request');
var Promise = require('bluebird');





var searchMovies = (searchString, callback) => {
  
   // http://api.themoviedb.org/3/search/movie?api_key=[mykey]&query=Drunken%20Master%20II
  console.log('ABOUT TO SEARCH MOVIES');
  request.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9a23d3bbbd15ac30e1b1eff74c924c31', searchString, (error, response, body) => {
    // console.log('error', error)
    // console.log('response', response)
    console.log('body', JSON.parse(body))
    callback(JSON.parse(body).results);
  })

  // request('https://api.themoviedb.org/3/movie/550?api_key=9a23d3bbbd15ac30e1b1eff74c924c31').on('response', (response) => {

  // })
}

module.exports = searchMovies;