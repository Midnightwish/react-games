import React from 'react';

const StartGame = (props) => {
  return (
    <div className = "memory-start">
      <button className = "game-button" onClick = {(event) => props.shuffle(event)}>Łatwy</button>
      <button className = "game-button" onClick = {(event) => props.shuffle(event)}>Średni</button>
      <button className = "game-button" onClick = {(event) => props.shuffle(event)}>Trudny</button>
    </div>
  );
}

export default StartGame;
