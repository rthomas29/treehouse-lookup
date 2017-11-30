import React, { Component } from 'react';

class BadgeTable extends Component {
  render() {
    return <div>{JSON.stringify(this.props.badges)}</div>;
  }
}

export default BadgeTable;
