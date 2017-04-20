import React, { Component } from 'react';
import '../../css/App.css';
import data from '../../data.json';

import Result from './Result';
import Form from './Form';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      posts: [],
      isSearched: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(data);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSearch() {
    let user = data.users.find((user) => {
        return user.name === this.state.value;
    });
    let posts = [];
    if(user) {
        posts = data.posts.filter((post) => {
            return (post.userId === user.id);
        });
    }
    this.setState({posts, isSearched: true});
  }

  render() {
    return (
        <div>
            <Form handleChange={ this.handleChange } handleSearch={ this.handleSearch } />
            <Result posts={ this.state.posts } isSearched={ this.state.isSearched } />
        </div>
    );
  }
}