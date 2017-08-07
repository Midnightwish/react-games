import React from 'react';

class KeyChoice extends React.Component {

  render() {
    const letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U',  'W', 'Y', 'Z', 'Ż', 'Ź'];

    return (
      <div id = "choice-container">
        <div id = "keyboard">
          {letters.map((letter) =>
            <div key = {letter.id}>
              {letter}
            </div>
          )}
        </div>
        <div id = "newgame">
          <button onClick = {this.props.onButtonClick} >New Game!</button>
        </div>
      </div>
    );
  }
}

export default KeyChoice;
