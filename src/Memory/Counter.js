import React from 'react';

const Counter = (props) => {
  return (
    <div className = "memory-counter">
      <p>Ilość kliknięć: {props.counter}</p>
      <p>Czas gry: </p>
    </div>
  );
}

export default Counter;
