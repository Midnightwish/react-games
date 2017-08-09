import React from 'react';
import Password from './Hangman/Password.js';
import Picture from './Hangman/Picture.js';
import KeyChoice from './Hangman/KeyChoice.js';
import Win from './Hangman/Win.js';
import Loose from './Hangman/Loose.js';

class Hangman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      clean_password: "",
      counter: 0
    };

    this.resetGame = this.resetGame.bind(this);
    this.letterCheck = this.letterCheck.bind(this);
  }

  componentDidMount() {
    this.loadGame();
  }

  resetGame(event) {
    this.loadGame();
    let reset_divs = event.target.parentElement.parentElement.firstChild.children;
    for (let i = 0 ; i < reset_divs.length; i++)
    {
      // Czyszczenie klas divów zawierających użyte litery
      if (reset_divs[i].classList.length > 1)
      {
        reset_divs[i].classList.add('letters');
        reset_divs[i].classList.remove('clicked-letters');
        reset_divs[i].classList.remove('green');
        reset_divs[i].classList.remove('red');
      }
    }
  }

  loadGame() {
    // Wybór hasła z tablicy
    const password_list = ["teęst", "inny test"]; // chwilowo tutaj
    const number = Math.floor(Math.random() * (password_list.length));
    const clean_password = password_list[number].toUpperCase();
    const currently_password = password_list[number].split('');

    // Zmiana hasła na wykreskowane
    let hidden_password = "";
    for (let i = 0; i < currently_password.length; i++)
    {
      if (currently_password[i] === " ") {
        hidden_password += " ";
      } else {
        hidden_password += "-";
      }
    }

    // Ustawienie ukrytego i czystego hasła jako state oraz licznika na 0
    this.setState({clean_password: clean_password});
    this.setState({password: hidden_password});
    this.setState({counter: 0});
  }

  letterCheck(event, letter) {
    let class_name = event.currentTarget.classList;
    class_name.add('clicked-letters');
    class_name.remove('letters');

    //  Pobranie czystego hasła w celu porównania kliknętej litery
    const password_length = this.state.password.length;
    const clean_password = this.state.clean_password.split('');

    //  Pobranie ukrytego hasła w celu podmiany liter
    let hidden_password = this.state.password.split('');

    //  Zamiana liter w ukrytym haśle i aktualizacja state oraz sprawdzenie warunków czy dana litera wystąpiła, dodanie odpowiedniej klasy CSS
    for (let i = 0; i < password_length; i++)
    {
      if (clean_password[i] === letter)
      {
        hidden_password[i] = letter;
        class_name.add('green');
      }
    }
    if (class_name.length === 1)
    {
      class_name.add('red');
      this.setState({counter: this.state.counter + 1});
    }

    this.setState({password: hidden_password.join('')});
  }

  render() {
    const letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U',  'W', 'Y', 'Z', 'Ż', 'Ź'];
    const counter = this.state.counter;
    const hidden_password = this.state.password;
    const clean_password = this.state.clean_password;

    let content = null;
    if(counter > 7) {
      content = <Loose resetGame = {this.resetGame} />
    } else {
      if(hidden_password === clean_password) {
        content = <Win resetGame = {this.resetGame} />
      } else {
        content = <KeyChoice counter = {counter} letters = {letters} letterCheck = {this.letterCheck} resetGame = {this.resetGame} />
      }
    }

    return (
      <div className = "game">
        <div className = "container">
          <Password hiddenPassword = {hidden_password} />
          <div id = "hangman">
            <Picture counter = {counter} />
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default Hangman;
