import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import Movie from './components/Movie.jsx';
import $ from 'jquery';

var movies = [];


class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      searchString: '',
      addedMovie: '',
      watched: false
    }
  }
  
  componentWillMount() {

    $.get('/load', (data) => {
      console.log('DATA', data);
      this.setState({ movies: data})
    })
  }

  addToSearchString(event) {
    this.setState({searchString: event.target.value});
    console.log(this.state.searchString)
  }

  handleSubmitSearch(event){
    //get request
    event.preventDefault()
    var searchStringObj = JSON.stringify({searchString: this.state.searchString});
    console.log(this.state.searchString)
    //use String to compare to submit strings
    $.ajax({
      url: '/load',
      method: 'GET',
      data: searchStringObj,
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        this.setState({movies: data});
      }
    })


    // if (this.state.searchString !== '') {
    //   var relatedMovies = [];
    //   this.state.movies.map(function(movie){
    //     if ( movie.title.indexOf(string) !== -1) {
    //       relatedMovies.push(movie);
    //     }
    //   });
    //   this.setState({movies: relatedMovies});
    // } else {
    //   this.setState({movies: movies});
    // }

  }

  addToMovieString(event) {
    this.setState({addedMovie: event.target.value});
  }

  handleSubmitAddMovie(event) {
    event.preventDefault();
    var newMovieArr = this.state.movies.slice()
    // newMovieArr.push(this.state.addedMovie);
    // console.log('new Movie Arr', newMovieArr)
    // this.setState({movies: newMovieArr})
    
    var newMovieData = JSON.stringify({ title: this.state.addedMovie})
    

    // $.post('/movie', newMovieData, (req, res, next) => {
    //   console.log('back from the post')
    //   $.get('/movies', (data) => {
    //     console.log('got movies')
    //     this.setState({ movies: data})
    //   })
    // }, 'json')
  
    $.ajax({
      url: '/movie',
      method: 'POST',
      data: newMovieData,
      'contentType': 'application/json',
      success: (data) => {
        $.get('/movies', (data) => {
          console.log('got movies')
          this.setState({ movies: data})
        })
      }
    })

  }

  findWatchedMovies(event) {
    event.preventDefault();
    this.setState({
      watched: true
    })
  }

  findMoviesToWatch(event) {
    event.preventDefault();
    this.setState({
      watched: false
    })
  }


  render() {
    return (
      <div>
        <AddMovie movieStr={this.addToMovieString.bind(this)} handleSubmit={this.handleSubmitAddMovie.bind(this)} />
        <Search searchStr={this.addToSearchString.bind(this)} handleSubmit={this.handleSubmitSearch.bind(this)} />
        <button onClick={this.findWatchedMovies.bind(this)}> Watched </button>
        <button onClick={this.findMoviesToWatch.bind(this)}> Not Watched </button>
        {(this.state.movies.length !== 0) ? (
          <ul>
            { 
              this.state.movies.map((movie, index) => {
                return <Movie key={index} movie={movie} watched={this.state.watched} />
              })
            }
          </ul>
          ) : (
          <div>NO MOVIES BY THAT SEARCH ITEM, DO EMPTY SEARCH TO SEE MOVIES</div>
          )}

      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
