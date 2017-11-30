import React, { Component } from 'react';
import moment from 'moment';

class BadgeTable extends Component {
  render() {
    const badges = this.props.badges.map((badgeObj, i) => {
      return (
        <div key={badgeObj.id}>
          <img src={badgeObj.icon_url} alt={badgeObj.name} />
          <small>
            {badgeObj.name} | Earned {moment(badgeObj.earned_date).format('dddd, MMMM Do YYYY')}
          </small>
        </div>
      );
    });
    return (
      <div>
        <img src={this.props.photo} alt="profile" />
        {badges}
      </div>
    );
  }
}

export default BadgeTable;
