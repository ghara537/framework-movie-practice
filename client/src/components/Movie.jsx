import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetail from './MovieDetails.jsx'

module.exports = class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedStatus: false,
      showDescription: false
    }

  }

  changeWatchedStatus(event) {
    event.preventDefault();
    this.setState({watchedStatus: !this.state.watchedStatus})
  }

  showDescription(event) {
    event.preventDefault();
    this.setState({showDescription: !this.state.showDescription})
  }


  render() {

    console.log('this.props.watched', this.props.watched)
    console.log('this.state.watchedStatus', this.state.watchedStatus)
    if ( (this.props.watched === false && this.state.watchedStatus === false) || (this.props.watched === true && this.state.watchedStatus === true) || this.props.watched === null ) {
        return (
          <li>
            <button onClick={this.changeWatchedStatus.bind(this)}>{this.state.watchedStatus ? 'watched' : 'not watched'}</button> 
            <span onClick={this.showDescription.bind(this)}>{this.props.movie.title}</span> 
            <MovieDetail show={this.state.showDescription} />
          </li>
          )
      } 
      else {
        return null;
      }
    }  

}