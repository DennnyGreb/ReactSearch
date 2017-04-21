import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
        <form id="searchForm">
            <fieldset>
                <input onChange={ this.props.handleChange } id="s" type="text" />
                <input onClick={ this.props.handleSearch } readOnly value="Submit" id="submitButton" />
            </fieldset>
        </form>
    );
  }
}