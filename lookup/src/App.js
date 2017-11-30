import React, { Component } from 'react';
import Input from './Input';
import BadgeTable from './BadgeTable';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    inputValue: '',
    userBadges: [],
    profilePhotoUrl: '',
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
        <div className="App">
          <h1>Treehouse Lookup</h1>
          <Input change={this.onChangeHandler} submit={this.userSearchHandler} name={this.state.inputValue} />
          <BadgeTable badges={this.state.userBadges} photo={this.state.profilePhotoUrl} />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Treehouse Lookup</h1>
        <Input change={this.onChangeHandler} submit={this.userSearchHandler} name={this.state.inputValue} />
      </div>
    );
  }
}

export default App;
