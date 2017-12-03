import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    return (
      <div id="search-div" className="w-50 p-3 float-left">
        <h5>Treehouse Lookup</h5>
        <form onSubmit={this.props.submit}>
          <input
            type="text"
            placeholder="Enter username"
            onChange={this.props.change}
            value={this.props.name}
            required
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Input;
