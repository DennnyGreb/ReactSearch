import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="page">
        <h1>Google Powered Site Search</h1>
        <form id="searchForm">
            <fieldset>
                <input id="s" type="text" />

                <input type="submit" value="Submit" id="submitButton" />

                <div id="searchInContainer">
                    <input type="radio" name="check" value="site" id="searchSite" checked />
                    <label htmlFor="searchSite" id="siteNameLabel">Search</label>

                    <input type="radio" name="check" value="web" id="searchWeb" />
                    <label htmlFor="searchWeb">Search The Web</label>
                </div>

                <ul className="icons">
                    <li className="web" title="Web Search" data-searchType="web">Web</li>
                    <li className="images" title="Image Search" data-searchType="images">Images</li>
                    <li className="news" title="News Search" data-searchType="news">News</li>
                    <li className="videos" title="Video Search" data-searchType="video">Videos</li>
                </ul>
            </fieldset>
        </form>

        <div id="resultsDiv"></div>
      </div>
    );
  }
}

export default App;
