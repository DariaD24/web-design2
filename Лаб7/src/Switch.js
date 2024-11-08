import React, { useState } from 'react';

function Switch() {
  const [buttonText, setButtonText] = useState('Вкл');
  
  const changeButtonText = () => {
    if (buttonText === 'Вкл') {
      setButtonText('Выкл');
    } else if (buttonText === 'Выкл') {
      setButtonText('Вкл');
    }
  };

  return (
    <div>
      <button onClick={changeButtonText}>{buttonText}</button>
    </div>
  );
}

export default Switch;