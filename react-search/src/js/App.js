import React, { Component } from 'react';
import '../css/App.css';
import data from '../data.json'

import Result from './Result.js';
import Form from './Form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      value: null,
      userId: null,
      posts: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cleanArray = this.cleanArray.bind(this);
    console.log(this.state.data);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  cleanArray(array) {
    let temp = [];
    for(let i of array)
        i && temp.push(i);
      
    return temp;
  }

  handleSearch() {
    let userId = this.state.data.users.map((user) => {
      if(user.name === this.state.value) {
        return user.id;
      }
      else {
        return null;
      }
    });

    userId = this.cleanArray(userId)[0];

    let posts = this.state.data.posts.map((post) => {
      if(post.userId === userId) {
        return post;
      }
      else {
        return null;
      }
    });

    posts = this.cleanArray(posts);
    this.setState({posts});
  }

  render() {
    return (
      <div className="App" id="page">
        <h1>Google Powered Site Search</h1>
        <Form handleChange={ this.handleChange } handleSearch={ this.handleSearch }/>
        <Result posts={ this.state.posts }/>
        <div id="resultsDiv"></div>
      </div>
    );
  }
}

export default App;