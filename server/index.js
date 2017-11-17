const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const searchMovies = require('../lib/movieAPI.js')


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




var movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ]


app.get('/movies', (req, res, next) => {
  res.status(200).send(movies);
});

app.get('/load', (req, res, next) => {
  console.log('in here !!!')
  searchMovies(req.body, (data) => {
    res.status(200).send(data)
  });
  // res.status(200).send(movies)
})

app.post('/movie', (req, res, next) => {
  movies.push(req.body);
  console.log('made it to post', req.body)
  res.status(200).send()
})