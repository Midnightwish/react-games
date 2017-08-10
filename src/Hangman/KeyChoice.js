import React from 'react';

const KeyChoice = (props) => {
  return (
    <div id = "choice-container">
      <div id = "keyboard">
        {props.letters.map((letter, index) =>
          <div className = "letters" id = {`letter${index}`} key = {index} onClick = {(event) => props.letterCheck(event, letter)} >
            {letter}
          </div>
        )}
      </div>
      <div id = "newgame">
        <button onClick = {(event) => props.resetGame(event)} >New Game!</button>
      </div>
    </div>
  );
}

export default KeyChoice;
