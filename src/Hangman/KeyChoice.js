import React from 'react';

class KeyChoice extends React.Component {

  render() {
    const letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U',  'W', 'Y', 'Z', 'Ż', 'Ź'];

    return (
      <div id = "choice-container">
        <div id = "keyboard">
          {letters.map((letter, index) =>
            <div className = "letters" id = {`letter${index}`} key = {index} onClick = {(event) => this.props.letterCheck(event, letter)} >
              {letter}
            </div>
          )}
        </div>
        <div id = "newgame">
          <button onClick = {this.props.randomPassword} >New Game!</button>
        </div>
      </div>
    );
  }
}

export default KeyChoice;
