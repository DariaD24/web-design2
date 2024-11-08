import React, { useState } from 'react';

function Element() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, `Котик ${items.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Добавить котиков</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Element;
