import React from 'react';

function HoverList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="hover-item">{item}</li>
      ))}
    </ul>
  );
}

export default HoverList;
