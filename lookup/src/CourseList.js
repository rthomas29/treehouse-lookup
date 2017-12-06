import React, { Component } from 'react';
import ProfileData from './ProfileData';
import './CourseList.css';

class CourseList extends Component {
  constructor() {
    super();
    this.handleCourseClick = this.handleCourseClick.bind(this);
    this.state = {
      currentTitle: '',
    };
  }
  handleCourseClick(e) {
    this.setState({ currentTitle: e.target.value });
  }
  render() {
    const courseTitles = [];
    this.props.badges.map((badgeObj, i) => {
      if (i > 0) {
        let badgeKey = badgeObj.id;
        let courseName = badgeObj.courses[0].title;
        const currentBadges = [];
        if (courseTitles.indexOf(courseName) === -1) {
          courseTitles.push(courseName);
        }
        if (courseName === this.state.currentTitle) {
          currentBadges.push(badgeObj);
        }
        return courseTitles;
      }
    });
    const courseNames = courseTitles.map(title => {
      return (
        <li key={title} className="text-left">
          <input
            onClick={this.handleCourseClick}
            type="button"
            value={title}
            className="btn btn-success dropdown-toggle"
          />
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
