import React, { Component } from 'react';

export default class Result extends Component {  
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