import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Memory from './Memory';
import Tictactoe from './Tictactoe';
import Hangman from './Hangman';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserRouter>
          <div className = "list">
            <ul>
              <li>
                <Link to = "/memory">Memory Game</Link>
              </li>
              <li>
                <Link to = "/tictactoe">Tictactoe</Link>
              </li>
              <li>
                <Link to = "/hangman">Hangman</Link>
              </li>
            </ul>

            <Route path = "/memory" component = {Memory} />
            <Route path = "/tictactoe" component = {Tictactoe} />
            <Route path = "/hangman" component = {Hangman} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
