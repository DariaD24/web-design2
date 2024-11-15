import React from 'react';

function SortedStringList({ items }) {
  const sortedItems = [...items].sort();

  return (
    <ul>
      {sortedItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default SortedStringList;
