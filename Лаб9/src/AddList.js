import React, { useState } from 'react';

function AddList({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={addItem}>Добавить элемент</button>
    </div>
  );
}

export default AddList;