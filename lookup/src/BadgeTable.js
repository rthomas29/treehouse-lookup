import React, { Component } from 'react';
import moment from 'moment';

class BadgeTable extends Component {
  render() {
    const badges = this.props.badges.map(badgeObj => {
      return (
        <div key={badgeObj.id}>
          <a href={badgeObj.url}>
            <img src={badgeObj.icon_url} alt={badgeObj.name} />
          </a>
          <small>
            {badgeObj.name} | Earned {moment(badgeObj.earned_date).format('dddd, MMMM Do YYYY')}
          </small>
        </div>
      );
    });
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.photo} alt="profile" />
        <p>{this.props.badges.length} total badges</p>
        {badges}
      </div>
    );
  }
}

export default BadgeTable;
