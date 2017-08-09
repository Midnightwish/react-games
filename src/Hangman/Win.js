import React from 'react';

const Win = (props) => {
  return (
    <div id = "choice-container">Gratulacje, udało Ci się wygrać!
      <div className = "win" onClick = {(event) => props.resetGame(event)} >Zagraj jeszcze raz</div>
    </div>
  );
}

export default Win;
