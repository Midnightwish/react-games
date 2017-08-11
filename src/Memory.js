import React from 'react';
import StartGame from './Memory/StartGame.js';
import Board from './Memory/Board.js';
import Counter from './Memory/Counter.js';

class Memory extends React.Component {

  render() {
    return (
      <div className = "memory">
        <StartGame />
        <div className = "memory-game">
          <Board />
          <Counter />
        </div>
      </div>
    );
  }
}

export default Memory;
