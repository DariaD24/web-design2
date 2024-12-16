import React, { useState } from 'react';

function CharCount() {
  const [text, setText] = useState('');
  const maxLength = 50;

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        placeholder="Введите текст"
      />
      <p>Осталось символов: {maxLength - text.length}</p>
    </div>
  );
}

export default CharCount;
