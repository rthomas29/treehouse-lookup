import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
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
