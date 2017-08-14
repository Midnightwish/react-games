import React from 'react';

const Board = (props) => {
  return (
    <div className = "memory-board">
      {props.play_array.map((number, index) =>
        <div className = "numbers" id = {`numbers${index}`} key = {index} onClick = {(event) => props.numberCheck(event, number)} >
          {number}
        </div>
      )}
    </div>
  );
}

export default Board;
