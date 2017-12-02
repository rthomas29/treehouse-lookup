import React, { Component } from 'react';

// TODO: only capture course names one time in an array
// then, need to assign badges to each course...
class CourseList extends Component {
  render() {
    let courseTitles = [];
    const titles = this.props.badges.map((badgeObj, i) => {
      if (i > 0) {
        const courseName = badgeObj.courses[0].title;
        if (courseTitles.indexOf(courseName) === -1) {
          courseTitles.push(courseName);
        }
        return courseTitles;
      }
    });
    const courseNames = courseTitles.map(title => {
      return <li>{title}</li>;
    });
    return <ul>{courseNames}</ul>;
  }
}

export default CourseList;
