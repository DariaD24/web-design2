import React from 'react';

function NumberFilter({ numbers }) {
  return (
    <ul>
      {numbers.filter(num => num % 2 === 0).map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}

export default NumberFilter;