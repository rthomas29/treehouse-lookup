import React, { Component } from 'react';
import Input from './Input';
import BadgeTable from './BadgeTable';
import CourseList from './CourseList';
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
          fullName: response.data.name,
        });
      })
      .catch(error => {
        throw error;
      });
    this.setState({
      inputValue: '',
    });
  };
  render() {
    if (this.hasProfileData === true) {
      return (
        <div className="App container">
          <Input change={this.onChangeHandler.bind(this)} submit={this.userSearchHandler.bind(this)} name={this.state.inputValue} />
          <BadgeTable badges={this.state.userBadges} photo={this.state.profilePhotoUrl} name={this.state.fullName} />
          <CourseList badges={this.state.userBadges} />
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
