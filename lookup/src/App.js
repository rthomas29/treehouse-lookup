import React, { Component } from 'react';
import Input from './Input';
import BadgeTable from './BadgeTable';
import CourseList from './CourseList';
import ProfileData from './ProfileData';
import axios from 'axios';
import './App.css';

// TODO: add detail paragraph under profile pic
// have badge gallery and point details
// maybe have a chart that displays user points (line graph)
class App extends Component {
  state = {
    inputValue: '',
    userBadges: [],
    profilePhotoUrl: '',
    fullName: '',
    errorMsg: '',
    points: 0,
  };
  hasProfileData = false;
  onChangeHandler = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  userSearchHandler = event => {
    event.preventDefault();
    axios
      .get(`https://teamtreehouse.com/${this.state.inputValue}.json`)
      .then(response => {
        this.hasProfileData = true;
        this.setState({
          userBadges: response.data.badges,
          profilePhotoUrl: response.data.gravatar_url,
          userName: response.data.profile_name,
          points: response.data.points,
        });
      })
      .catch(error => {
        if (error) {
          this.hasProfileData = false;
          this.setState({ errorMsg: error.message });
        }
      });
    this.setState({
      inputValue: '',
    });
  };
  render() {
    if (this.hasProfileData === true) {
      return (
        <div className="App">
          <ProfileData
            badges={this.state.userBadges}
            photo={this.state.profilePhotoUrl}
            userName={this.state.userName}
            points={this.state.points}
          />
          <CourseList badges={this.state.userBadges} />
          <BadgeTable badges={this.state.userBadges} />
        </div>
      );
    } else if (this.hasProfileData === false && this.state.errorMsg) {
      return (
        <div className="App container">
          <h4>{this.state.errorMsg}. That user probably doesn't exist. Try again.</h4>
          <Input change={this.onChangeHandler} submit={this.userSearchHandler} name={this.state.inputValue} />
        </div>
      );
    }
    return (
      <div className="App container">
        <Input change={this.onChangeHandler} submit={this.userSearchHandler} name={this.state.inputValue} />
      </div>
    );
  }
}

export default App;
