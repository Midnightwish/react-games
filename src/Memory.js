import React from 'react';
import StartGame from './Memory/StartGame.js';
import Board from './Memory/Board.js';
import Counter from './Memory/Counter.js';

const game_array = [[1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20]];

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      shuffled_array: [],
      first_click: [],
      second_click: []
    }

    this.shuffleArray = this.shuffleArray.bind(this);
    this.numberCheck = this.numberCheck.bind(this);
  }

  componentDidMount() {
    this.loadGame();
  }

  loadGame() {
    let start_board = Math.floor(Math.random() * game_array.length);
    let chosen_difficulty = game_array[start_board];
    this.shuffle(chosen_difficulty);
  }

  shuffleArray(event) {
    this.setState({counter: 0});
    let difficulty = event.currentTarget.textContent;
    //  Wybór tablicy gry w zależności od klikniętego przycisku
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

      //  Przygotowanie do usunięcia losowego elementu z tablicy
      let to_del = Math.floor(Math.random() * (help_length));
      let delete_array = []; // tablica z której będą usuwane wartości co iterację
      let k = 0;

      //  Przypisanie wszystkich wartości prócz usuniętej do "delete_array"
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
          //  Dodanie losowo usuniętego elementu to potasowanej tablicy
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
    this.setState({shuffled_array: shuffled});
  }

  numberCheck(event, number) {
    let clicked = event.currentTarget;
    clicked.setAttribute("name", `${number}`);
    //zrobic pod klika nieparzystego

    if (clicked.classList.length === 1)
    {
      clicked.classList.add("visible");
      // Pierwszy klik
      if ((this.state.counter + 1)%2 === 1)
      {
        this.setState({first_click: [clicked.id, clicked.getAttribute("name")]});
      //Drugi klik
      } else if ((this.state.counter + 1)%2 === 0) {
          this.setState({second_click: [clicked.id, clicked.getAttribute("name")]});
          // Różne "id"
          if (this.state.first_click[0] !== this.state.second_click[0])
          {
            // Taka sama wartość "name"
            if (this.state.first_click[1] === this.state.second_click[1])
            {
              this.setState({first_click: []});
              this.setState({second_click: []});
            } else {
              clicked.classList.remove("visible");
              // ...
              this.setState({first_click: []});
              this.setState({second_click: []});
            }
          } else {
            // ...
            this.setState({first_click: []});
            this.setState({second_click: []});
          }
        }

      this.setState({counter: this.state.counter + 1});
    }
  }

  render() {
    console.log(this.state.first_click);
    console.log(this.state.second_click);

    const counter = this.state.counter;
    const play_array = this.state.shuffled_array;

    return (
      <div className = "memory">
        <StartGame shuffle = {this.shuffleArray} />
        <div className = "memory-game">
          <Board numberCheck = {this.numberCheck} play_array = {play_array} />
          <Counter counter = {counter} />
        </div>
      </div>
    );
  }
}

export default Memory;
