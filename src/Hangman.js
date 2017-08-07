import React from 'react';
import Password from './Hangman/Password.js';
import Picture from './Hangman/Picture.js';
import KeyChoice from './Hangman/KeyChoice.js';

class Hangman extends React.Component {
  constructor(props) {
    super(props);
    this.state = {password: ""};

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    this.onButtonClick();
  }

  onButtonClick() {
    const password_list = ["test", "inny test"]; // chwilowo tutaj
    const number = Math.floor(Math.random() * (password_list.length));
    const currently_password = password_list[number].split('');
    let hidden_password = "";

    for (let i = 0; i < currently_password.length; i++ )
    {
      if (currently_password[i] === " ") {
        hidden_password += " ";
      } else {
        hidden_password += "-";
      }
    }

    this.setState({password: hidden_password})
  }

  render() {
    return (
      <div className = "game">
        <div className = "container">
          <Password hiddenPassword = {this.state.password} />
          <div id = "hangman">
            <Picture />
            <KeyChoice onButtonClick = {this.onButtonClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Hangman;
