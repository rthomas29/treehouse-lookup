import React, { Component } from 'react';

// TODO: only capture course names one time in an array - done
//       need to handle error if username doesn't exist
// then, need to assign badges to each course...
class CourseList extends Component {
  render() {
    const courseTitles = [];
    this.props.badges.map((badgeObj, i) => {
      if (i > 0) {
        let badgeKey = badgeObj.id;
        let courseName = badgeObj.courses[0].title;
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
