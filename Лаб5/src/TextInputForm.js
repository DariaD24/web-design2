import React, { useState } from 'react';

function TextInputForm() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Отправлено: ${input}`);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите текст"
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default TextInputForm;
