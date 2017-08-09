import React from 'react';

const Loose = (props) => {
  return (
    <div id = "choice-container">Przegrana!
      <div className = "loose" onClick = {(event) => props.resetGame(event)} >Zagraj jeszcze raz</div>
    </div>
  );
}

export default Loose;
