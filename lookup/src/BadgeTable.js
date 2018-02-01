import React, { Component } from 'react';
import './BadgeTable.css';
import moment from 'moment';

class BadgeTable extends Component {
  render() {
    const currentCourseBadgeList = this.props.badges.map(badgeObj => {
      return (
        <div id="badge-div" key={badgeObj.id} className="badges col-2 col-sm-2 col-xs-2">
          <figure>
            <a href={badgeObj.url}>
              <img src={badgeObj.icon_url} alt={badgeObj.name} className="badge-icon img-fluid" />
            </a>
            <figcaption>{badgeObj.name}</figcaption>
          </figure>
        </div>
      );
    });
    return (
      <section id="main" className="container">
        <h5>Badges Earned</h5>
        <div className="row">{currentCourseBadgeList}</div>
      </section>
    );
  }
}

export default BadgeTable;
