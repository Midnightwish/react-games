import React from 'react';

const Hangman = () => {
  return (
    <div className = "game">
      <div className = "container">
        <div id = "password">Hasło</div>
        <div id = "hangman">
          <div id = "picture">Obrazek wisielca</div>
          <div id = "choice-container">
            <div id = "keyboard">Litery do wyboru</div>
            <div id = "newgame">Zacznij nową grę!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hangman;
