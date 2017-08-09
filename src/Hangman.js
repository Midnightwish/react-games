import React from 'react';
import Password from './Hangman/Password.js';
import Picture from './Hangman/Picture.js';
import KeyChoice from './Hangman/KeyChoice.js';

class Hangman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      clean_password: ""
    };

    this.randomPassword = this.randomPassword.bind(this);
    this.letterCheck = this.letterCheck.bind(this);
  }

  componentDidMount() {
    this.randomPassword();
  }

  randomPassword() {
    // Wybór hasła z tablicy
    const password_list = ["teęst", "inny test"]; // chwilowo tutaj
    const number = Math.floor(Math.random() * (password_list.length));
    const clean_password = password_list[number].toUpperCase();
    const currently_password = password_list[number].split('');

    // Zmiana hasła na wykreskowane
    let hidden_password = "";

    for (let i = 0; i < currently_password.length; i++ )
    {
      if (currently_password[i] === " ") {
        hidden_password += " ";
      } else {
        hidden_password += "-";
      }
    }

    // Ustawienie ukrytego i czystego hasła jako state
    this.setState({clean_password: clean_password});
    this.setState({password: hidden_password});
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
    }

    this.setState({password: hidden_password.join('')});
  }

  render() {
    return (
      <div className = "game">
        <div className = "container">
          <Password hiddenPassword = {this.state.password} />
          <div id = "hangman">
            <Picture />
            <KeyChoice letterCheck = {this.letterCheck} randomPassword = {this.randomPassword} />
          </div>
        </div>
      </div>
    );
  }
}

export default Hangman;
