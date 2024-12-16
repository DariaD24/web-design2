import React, { useState } from 'react';

function EditHeader() {
  const [title, setTitle] = useState('Редактируемый заголовок');

  return (
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}

export default EditHeader;
