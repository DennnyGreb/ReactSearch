import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Result extends Component {  
  renderResult() {
    if(this.props.posts[0]) {
      return this.props.posts.map((post) => {
        return <Link key={ Math.random() } to={ "/post/" + post.id }><h2 onClick={ () => {  } } className="post-title" key={ Math.random() }>{ post.title} </h2></Link>
      });
    }
    else {
      if(this.props.isSearched) {
        return <h2>Such user doesn't have any posts.</h2>;
      }
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