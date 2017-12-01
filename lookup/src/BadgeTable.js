import React, { Component } from 'react';
import moment from 'moment';

class BadgeTable extends Component {
  render() {
    const badges = this.props.badges.map(badgeObj => {
      return (
        <div key={badgeObj.id} className="badges col-sm-3">
          <a href={badgeObj.url}>
            <img src={badgeObj.icon_url} alt={badgeObj.name} className="img-fluid rounded" />
          </a>
          <p>{badgeObj.name}</p>
          <small>{moment(badgeObj.earned_date).format('dddd, MMMM Do YYYY')}</small>
        </div>
      );
    });
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.photo} alt="profile" />
        <p>{this.props.badges.length} total badges</p>
        <div className="row">{badges}</div>
      </div>
    );
  }
}

export default BadgeTable;
