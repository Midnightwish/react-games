import React from 'react';

const Lose = (props) => {
  return (
    <div id = "choice-container">Przegrana!
      <div className = "lose" onClick = {(event) => props.resetGame(event)} >Zagraj jeszcze raz</div>
    </div>
  );
}

export default Lose;
