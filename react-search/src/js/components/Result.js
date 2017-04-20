import React, { Component } from 'react';

export default class Result extends Component {  
  renderResult() {
    if(this.props.posts) {
      return this.props.posts.map((post) => {
        return <h2 className="post-title" key={ Math.random() }>{ post.title} </h2>
      });
    }
    else {
      console.log("else");
      console.log(this.props.isSearched);
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