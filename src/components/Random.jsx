import React from 'react';

const Random = ({ min, max }) => {
  let randomValue = Math.floor(Math.random() * max + min);
  return (
    <div className="idMessage">
      <p>
        Random number between {min} and {max} is {randomValue}
      </p>
    </div>
  );
};

export default Random;
