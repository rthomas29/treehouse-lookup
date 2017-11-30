import React, { Component } from 'react';
import Input from './Input';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    inputValue: '',
  };
  onChangeHandler = event => {
    this.setState({
      inputValue: event.target.value,
      userRecord: {},
    });
  };
  userSearchHandler = event => {
    event.preventDefault();
    axios
      .get(`https://teamtreehouse.com/${this.state.inputValue}.json`)
      .then(response => {
        this.setState({
          userRecord: response.data,
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
      </div>
    );
  }
}

export default App;
