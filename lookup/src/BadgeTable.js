import React, { Component } from 'react';

class BadgeTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const badges = this.props.badges.map((badgeObj, i) => {
      return <div key={badgeObj.id}>{badgeObj.name}</div>;
    });
    return <div>{badges}</div>;
  }
}

export default BadgeTable;
