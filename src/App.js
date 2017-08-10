import React, { Component } from 'react';
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
        </div>
        <BrowserRouter>
          <div id = "list">
            <ul>
              <li>
                <div className = "list">
                  <Link to = "/memory">Memory Game</Link>
                </div>
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
