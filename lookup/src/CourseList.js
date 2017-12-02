import React, { Component } from 'react';

class CourseList extends Component {
  render() {
    const courses = this.props.badges.map((badgeObj, i) => {
      if (i > 0) {
        return <li key={badgeObj.id}>{badgeObj.courses[0].title}</li>;
      }
    });
    return <ul>{courses}</ul>;
  }
}

export default CourseList;
