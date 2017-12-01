import React, { Component } from 'react';
import moment from 'moment';

class BadgeTable extends Component {
  render() {
    const badges = this.props.badges.map(badgeObj => {
      return (
        <div key={badgeObj.id} className="badges col-sm-3">
          <a href={badgeObj.url}>
            <img src={badgeObj.icon_url} alt={badgeObj.name} className="img-fluid rounded-circle" />
          </a>
          <p>{badgeObj.name}</p>
          <small>{moment(badgeObj.earned_date).format('dddd, MMMM Do YYYY')}</small>
        </div>
      );
    });
    return (
      <div id="main">
        <div id="user-info">
          <h3>{this.props.name}</h3>
          <img src={this.props.photo} alt="profile" className="img-fluid img-thumbnail" />
          <p>{this.props.badges.length} total badges</p>
        </div>
        <div id="badge-div">{badges}</div>
      </div>
    );
  }
}

export default BadgeTable;
