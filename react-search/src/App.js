import React, { Component } from 'react';
import './App.css';
import data from './data.json'

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

class Form extends Component {
  render() {
    return (
        <form id="searchForm">
            <fieldset>
                <input onChange={ this.props.handleChange } id="s" type="text" />

                <input onClick={ this.props.handleSearch } readOnly value="Submit" id="submitButton" />

                <ul className="icons">
                    <li className="web" title="Web Search" data-searchType="web">Web</li>
                    <li className="images" title="Image Search" data-searchType="images">Images</li>
                    <li className="news" title="News Search" data-searchType="news">News</li>
                    <li className="videos" title="Video Search" data-searchType="video">Videos</li>
                </ul>
            </fieldset>
        </form>
    );
  }
}

class Result extends React.Component {  
  renderResult() {
    if(this.props.posts) {
      return this.props.posts.map((post) => {
        return <h2 className="post-title" key={ Math.random() }>{ post.title} </h2>
      });
    }
    else {
      return null;
    }
  }
  
  render() {
    return (
      <div>
        { this.renderResult() }
      </div>
    );
  }
}

export default App;
