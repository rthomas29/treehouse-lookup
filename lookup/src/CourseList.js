import React, { Component } from 'react';
import ProfileData from './ProfileData';
import './CourseList.css';

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
      return (
        <li key={title} className="text-left">
          <button type="button" className="btn btn-success dropdown-toggle">
            {title}
          </button>
        </li>
      );
    });
    return (
      <div id="course-list" className="float-left">
        <h5>Courses Completed</h5>
        <ul className="text-left">{courseNames}</ul>
      </div>
    );
  }
}

export default CourseList;
