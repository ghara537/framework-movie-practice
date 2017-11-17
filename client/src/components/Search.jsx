import React from 'react';
import ReactDOM  from 'react-dom';

module.exports = class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          <input type="text" name="name" value={this.state.value} onChange={this.props.searchStr} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}