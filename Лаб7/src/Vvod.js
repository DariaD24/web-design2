import React, { useState } from 'react';

function Vvod() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleBlur = () => {
    setMessage(`Вы ввели: ${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {message && <p>{message}</p>}
    </div>
  );
}

export default Vvod;
