import React, { Component } from 'react';
import './BadgeTable.css';
import moment from 'moment';

class BadgeTable extends Component {
  render() {
    const currentCourseBadgeList = this.props.currentBadges.map(badgeObj => {
      return (
        <li key={badgeObj.id} className="badges col-sm-3">
          <p>
            <a href={badgeObj.url}>
              <img src={badgeObj.icon_url} alt={badgeObj.name} className="img-fluid rounded-circle badge-icon" />
              <h6>{badgeObj.name}</h6>
              <small>{moment(badgeObj.earned_date).format('dddd, MMMM Do YYYY')}</small>
            </a>
          </p>
        </li>
      );
    });
    return (
      <ul id="main">
        <div id="badge-div">{currentCourseBadgeList}</div>
      </ul>
    );
  }
}

export default BadgeTable;
