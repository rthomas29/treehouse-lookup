import React, { Component } from 'react';
import Input from './Input';
import BadgeTable from './BadgeTable';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    inputValue: '',
  };
  onChangeHandler = event => {
    this.setState({
      inputValue: event.target.value,
      userBadges: [],
    });
  };
  userSearchHandler = event => {
    event.preventDefault();
    axios
      .get(`https://teamtreehouse.com/${this.state.inputValue}.json`)
      .then(response => {
        this.setState({
          userBadges: response.data.badges,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="App">
        <h1>Treehouse Lookup</h1>
        <Input change={this.onChangeHandler} submit={this.userSearchHandler} name={this.state.inputValue} />
        <BadgeTable badges={this.state.userBadges} />
      </div>
    );
  }
}

export default App;
