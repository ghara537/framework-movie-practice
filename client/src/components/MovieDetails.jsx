import React from 'react';
import ReactDom from 'react-dom';



module.exports = class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    
  }
  
  render() {
    if ( this.props.show ){
      return (
        <div>
          Eventually will be details
        </div>
      )
    } else {
      return null;
    }
    
  }
}