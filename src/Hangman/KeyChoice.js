import React from 'react';

class KeyChoice extends React.Component {
  render() {
    return (
      <div id ="choice-container">
        <div id = "keyboard">
          Litery do wyboru
        </div>
        <div id = "newgame">
          <button onClick = {this.props.ButtonClick} >New Game!</button>
        </div>
      </div>
    );
  }
}

export default KeyChoice;
