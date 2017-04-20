import React, { Component } from 'react';
import '../../css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App" id="page">
        <h1>Google Powered Site Search</h1>
        { this.props.children }
      </div>
    );
  }
}