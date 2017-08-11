import React from 'react';
import StartGame from './Memory/StartGame.js';
import Board from './Memory/Board.js';
import Counter from './Memory/Counter.js';

const game_array = [[1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20]];

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }

    this.shuffleArray = this.shuffleArray.bind(this);
  }

  shuffleArray(event) {
    let difficulty = event.currentTarget.textContent;
    if (difficulty === "Łatwy")
    {
      this.shuffle(game_array[0]);
    } else if (difficulty === "Średni") {
      this.shuffle(game_array[1]);
    } else {
      this.shuffle(game_array[2]);
    }
  }

  shuffle(arr) {
  //  console.log(arr);
    let help_array = []; // pomocnicza tablica, co iterację zmniejsza długość o 1
    let shuffled = [];  // wymieszana tablica

    for (let i = 0; i < arr.length; i++)
    {
      let help_length;
      if (i === 0)
      {
        help_length = arr.length;
      } else {
        help_length = help_array.length;
      }
      let to_del = Math.floor(Math.random() * (help_length));
      let delete_array = []; // tablica z której będą usuwane wartości co iterację
      let k = 0;
      for (let j = 0; j < help_length; j++)
      {
        if (j !== to_del)
        {
          if (i === 0)
          {
            delete_array[k] = arr[j];
          } else {
            delete_array[k] = help_array[j];
          }
          k++;
        } else {
          if (i === 0)
          {
            shuffled[i] = arr[j];
          } else {
            shuffled[i] = help_array[j];
          }
        }
      }
      help_array = delete_array;
    }
    console.log(shuffled);
  }

  //startGame() {
  //}

  render() {
    const counter = this.state.counter;

    return (
      <div className = "memory">
        <StartGame shuffle = {this.shuffleArray} />
        <div className = "memory-game">
          <Board />
          <Counter counter = {counter} />
        </div>
      </div>
    );
  }
}

export default Memory;
