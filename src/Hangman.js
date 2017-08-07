import React from 'react';
import Password from './Hangman/Password.js';
import Picture from './Hangman/Picture.js';
import KeyChoice from './Hangman/KeyChoice.js';

class Hangman extends React.Component {

  ButtonClick() {
    alert("test");
    // start new game
  }

  render() {
    return (
      <div className = "game">
        <div className = "container">
          <Password />
          <div id = "hangman">
            <Picture />
            <KeyChoice ButtonClick = {this.ButtonClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Hangman;
