import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import I18n, {I18nString} from "./I18n";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <I18nString value="app.name">{({value}) => <img src={logo} className="App-logo" title={value} />}</I18nString>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <I18n value="app.name"/>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
