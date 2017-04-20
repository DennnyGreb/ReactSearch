import React, { Component } from 'react';

export default class Form extends Component {
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