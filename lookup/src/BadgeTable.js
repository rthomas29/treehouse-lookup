import React, { Component } from 'react';

class BadgeTable extends Component {
  render() {
    const badges = this.props.badges.map((badgeObj, i) => {
      return (
        <div key={badgeObj.id}>
          <img src={badgeObj.icon_url} alt={badgeObj.name} />
          <small>
            {badgeObj.name} | Earned on: {badgeObj.earned_date}
          </small>
        </div>
      );
    });
    return (
      <div>
        <img src={this.props.photo} alt="profile picture" />
        {badges}
      </div>
    );
  }
}

export default BadgeTable;
