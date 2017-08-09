import React from 'react';

class KeyChoice extends React.Component {

  render() {
    return (
      <div id = "choice-container">
        <div id = "keyboard">
          {this.props.letters.map((letter, index) =>
            <div className = "letters" id = {`letter${index}`} key = {index} onClick = {(event) => this.props.letterCheck(event, letter)} >
              {letter}
            </div>
          )}
        </div>
        <div id = "newgame">
          <button onClick = {(event) => this.props.resetGame(event)} >New Game!</button>
        </div>
      </div>
    );
  }
}

export default KeyChoice;
