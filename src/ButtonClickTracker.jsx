import React, { useState } from 'react';

const ButtonClickTracker = () => {
  const buttons = ['Button1', 'Button2', 'Button3'];

  const [count, setCount] = useState(Array(buttons.length).fill(0));

  function handleClick(index) {
    const newCount = [...count];
    newCount[index] += 1;
    setCount(newCount);
  }

  return (
    <div>
      {buttons.map((item, index) => (
        <div>
          {' '}
          <button onClick={() => handleClick(index)}>{item} </button>
          <p> {count[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default ButtonClickTracker;
