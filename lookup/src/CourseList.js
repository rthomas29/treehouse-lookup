import React, { Component } from 'react';

// TODO: only capture course names one time in an array
// then, need to assign badges to each course...
class CourseList extends Component {
  render() {
    const courseTitles = [];
    this.props.badges.map((badgeObj, i) => {
      if (i > 0) {
        const badgeKey = badgeObj.id;
        const courseName = badgeObj.courses[0].title;
        if (courseTitles.indexOf(courseName) === -1) {
          courseTitles.push(courseName);
        }
        return courseTitles;
      }
    });
    const courseNames = courseTitles.map(title => {
      return <li key={title}>{title}</li>;
    });
    return <ul>{courseNames}</ul>;
  }
}

export default CourseList;
