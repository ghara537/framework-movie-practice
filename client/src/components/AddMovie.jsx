import React from 'react';
import ReactDom from 'react-dom';

module.exports = class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          <input name="name" type="text" onChange={this.props.movieStr}/>
        </label>
        <input value="Add Movie" type="submit" />
      </form>



    )
  }
}